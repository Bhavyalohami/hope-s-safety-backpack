import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { SEO } from "./components/SEO.jsx";
import { getCurrentRoutePath, withRoutePath } from "./paths.js";

const Home = lazy(() => import("./pages/Home.jsx"));
const Features = lazy(() => import("./pages/Features.jsx"));
const Story = lazy(() => import("./pages/Story.jsx"));
const Ambassadors = lazy(() => import("./pages/Ambassadors.jsx"));
const SalesTeam = lazy(() => import("./pages/SalesTeam.jsx"));
const SafetyClub = lazy(() => import("./pages/SafetyClub.jsx"));
const Forms = lazy(() => import("./pages/Forms.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const pages = {
  "/": Home,
  "/features": Features,
  "/story": Story,
  "/ambassadors": Ambassadors,
  "/financial": Ambassadors,
  "/helper-team": SalesTeam,
  "/sales-agenda": SalesTeam,
  "/safety-club": SafetyClub,
  "/forms": Forms,
  "/page-two": Forms,
};

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "");
}

function PageLoader() {
  return (
    <main className="grid min-h-[62svh] place-items-center font-black text-muted" aria-live="polite">
      <span>Loading Hope's Safety Backpack</span>
    </main>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(getCurrentRoutePath()));

  useEffect(() => {
    const handleRouteChange = () => setCurrentPath(normalizePath(getCurrentRoutePath()));
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const navigate = useCallback((path) => {
    const nextPath = normalizePath(path);
    const browserPath = withRoutePath(nextPath);
    const currentBrowserPath = `${window.location.pathname}${window.location.hash}`;
    if (currentBrowserPath !== browserPath) {
      window.history.pushState({}, "", browserPath);
    }
    setCurrentPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const Page = useMemo(() => pages[currentPath] || NotFound, [currentPath]);

  return (
    <>
      <SEO path={currentPath} />
      <Header currentPath={currentPath === "/page-two" ? "/forms" : currentPath} onNavigate={navigate} />
      <Suspense fallback={<PageLoader />}>
        <Page onNavigate={navigate} />
      </Suspense>
      <Footer onNavigate={navigate} />
    </>
  );
}
