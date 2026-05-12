import React, { lazy, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { SEO } from "./components/SEO.jsx";
import { getCurrentRoutePath, withBasePath, withRoutePath } from "./paths.js";

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
  const isHome = currentPath === "/";

  return (
    <div className={isHome ? "relative min-h-screen bg-command" : ""}>
      {isHome ? (
        <>
          <div className="pointer-events-none fixed inset-0 z-0 bg-command" aria-hidden="true">
            <picture className="h-full w-full">
              <source
                type="image/webp"
                srcSet={`${withBasePath("/assets/hero-backpack-720.webp")} 720w, ${withBasePath("/assets/hero-backpack-2x.webp")} 2508w`}
                sizes="100vw"
              />
              <img
                className="h-full w-full object-contain object-center saturate-[1.08]"
                src={withBasePath("/assets/hero-backpack-2x.webp")}
                alt=""
                width="2508"
                height="2508"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </div>
          <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_18%_16%,rgb(247_181_0/0.28),transparent_22rem),radial-gradient(circle_at_82%_26%,rgb(21_94_239/0.22),transparent_24rem),linear-gradient(90deg,rgb(12_20_37/0.88),rgb(12_20_37/0.55)_48%,rgb(12_20_37/0.36))]" aria-hidden="true" />
        </>
      ) : null}
      <div className={isHome ? "relative z-10" : ""}>
      <SEO path={currentPath} />
      <Header currentPath={currentPath === "/page-two" ? "/forms" : currentPath} onNavigate={navigate} />
      <Suspense fallback={<PageLoader />}>
        <Page onNavigate={navigate} />
      </Suspense>
      <Footer hideReminder={isHome} onNavigate={navigate} />
      </div>
    </div>
  );
}
