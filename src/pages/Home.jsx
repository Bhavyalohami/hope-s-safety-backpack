import {
  Backpack,
  BatteryCharging,
  BellRing,
  Camera,
  CheckCircle2,
  Flashlight,
  HeartHandshake,
  MapPin,
  Radar,
  Shield,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";
import { faqs, safetyFeatures } from "../data.js";
import { ButtonLink, CardGrid, ResponsiveImage, Reveal, SectionHeader } from "../components/ui.jsx";
import { withRoutePath } from "../paths.js";

const featureIcons = [Camera, Zap, BatteryCharging, BellRing, Waves, MapPin, Flashlight, Shield];

const featureCards = safetyFeatures.map(([title, text], index) => ({
  title,
  text,
  icon: featureIcons[index],
}));

const benefitCards = [
  {
    icon: Backpack,
    title: "For students",
    text: "A backpack idea that feels bright, brave, and easy for kids to understand.",
  },
  {
    icon: HeartHandshake,
    title: "For families",
    text: "A simple safety story parents can understand quickly: be seen, be ready, and know what to do next.",
  },
  {
    icon: Shield,
    title: "For schools",
    text: "A positive school idea built around helping, kindness, guardian support, and student leadership.",
  },
];

const operatingCycle = [
  { icon: Radar, title: "Notice", text: "Lights and awareness cues help kids stand out when it matters." },
  { icon: CheckCircle2, title: "Pack", text: "Helpful supplies stay together, like a tiny safety station." },
  { icon: Shield, title: "Protect", text: "Smart compartments make the backpack feel more prepared." },
  { icon: Sparkles, title: "Lead", text: "Clubs and ambassadors turn safety into courage and kindness." },
];

const ideaNotes = [
  ["Bright lights", "Help me be seen"],
  ["Ready pocket", "Keep care items close"],
  ["Find-me help", "Give families peace of mind"],
  ["Kindness club", "Make safety feel brave"],
];

export default function Home({ onNavigate }) {
  return (
    <main className="relative text-white">
      <section className="relative grid min-h-[calc(100svh-82px)] items-center overflow-hidden px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="absolute left-5 top-24 hidden h-24 w-24 -rotate-12 rounded-[1.8rem] border-4 border-dashed border-safety-gold/80 bg-white/10 lg:block" aria-hidden="true" />
        <div className="absolute bottom-16 right-[12%] hidden h-20 w-20 rotate-6 rounded-[1.3rem] border-4 border-dashed border-safety-teal/75 bg-white/10 lg:block" aria-hidden="true" />
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.72fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex -rotate-1 rounded-xl border-2 border-command/25 bg-safety-gold px-4 py-2 text-xs font-black uppercase tracking-normal text-command shadow-[0_7px_0_rgb(12_20_37/0.18)]">Hope's big backpack idea</p>
            <p className="mb-3 inline-flex rounded-full border-2 border-white/25 bg-white/15 px-3 py-1 text-xs font-black uppercase tracking-normal text-[#fff176] backdrop-blur">A bright school-day safety idea</p>
            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.96] text-white drop-shadow-[0_5px_0_rgb(12_20_37/0.25)] sm:text-6xl lg:text-7xl">Hope's Safety Backpack</h1>
            <p className="mt-6 max-w-3xl text-lg font-bold leading-8 text-white/84 sm:text-xl">
              A student-created backpack idea with bright lights, a ready pocket, family support, and kindness programs kids can explain in their own words.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Bright lights", "Ready kit", "Kindness club"].map((chip, index) => (
                <span className={`rounded-xl border-2 border-white/35 px-3 py-1 text-xs font-black uppercase tracking-normal shadow-soft backdrop-blur ${index === 0 ? "bg-safety-blue/75" : index === 1 ? "bg-safety-teal/75" : "bg-safety-red/75"}`} key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/features" onNavigate={onNavigate}>
                Explore Features
              </ButtonLink>
              <ButtonLink href="/forms" variant="secondary" onNavigate={onNavigate}>
                View Forms
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-3 rounded-[1.75rem] border-2 border-white/20 bg-command/58 p-4 shadow-lift backdrop-blur-md sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Kid idea", "created from Hope's point of view"],
              ["2026", "patent milestone"],
              ["Kindness", "student leadership theme"],
            ].map(([value, label], index) => (
              <article className={`rounded-[1.1rem] border-2 border-white/20 p-4 shadow-soft ${index === 0 ? "bg-white/12" : index === 1 ? "bg-safety-gold/20" : "bg-safety-teal/20"}`} key={label}>
                <strong className="block text-2xl font-black text-white">{value}</strong>
                <span className="mt-1 block text-sm font-bold text-white/78">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid border-y-2 border-white/15 bg-command/72 text-white backdrop-blur sm:grid-cols-5" aria-label="Product highlights">
        {["Be seen", "Be ready", "Ask for help", "Student idea", "Family care"].map((item, index) => (
          <span
            className={`grid min-h-14 place-items-center border-b border-white/15 px-4 py-3 text-center text-sm font-black text-white sm:min-h-[72px] sm:border-b-0 ${
              index < 4 ? "sm:border-r" : ""
            }`}
            key={item}
          >
            {item}
          </span>
        ))}
      </section>

      <Reveal as="section" className="px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border-2 border-white/18 bg-command/70 p-6 shadow-lift backdrop-blur-md sm:p-8">
            <SectionHeader
              eyebrow="The mission"
              title="A kid's question turned into a bright safety idea."
              text="Hope's concept connects school-day readiness with an uplifting message: safety can feel brave, colorful, and easy for kids to talk about."
              tone="dark"
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-3" aria-label="Key product context">
              <div className="rounded-[1.25rem] border border-white/15 bg-white/12 p-5 shadow-soft">
                <strong className="block text-3xl font-black leading-none text-white">Visible</strong>
                <span className="mt-2 block font-bold text-white/75">lights, cues, and awareness</span>
              </div>
              <div className="rounded-[1.25rem] border border-white/15 bg-safety-gold/18 p-5 shadow-soft">
                <strong className="block text-3xl font-black leading-none text-white">Prepared</strong>
                <span className="mt-2 block font-bold text-white/75">care supplies in reach</span>
              </div>
              <div className="rounded-[1.25rem] border border-white/15 bg-safety-teal/24 p-5 shadow-soft">
                <strong className="block text-3xl font-black leading-none text-white">Hopeful</strong>
                <span className="mt-2 block font-bold text-white/75">leadership, not fear</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["Backpack first", "The product stays visible in the page background while every section explains one part of the story."],
              ["Scroll story", "Families keep the backpack in view as they move from idea to features to forms."],
              ["Kid-friendly", "Bright labels, dashed borders, and simple words keep the page playful without hiding the safety message."],
            ].map(([title, text], index) => (
              <article className={`rounded-[1.45rem] border-2 border-white/18 p-5 shadow-lift backdrop-blur-md ${index === 0 ? "bg-white/16" : index === 1 ? "bg-safety-blue/30" : "bg-safety-red/28"}`} key={title}>
                <h3 className="text-2xl font-black text-white">{title}</h3>
                <p className="mt-2 font-bold leading-7 text-white/78">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="border-y-2 border-white/10 bg-white/10 px-5 py-16 backdrop-blur-sm sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader
          eyebrow="Core benefits"
          title="Safety feels better when kids can picture it."
          text="The story is simple on purpose: lights, supplies, support, and kindness all work together in a way students can remember."
          align="center"
          tone="dark"
        />
        <div className="mx-auto max-w-[1224px]">
          <CardGrid items={benefitCards} columns="three" tone="dark" />
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="rounded-[2rem] border-2 border-white/18 bg-command/72 p-6 shadow-lift backdrop-blur-md sm:p-8">
            <SectionHeader
              eyebrow="Hope's safety steps"
              title="Notice, pack, protect, and lead."
              text="The product story is organized around four simple actions a young student could explain in their own words."
              tone="dark"
            />
          </div>
          <div className="rounded-[2rem] border-2 border-white/18 bg-command/54 p-4 shadow-lift backdrop-blur-md">
            <CardGrid items={operatingCycle} columns="four" numbered tone="dark" />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="reveal-sticky-safe mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="rounded-[2rem] border-2 border-white/25 bg-white/92 p-6 shadow-lift backdrop-blur-md lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Feature preview"
              title="Eight safety signals, like stickers on an idea board."
              text="The homepage gives families a quick, colorful way to understand what Hope imagined."
            />
            <ButtonLink href="/features" variant="dark" onNavigate={onNavigate}>
              See All Features
            </ButtonLink>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {featureCards.map(({ icon: Icon, title, text }, index) => (
              <article className="rounded-[1.25rem] border-2 border-white/50 bg-white/92 p-5 text-ink shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-lift" key={title}>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <Icon className="h-7 w-7 text-safety-blue" aria-hidden="true" />
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-muted">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-black text-ink">{title}</h3>
                <p className="mt-2 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="reveal-sticky-safe border-y-2 border-white/10 bg-command/62 px-5 py-16 backdrop-blur-md sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border-2 border-white/25 bg-white/94 p-6 text-command shadow-lift backdrop-blur lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Big picture"
              title="One cheerful chart for the whole backpack idea."
              text="Families can scan the backpack, see the safety pieces, and understand how Hope's idea fits together before they explore the full feature page."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Quick to scan", "The image keeps the main feature ideas together in one visual."],
                ["Easy to share", "Parents, schools, and helpers can point to the same backpack map."],
              ].map(([title, text], index) => (
                <article
                  className={`rounded-[1.25rem] border-2 border-command/10 p-5 shadow-soft ${
                    index === 0 ? "bg-yellow-100" : "bg-cyan-100"
                  }`}
                  key={title}
                >
                  <h3 className="text-xl font-black text-command">{title}</h3>
                  <p className="mt-2 leading-7 text-body">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <figure className="rounded-[2rem] border-4 border-dashed border-safety-gold/70 bg-white/95 p-3 shadow-lift backdrop-blur">
            <ResponsiveImage
              src="/assets/description-and-weight.webp"
              webp="/assets/description-and-weight.webp"
              smallWebp="/assets/description-and-weight-720.webp"
              alt="Hope's Safety Backpack description and weight chart with feature callouts around the backpack"
              imageClassName="aspect-[2/3] max-h-[980px] w-full rounded-[1.45rem] object-contain"
              sizes="(max-width: 720px) 92vw, 68vw"
            />
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border-4 border-dashed border-safety-gold/70 bg-white/92 p-5 shadow-lift backdrop-blur sm:p-7" aria-label="Hope's idea board">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-50 via-white to-yellow-50 p-5">
              <p className="mb-4 w-fit -rotate-2 rounded-lg bg-safety-gold px-4 py-2 text-sm font-black uppercase text-command shadow-soft">Hope's idea board</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {ideaNotes.map(([title, text], index) => (
                  <article
                    className={`min-h-36 rounded-[1.25rem] border-2 border-command/10 p-5 shadow-soft ${
                      index === 0
                        ? "bg-yellow-100"
                        : index === 1
                          ? "bg-cyan-100"
                          : index === 2
                            ? "bg-red-100"
                            : "bg-green-100"
                    } ${index % 2 ? "rotate-1" : "-rotate-1"}`}
                    key={title}
                  >
                    <span className="mb-3 inline-grid h-9 w-9 place-items-center rounded-full bg-white text-sm font-black text-command">{index + 1}</span>
                    <h3 className="text-2xl font-black leading-tight text-command">{title}</h3>
                    <p className="mt-2 text-lg font-extrabold leading-7 text-body">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border-2 border-white/18 bg-white/90 p-6 text-command shadow-lift backdrop-blur-md sm:p-8">
            <SectionHeader
              eyebrow="Backpack notes"
              title="A closer look in kid-clear words."
              text="Families can scan the big ideas, see how the backpack is organized, and understand how each feature supports everyday preparedness."
            />
            <div className="mt-6 grid gap-4">
              <article className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-ink">Easy to understand</h3>
                <p className="mt-2 leading-7 text-muted">The product story starts with the everyday safety benefits families care about most.</p>
              </article>
              <article className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-ink">Easy to share</h3>
                <p className="mt-2 leading-7 text-muted">The details help parents, schools, and student helpers explain the safety mission with confidence.</p>
              </article>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="mx-auto max-w-[1224px] rounded-[2rem] border-2 border-white/18 bg-command/68 p-5 shadow-lift backdrop-blur-md sm:p-8">
          <SectionHeader eyebrow="FAQ" title="Helpful answers for families and partners." align="center" tone="dark" />
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item, index) => (
              <details className={`rounded-[1.25rem] border-2 border-white/45 text-ink shadow-soft backdrop-blur !h-fit ${index % 3 === 0 ? "bg-yellow-50/95" : index % 3 === 1 ? "bg-cyan-50/95" : "bg-red-50/95"}`} key={item.question}>
                <summary className="cursor-pointer p-5 font-black text-ink">{item.question}</summary>
                <p className="p-5 pt-4 leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="px-5 pb-20 pt-10 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:pb-28">
        <div className="relative overflow-hidden rounded-[2.25rem] border-4 border-dashed border-safety-gold/70 bg-[#fffaf0] p-6 text-command shadow-lift sm:p-10">
          <div className="absolute -right-16 -top-16 h-40 w-40 rotate-12 rounded-[2rem] border-4 border-dashed border-safety-blue/30 bg-cyan-100" aria-hidden="true" />
          <div className="absolute -bottom-20 left-10 h-36 w-36 -rotate-12 rounded-full border-4 border-dashed border-safety-red/25 bg-yellow-100" aria-hidden="true" />
          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex -rotate-1 rounded-xl border-2 border-command/15 bg-safety-gold px-4 py-2 text-xs font-black uppercase tracking-normal text-command shadow-[0_7px_0_rgb(12_20_37/0.12)]">Final step</p>
              <h2 className="max-w-4xl text-balance text-3xl font-black leading-tight text-command sm:text-4xl lg:text-5xl">Keep the backpack in the picture, then choose the next family path.</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-body">Families can leave with two simple next moves: learn the safety features or send interest details when they are ready.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                className="group rounded-[1.35rem] border-2 border-command/10 bg-yellow-100 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                href={withRoutePath("/features")}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/features");
                }}
              >
                <span className="mb-5 inline-grid h-11 w-11 place-items-center rounded-full bg-command text-white shadow-soft">1</span>
                <span className="block text-2xl font-black text-command">Explore Features</span>
                <span className="mt-2 block leading-7 text-body">See lights, pockets, GPS thinking, supplies, and safety details.</span>
              </a>
              <a
                className="group rounded-[1.35rem] border-2 border-command/10 bg-cyan-100 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
                href={withRoutePath("/forms")}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate("/forms");
                }}
              >
                <span className="mb-5 inline-grid h-11 w-11 place-items-center rounded-full bg-command text-white shadow-soft">2</span>
                <span className="block text-2xl font-black text-command">Open Forms</span>
                <span className="mt-2 block leading-7 text-body">Share preorder interest or helper application details.</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
