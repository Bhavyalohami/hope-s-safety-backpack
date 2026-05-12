import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { withBasePath, withRoutePath } from "../paths.js";

const heroAlign = {
  left: "items-center text-left",
  right: "items-center text-left lg:justify-items-end",
  center: "items-end text-center justify-items-center",
};

const heroCopy = {
  left: "w-full max-w-3xl",
  right: "w-full max-w-3xl lg:mr-0",
  center: "mx-auto w-full max-w-4xl",
};

export function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px",
  });

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function ButtonLink({ href, children, onNavigate, variant = "primary", icon: Icon = ArrowRight }) {
  const variants = {
    primary:
      "border-command bg-gradient-to-r from-safety-red via-safety-orange to-safety-gold text-white shadow-[0_8px_0_rgb(12_20_37/0.18)] hover:-translate-y-1 hover:shadow-lift",
    secondary:
      "border-command bg-white text-command shadow-[0_8px_0_rgb(12_20_37/0.12)] hover:-translate-y-1 hover:shadow-lift",
    ghost:
      "border-white/60 bg-white/20 text-white backdrop-blur hover:-translate-y-1 hover:bg-white/30",
    dark:
      "border-command bg-command text-white shadow-[0_8px_0_rgb(12_20_37/0.16)] hover:-translate-y-1 hover:shadow-lift",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 px-5 py-3 text-sm font-black leading-none transition ${variants[variant] || variants.primary}`}
      href={withRoutePath(href)}
      onClick={(event) => {
        if (!onNavigate) return;
        event.preventDefault();
        onNavigate(href);
      }}
    >
      <span>{children}</span>
      {Icon ? <Icon size={18} aria-hidden="true" /> : null}
    </a>
  );
}

export function ResponsiveImage({
  alt,
  src,
  webp,
  smallWebp,
  webpWidth = 1254,
  smallWebpWidth = 720,
  className = "",
  imageClassName = "",
  loading = "lazy",
  priority = false,
  sizes = "(max-width: 720px) 92vw, 48vw",
}) {
  const webpSet = [
    smallWebp ? `${withBasePath(smallWebp)} ${smallWebpWidth}w` : null,
    webp ? `${withBasePath(webp)} ${webpWidth}w` : null,
  ].filter(Boolean).join(", ");

  return (
    <picture className={className}>
      {webpSet ? <source type="image/webp" srcSet={webpSet} sizes={sizes} /> : null}
      <img
        src={withBasePath(src)}
        alt={alt}
        loading={priority ? "eager" : loading}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={imageClassName}
      />
    </picture>
  );
}

export function SectionHeader({ eyebrow, title, text, align = "left", tone = "light" }) {
  const dark = tone === "dark";
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} mb-8 max-w-4xl`}>
      <p className={`mb-3 inline-flex -rotate-1 rounded-xl border-2 px-3 py-1 text-xs font-black uppercase tracking-normal shadow-soft ${dark ? "border-white/25 bg-white/10 text-[#fff176]" : "border-command/10 bg-yellow-100 text-safety-red"}`}>{eyebrow}</p>
      <h2 className={`text-balance text-2xl font-black leading-tight sm:text-4xl lg:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {text ? <p className={`${align === "center" ? "mx-auto" : ""} mt-4 max-w-3xl text-lg leading-8 ${dark ? "text-white/75" : "text-muted"}`}>{text}</p> : null}
    </div>
  );
}

export function KidNote({ children, color = "yellow", className = "" }) {
  const colors = {
    yellow: "border-safety-gold/70 bg-yellow-100 text-command",
    blue: "border-safety-blue/45 bg-cyan-100 text-command",
    red: "border-safety-red/40 bg-red-100 text-command",
    green: "border-safety-teal/45 bg-green-100 text-command",
  };

  return (
    <div className={`relative w-fit max-w-md rotate-[-1.5deg] rounded-[1rem] border-4 border-dashed p-4 text-lg font-black leading-snug shadow-[0_10px_0_rgb(12_20_37/0.1)] ${colors[color] || colors.yellow} ${className}`}>
      <span className="absolute left-5 top-0 h-5 w-14 -translate-y-1/2 rotate-[-7deg] rounded-sm bg-white/70 shadow-soft" aria-hidden="true" />
      {children}
    </div>
  );
}

export function Hero({
  eyebrow,
  title,
  text,
  children,
  image,
  foregroundImage,
  graphic,
  imageAlt,
  align = "left",
  overlay = "left",
  kicker,
  stats = [],
  chips = [],
}) {
  const overlayClass =
    overlay === "right" ? "hero-vignette-right" : overlay === "center" ? "hero-vignette-center" : "hero-vignette";

  return (
    <section className={`relative isolate grid min-h-[76svh] overflow-hidden px-3 py-16 text-white sm:px-8 lg:min-h-[78svh] lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] ${heroAlign[align] || heroAlign.left}`}>
      <div className="absolute inset-0 -z-20 bg-command">
        {image ? (
          <ResponsiveImage
            alt={imageAlt}
            src={image.src}
            webp={image.webp}
            smallWebp={image.smallWebp}
            priority
            className="h-full w-full"
            imageClassName={`h-full w-full ${image.fit === "contain" ? "object-contain" : "object-cover"} ${image.position || ""} saturate-[1.08]`}
            sizes="100vw"
          />
        ) : (
          <img className="h-full w-full object-cover" src={withBasePath(graphic)} alt="" loading="eager" decoding="async" />
        )}
      </div>
      <div className={`absolute inset-0 -z-10 ${overlayClass}`} aria-hidden="true" />
      <div className="absolute left-5 top-24 hidden h-24 w-24 -rotate-12 rounded-[1.8rem] border-4 border-dashed border-safety-gold/80 bg-white/10 lg:block" aria-hidden="true" />
      <div className="absolute right-8 top-28 hidden h-16 w-16 rotate-12 rounded-full border-4 border-white/35 bg-safety-red/50 lg:block" aria-hidden="true" />
      <div className="absolute bottom-24 right-[14%] hidden h-20 w-20 rounded-[1.3rem] border-4 border-dashed border-safety-teal/75 bg-white/10 rotate-6 lg:block" aria-hidden="true" />
      <div className="absolute left-[8%] bottom-12 hidden h-3 w-32 -rotate-3 rounded-full bg-safety-gold/80 shadow-soft lg:block" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-r from-safety-blue via-safety-teal via-safety-gold to-safety-red" aria-hidden="true" />

      <div className={`relative z-10 ${heroCopy[align] || heroCopy.left} ${align === "right" ? "lg:text-right" : ""}`}>
        {kicker ? <p className="mb-4 inline-flex -rotate-1 rounded-xl border-2 border-command/25 bg-safety-gold px-4 py-2 text-xs font-black uppercase tracking-normal text-command shadow-[0_7px_0_rgb(12_20_37/0.18)]">{kicker}</p> : null}
        <p className="mb-3 inline-flex rounded-full border-2 border-white/25 bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-normal text-[#fff176] backdrop-blur">{eyebrow}</p>
        <h1 className="text-balance text-5xl font-black leading-[0.96] text-white drop-shadow-[0_5px_0_rgb(12_20_37/0.25)] sm:text-6xl">{title}</h1>
        <p className={`${align === "center" ? "mx-auto" : align === "right" ? "lg:ml-auto" : ""} mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl`}>{text}</p>
        {chips.length ? (
          <div className={`mt-6 flex max-w-full flex-wrap gap-2 ${align === "center" ? "justify-center" : align === "right" ? "lg:justify-end" : ""}`}>
            {chips.map((chip, index) => (
              <span className={`rounded-xl border-2 border-white/35 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-normal text-white shadow-soft backdrop-blur sm:px-3 sm:text-xs ${index % 4 === 0 ? "bg-safety-blue/75" : index % 4 === 1 ? "bg-safety-teal/75" : index % 4 === 2 ? "bg-safety-red/75" : "bg-safety-gold/80 text-command"}`} key={chip}>
                {chip}
              </span>
            ))}
          </div>
        ) : null}
        {children ? <div className={`mt-8 flex flex-wrap gap-3 ${align === "center" ? "justify-center" : align === "right" ? "lg:justify-end" : ""}`}>{children}</div> : null}
        {stats.length ? (
          <div className={`mt-10 grid gap-3 sm:grid-cols-3 ${align === "right" ? "lg:ml-auto" : ""} max-w-2xl`}>
            {stats.map(([value, label], index) => (
              <div className={`rounded-[1.1rem] border-2 border-white/25 p-4 shadow-soft backdrop-blur ${index % 3 === 0 ? "bg-white/15" : index % 3 === 1 ? "bg-safety-gold/20" : "bg-safety-teal/20"}`} key={label}>
                <strong className="block text-2xl font-black text-white">{value}</strong>
                <span className="mt-1 block text-sm font-bold text-white/75">{label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {foregroundImage ? (
        <figure className={`relative z-0 mt-9 w-full max-w-md justify-self-center rounded-[1.35rem] border-[3px] border-dashed border-safety-gold/80 bg-command/70 p-1.5 shadow-lift backdrop-blur sm:max-w-lg sm:rounded-[1.5rem] sm:border-4 sm:p-2 lg:absolute lg:left-[max(1rem,calc((100vw-1180px)/2))] lg:top-1/2 lg:mt-0 lg:w-[min(25vw,360px)] lg:max-w-none lg:-translate-y-1/2 ${foregroundImage.className || ""}`}>
          <ResponsiveImage
            alt={foregroundImage.alt}
            src={foregroundImage.src}
            webp={foregroundImage.webp}
            smallWebp={foregroundImage.smallWebp}
            className="block"
            imageClassName={`aspect-square w-full rounded-[1rem] object-contain sm:rounded-[1.1rem] ${foregroundImage.imageClassName || ""}`}
            sizes="(max-width: 640px) 98vw, (max-width: 1024px) 72vw, 31vw"
          />
        </figure>
      ) : null}
    </section>
  );
}

export function CardGrid({ items, columns = "three", numbered = false, tone = "light" }) {
  const columnsClass = {
    two: "md:grid-cols-2",
    three: "md:grid-cols-2 lg:grid-cols-3",
    four: "md:grid-cols-2",
  };
  const dark = tone === "dark";
  const lightPalette = ["card-yellow", "card-cyan", "card-red", "card-green"];
  const iconPalette = ["bg-safety-gold/25 text-safety-red", "bg-cyan-100 text-safety-blue", "bg-red-100 text-safety-red", "bg-green-100 text-safety-teal"];

  return (
    <div className={`grid gap-4 ${columnsClass[columns] || columnsClass.three}`}>
      {items.map(({ icon: Icon, title, text }, index) => (
        <Reveal
          as="article"
          className={`sketch-card rounded-[1.35rem] border-2 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${
            dark
              ? "border-white/20 bg-white/10 text-white backdrop-blur hover:border-white/35 hover:bg-white/20"
              : `border-command/10 ${lightPalette[index % lightPalette.length]} text-ink hover:border-safety-blue/40`
          }`}
          delay={index * 45}
          key={title}
        >
          {/* {numbered ? (
            <span className={`mb-4 inline-grid min-h-8 min-w-11 place-items-center rounded-full px-3 text-xs font-black ${dark ? "bg-white text-command" : "bg-command text-white"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          ) : null} */}
          {Icon ? <span className={`mb-4 inline-grid h-14 w-14 place-items-center rounded-[1.1rem] border-2 shadow-soft ${dark ? "border-white/15 bg-white/10" : `border-command/10 ${iconPalette[index % iconPalette.length]}`}`}><Icon className={`h-7 w-7 ${dark ? "text-[#fff176]" : ""}`} aria-hidden="true" /></span> : null}
          <h3 className={`text-xl font-black leading-tight ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
          <p className={`mt-3 leading-7 ${dark ? "text-white/72" : "text-muted"}`}>{text}</p>
        </Reveal>
      ))}
    </div>
  );
}

export function Checklist({ items, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li className={`flex items-start gap-3 rounded-[1rem] border-2 p-4 font-extrabold shadow-soft ${dark ? "border-white/10 bg-white/10 text-white" : "border-command/10 bg-white/85 text-ink"}`} key={item}>
          <CheckCircle2 className={`mt-1 h-5 w-5 shrink-0 ${dark ? "text-[#71f0df]" : "text-green-700"}`} aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CTASection({ eyebrow, title, text, children }) {
  return (
    <Reveal as="section" className="kid-dots relative mx-auto grid max-w-none gap-7 overflow-hidden border-y-4 border-dashed border-safety-gold/50 px-5 py-16 text-command sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))]">
      <div className="absolute -right-12 top-8 hidden h-36 w-36 rotate-12 rounded-[2rem] border-4 border-dashed border-safety-blue/25 bg-white/35 lg:block" aria-hidden="true" />
      <div className="absolute -left-12 bottom-8 hidden h-28 w-28 -rotate-12 rounded-full border-4 border-dashed border-safety-red/25 bg-yellow-100/55 lg:block" aria-hidden="true" />
      <div>
        <p className="mb-3 inline-flex rounded-full border-2 border-safety-gold/70 bg-white px-3 py-1 text-xs font-black uppercase tracking-normal text-safety-red">{eyebrow}</p>
        <h2 className="max-w-4xl text-balance text-3xl font-black leading-tight text-command sm:text-4xl lg:text-5xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-body">{text}</p>
      </div>
      <div className="flex flex-wrap gap-3">{children}</div>
    </Reveal>
  );
}
