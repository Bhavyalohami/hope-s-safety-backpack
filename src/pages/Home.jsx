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
import { ButtonLink, CardGrid, CTASection, Hero, ResponsiveImage, Reveal, SectionHeader } from "../components/ui.jsx";

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
    <main>
      <Hero
        eyebrow="A bright school-day safety idea"
        title="Hope's Safety Backpack"
        text="A student-created backpack idea with bright lights, a ready pocket, family support, and kindness programs kids can explain in their own words."
        image={{
          src: "/assets/home-story-hero.webp",
          webp: "/assets/home-story-hero.webp",
        }}
        imageAlt="Bright school hallway scene for Hope's Safety Backpack"
        align="left"
        overlay="left"
        kicker="Hope's big backpack idea"
        stats={[
          ["Kid idea", "created from Hope's point of view"],
          ["2026", "patent milestone"],
          ["Kindness", "student leadership theme"],
        ]}
        chips={["Bright lights", "Ready kit", "Kindness club"]}
      >
        <ButtonLink href="/features" onNavigate={onNavigate}>
          Explore Features
        </ButtonLink>
        <ButtonLink href="/forms" variant="secondary" onNavigate={onNavigate}>
          View Forms
        </ButtonLink>
      </Hero>

      <section className="grid bg-gradient-to-r from-safety-blue via-safety-teal to-safety-orange text-white sm:grid-cols-5" aria-label="Product highlights">
        {["Be seen", "Be ready", "Ask for help", "Student idea", "Family care"].map((item, index) => (
          <span
            className={`grid min-h-14 place-items-center border-b border-white/20 px-4 py-3 text-center text-sm font-black text-white sm:min-h-[72px] sm:border-b-0 ${
              index < 4 ? "sm:border-r" : ""
            }`}
            key={item}
          >
            {item}
          </span>
        ))}
      </section>

      <Reveal as="section" className="bg-gradient-to-br from-safety-blue via-safety-teal to-safety-orange px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="The mission"
              title="A kid's question turned into a bright safety idea."
              text="Hope's concept connects school-day readiness with an uplifting message: safety can feel brave, colorful, and easy for kids to talk about."
              tone="dark"
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-3" aria-label="Key product context">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-5 shadow-soft">
                <strong className="block text-3xl font-black leading-none text-white">Visible</strong>
                <span className="mt-2 block font-bold text-white/65">lights, cues, and awareness</span>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-5 shadow-soft">
                <strong className="block text-3xl font-black leading-none text-white">Prepared</strong>
                <span className="mt-2 block font-bold text-white/65">care supplies in reach</span>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/10 p-5 shadow-soft">
                <strong className="block text-3xl font-black leading-none text-white">Hopeful</strong>
                <span className="mt-2 block font-bold text-white/65">leadership, not fear</span>
              </div>
            </div>
          </div>
          <figure className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 p-3 shadow-lift">
            <ResponsiveImage
              src="/assets/hero-backpack.webp"
              webp="/assets/hero-backpack.webp"
              smallWebp="/assets/hero-backpack-720.webp"
              alt="Hope's Safety Backpack product rendering"
              imageClassName="h-full max-h-[640px] w-full rounded-[1.45rem] object-cover"
            />
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" className="kid-dots px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader
          eyebrow="Core benefits"
          title="Safety feels better when kids can picture it."
          text="The story is simple on purpose: lights, supplies, support, and kindness all work together in a way students can remember."
          align="center"
        />
        <div className="mx-auto max-w-[1224px]">
          <CardGrid items={benefitCards} columns="three" />
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-safety-red via-safety-orange to-safety-gold px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Hope's safety steps"
            title="Notice, pack, protect, and lead."
            text="The product story is organized around four simple actions a young student could explain in their own words."
            tone="dark"
          />
          <CardGrid items={operatingCycle} columns="four" numbered tone="dark" />
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
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
              <article className="rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift" key={title}>
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

      <Reveal as="section" className="bg-[#fff7ed] px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border-4 border-dashed border-safety-gold/70 bg-white p-5 shadow-lift sm:p-7" aria-label="Hope's idea board">
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
          <div>
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

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader eyebrow="FAQ" title="Helpful answers for families and partners." align="center" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <details className="rounded-[1.25rem] border border-slate-200 bg-white shadow-soft" key={item.question}>
              <summary className="cursor-pointer p-5 font-black text-ink">{item.question}</summary>
              <p className="p-5 pt-4 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>

      <CTASection
        eyebrow="Take the next step"
        title="Move from curiosity to a clear family next step."
        text="Families can review the application path, preorder interest, and supporting documents in one simple place."
      >
        <ButtonLink href="/forms" onNavigate={onNavigate}>
          Open Forms
        </ButtonLink>
      </CTASection>
    </main>
  );
}
