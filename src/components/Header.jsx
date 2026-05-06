import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { routes } from "../data.js";
import { withBasePath } from "../paths.js";

const navRoutes = routes.filter((route) => !route.cta);
const ctaRoute = routes.find((route) => route.cta);

export function Header({ currentPath, onNavigate }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const go = (path) => (event) => {
    event.preventDefault();
    onNavigate(path);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/94 text-white shadow-[0_18px_48px_rgb(7_17_31/0.32)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[78px] max-w-[1220px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <a className="group flex items-center gap-3" href={withBasePath("/")} onClick={go("/")} aria-label="Hope's Safety Backpack home">
          <span className="grid h-13 w-14 place-items-center overflow-hidden rounded-full border border-white/12 bg-white/8 shadow-[0_16px_32px_rgb(0_0_0/0.2)] transition group-hover:-translate-y-0.5">
            <img className="h-11 w-[30px] scale-[1.45]" src={withBasePath("/assets/logo-mark.svg")} alt="" width="56" height="56" />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black uppercase leading-none tracking-normal">Hope's Safety</span>
            <span className="mt-1 block text-xs font-bold uppercase tracking-normal text-white/55">Backpack</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/6 px-2 py-1.5 lg:flex" aria-label="Main navigation">
          {navRoutes.map((route) => {
            const active = currentPath === route.path;
            return (
              <a
                key={route.path}
                href={withBasePath(route.path)}
                className={`relative inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-black transition ${
                  active ? "text-white" : "text-white/64 hover:bg-white/8 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
                onClick={go(route.path)}
              >
                <span>{route.label}</span>
                {active ? <span className="absolute inset-x-4 -bottom-1 h-1 rounded-full bg-gradient-to-r from-safety-red via-safety-orange to-safety-gold" /> : null}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {/* <span className="inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/6 px-4 text-xs font-black uppercase tracking-normal text-white/68">
            <ShieldCheck size={15} aria-hidden="true" />
            Safety-first
          </span> */}
          {ctaRoute ? (
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-safety-red to-safety-orange px-6 py-2 text-sm font-black text-white shadow-[0_16px_36px_rgb(215_25_32/0.28)] transition hover:-translate-y-0.5"
              href={withBasePath(ctaRoute.path)}
              onClick={go(ctaRoute.path)}
            >
              Request Info
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <button
          className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/12 bg-white/8 text-white shadow-[0_16px_32px_rgb(0_0_0/0.22)] lg:hidden"
          type="button"
          aria-controls="site-navigation-mobile"
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="site-navigation-mobile"
        className={`${open ? "grid" : "hidden"} mx-4 mb-4 gap-2 rounded-[1.5rem] border border-white/10 bg-[#0b1728] p-3 shadow-lift lg:hidden`}
        aria-label="Mobile navigation"
      >
        {navRoutes.map((route) => {
          const active = currentPath === route.path;
          return (
            <a
              key={route.path}
              href={withBasePath(route.path)}
              className={`flex min-h-12 items-center justify-between rounded-2xl px-4 text-lg font-black ${
                active ? "bg-white text-command" : "text-white/76 hover:bg-white/8 hover:text-white"
              }`}
              aria-current={active ? "page" : undefined}
              onClick={go(route.path)}
            >
              {route.label}
              {active ? <span className="h-2 w-2 rounded-full bg-safety-red" /> : null}
            </a>
          );
        })}
        {ctaRoute ? (
          <a
            className="mt-2 inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-safety-red to-safety-orange px-4 py-3 text-lg font-black text-white"
            href={withBasePath(ctaRoute.path)}
            onClick={go(ctaRoute.path)}
          >
            {ctaRoute.label}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        ) : null}
      </nav>
    </header>
  );
}
