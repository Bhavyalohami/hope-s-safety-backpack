import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { SEO } from "./components/SEO.jsx";

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
  "/financial": Ambassadors,
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
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setCurrentPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = useCallback((path) => {
    const nextPath = normalizePath(path);
    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
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
