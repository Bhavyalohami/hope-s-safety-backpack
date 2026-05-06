import { ArrowRight, Facebook, Instagram, Mail, MapPin, ShieldCheck, Youtube } from "lucide-react";
import { site } from "../data.js";
import { withBasePath, withRoutePath } from "../paths.js";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];

const footerGroups = [
  {
    title: "Product",
    links: [
      ["Home", "/"],
      ["Features", "/features"],
      ["Forms", "/forms"],
    ],
  },
  {
    title: "Mission",
    links: [
      ["Hope's Story", "/story"],
      ["Ambassadors", "/financial"],
      ["Safety Club", "/safety-club"],
    ],
  },
  {
    title: "Team",
    links: [
      ["Sales Team", "/sales-agenda"],
      ["Applications", "/forms"],
      ["Contact", "/forms"],
    ],
  },
];

export function Footer({ onNavigate }) {
  const go = (path) => (event) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="relative overflow-hidden bg-[#050d18] text-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-safety-blue via-safety-teal via-safety-gold to-safety-red" aria-hidden="true" />
      <div className="absolute -right-36 top-16 h-72 w-72 rounded-full bg-safety-blue/18 blur-3xl" aria-hidden="true" />
      <div className="absolute -left-28 bottom-20 h-72 w-72 rounded-full bg-safety-red/16 blur-3xl" aria-hidden="true" />

      <section className="relative mx-auto max-w-[1220px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/7 p-7 shadow-lift backdrop-blur sm:p-10">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-black uppercase tracking-normal text-[#71f0df]">
              <ShieldCheck size={15} aria-hidden="true" />
              Safety starts with confidence
            </p>
            <h2 className="max-w-3xl text-balance text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">
              A student-created idea for safer, more prepared school days.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Hope's Safety Backpack brings visibility, readiness, and positive student leadership into one memorable product story.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-safety-red to-safety-orange px-5 py-3 text-sm font-black text-white shadow-[0_16px_36px_rgb(215_25_32/0.26)] transition hover:-translate-y-0.5"
                href={withRoutePath("/forms")}
                onClick={go("/forms")}
              >
                Request Information
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/16 bg-white/8 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/12"
                href={withRoutePath("/story")}
                onClick={go("/story")}
              >
                Read Hope's Story
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Visible", "Lighting and awareness cues make the safety story easy to see."],
              ["Prepared", "Emergency supplies and daily readiness stay central to the concept."],
              ["Empowered", "Programs help students practice confidence, kindness, and leadership."],
            ].map(([title, text]) => (
              <article className="rounded-[1.5rem] border border-white/10 bg-white/7 p-6 backdrop-blur" key={title}>
                <span className="block text-3xl font-black text-white">{title}</span>
                <p className="mt-2 text-sm font-bold leading-6 text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[1.05fr_1.2fr_auto] lg:px-8">
          <div>
            <img className="w-48" src={withBasePath("/assets/brand-logo.svg")} alt="Hope's Safety Backpack" width="190" height="79" loading="lazy" />
            <p className="mt-5 max-w-md leading-7 text-white/66">{site.description}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white/58">
              <MapPin size={17} aria-hidden="true" />
              Orlando, Florida
            </p>
          </div>

          <nav className="grid gap-7 sm:grid-cols-3" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black uppercase tracking-normal text-white">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map(([label, href]) => (
                    <a
                      className="w-fit text-sm font-bold text-white/62 transition hover:text-white"
                      href={withRoutePath(href)}
                      key={label}
                      onClick={go(href)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div>
            <h3 className="text-sm font-black uppercase tracking-normal text-white">Connect</h3>
            <div className="mt-4 flex flex-wrap gap-2 lg:max-w-40">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  className="inline-grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/7 text-white transition hover:-translate-y-0.5 hover:bg-white/12"
                  href={href}
                  key={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 border-t border-white/10 px-5 py-6 text-sm font-bold text-white/48 sm:px-6 lg:px-8">
          <span>Hope's Safety Backpack</span>
          <span>Visibility. Preparedness. Student confidence.</span>
        </div>
      </section>
    </footer>
  );
}
