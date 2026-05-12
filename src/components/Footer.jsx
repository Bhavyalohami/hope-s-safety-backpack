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
      ["Helpers", "/ambassadors"],
      ["Safety Club", "/safety-club"],
    ],
  },
  {
    title: "Team",
    links: [
      ["Team Guide", "/helper-team"],
      ["Applications", "/forms"],
      ["Contact", "/forms"],
    ],
  },
];

export function Footer({ hideReminder = false, onNavigate }) {
  const go = (path) => (event) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="kid-dots relative overflow-hidden border-t-4 border-dashed border-safety-gold/50 text-command">
      <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-safety-blue via-safety-teal via-safety-gold to-safety-red" aria-hidden="true" />
      <div className="absolute -right-24 top-20 h-52 w-52 rotate-12 rounded-[3rem] border-4 border-dashed border-safety-blue/25 bg-white/45" aria-hidden="true" />
      <div className="absolute -left-20 bottom-20 h-44 w-44 -rotate-12 rounded-full border-4 border-dashed border-safety-red/25 bg-yellow-100/60" aria-hidden="true" />

      {!hideReminder ? (
        <section className="relative mx-auto max-w-[1220px] px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="kid-paper rounded-[2rem] border-4 border-dashed border-safety-blue/35 p-7 shadow-lift sm:p-10">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-safety-gold/70 bg-yellow-100 px-3 py-1 text-xs font-black uppercase tracking-normal text-safety-red">
                <ShieldCheck size={15} aria-hidden="true" />
                Hope's reminder
              </p>
              <h2 className="max-w-3xl text-balance text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">
                Big safety ideas can start with one brave kid question.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-body">
                Hope's Safety Backpack brings lights, care supplies, family support, and kindness into one bright school-day idea.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-command bg-gradient-to-r from-safety-red to-safety-orange px-5 py-3 text-sm font-black text-white shadow-[0_8px_0_rgb(12_20_37/0.16)] transition hover:-translate-y-0.5"
                  href={withRoutePath("/forms")}
                  onClick={go("/forms")}
                >
                  Request Information
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-command bg-white px-5 py-3 text-sm font-black text-command shadow-[0_8px_0_rgb(12_20_37/0.1)] transition hover:-translate-y-0.5"
                  href={withRoutePath("/story")}
                  onClick={go("/story")}
                >
                  Read Hope's Story
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["Be seen", "Bright cues make the safety story easy to notice."],
                ["Be ready", "Helpful supplies stay central to the school-day idea."],
                ["Be kind", "Programs help students practice courage and leadership."],
              ].map(([title, text], index) => (
                <article className={`rounded-[1.5rem] border-2 border-command/10 p-6 shadow-soft ${index === 0 ? "bg-cyan-100" : index === 1 ? "bg-yellow-100" : "bg-green-100"}`} key={title}>
                  <span className="block text-3xl font-black text-command">{title}</span>
                  <p className="mt-2 text-sm font-bold leading-6 text-body">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="relative border-t-4 border-dashed border-command/10 bg-white/70">
        <div className="mx-auto grid max-w-[1220px] gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[1.05fr_1.2fr_auto] lg:px-8">
          <div>
            <a className="group inline-flex max-w-full items-center gap-3 rounded-[1.35rem] border-2 border-dashed border-command/15 bg-white/80 p-3 pr-5 shadow-soft transition hover:-translate-y-0.5 hover:bg-white" href={withRoutePath("/")} onClick={go("/")} aria-label="Hope's Safety Backpack home">
              <picture className="block h-16 w-16 shrink-0 overflow-hidden rounded-full bg-command shadow-[0_7px_0_rgb(12_20_37/0.1)]">
                <source
                  type="image/webp"
                  srcSet={`${withBasePath("/assets/hope-brand-512.webp")} 512w, ${withBasePath("/assets/hope-brand.webp")} 1038w`}
                  sizes="64px"
                />
                <img
                  className="h-full w-full object-cover"
                  src={withBasePath("/assets/hope-brand.webp")}
                  alt=""
                  width="64"
                  height="64"
                  loading="lazy"
                />
              </picture>
              <span className="min-w-0">
                <span className="block text-xl font-black leading-none text-command">Hope's Safety</span>
                <span className="mt-1 block text-xl font-black leading-none text-command">Backpack</span>
                <span className="mt-2 block text-xs font-black uppercase tracking-normal text-safety-red">Be seen. Be ready. Be kind.</span>
              </span>
            </a>
            <p className="mt-5 max-w-md leading-7 text-body">{site.description}</p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-muted">
              <MapPin size={17} aria-hidden="true" />
              Orlando, Florida
            </p>
          </div>

          <nav className="grid gap-7 sm:grid-cols-3" aria-label="Footer navigation">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black uppercase tracking-normal text-safety-red">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map(([label, href]) => (
                    <a
                      className="w-fit rounded-full bg-yellow-50 px-3 py-1 text-sm font-bold text-body transition hover:bg-yellow-100 hover:text-command"
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
            <h3 className="text-sm font-black uppercase tracking-normal text-safety-red">Connect</h3>
            <div className="mt-4 flex flex-wrap gap-2 lg:max-w-40">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  className="inline-grid h-11 w-11 place-items-center rounded-full border-2 border-command/10 bg-white text-command shadow-soft transition hover:-translate-y-0.5 hover:bg-yellow-100"
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

        <div className="mx-auto flex max-w-[1220px] flex-wrap items-center justify-between gap-4 border-t border-command/10 px-5 py-6 text-sm font-bold text-muted sm:px-6 lg:px-8">
          <span>Hope's Safety Backpack</span>
          <span>Be seen. Be ready. Be kind.</span>
        </div>
      </section>
    </footer>
  );
}
