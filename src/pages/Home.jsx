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
    text: "A backpack that looks exciting while making readiness feel normal, approachable, and confidence-building.",
  },
  {
    icon: HeartHandshake,
    title: "For families",
    text: "A clear safety story parents can understand quickly: visibility, tracking support, emergency supplies, and preparation.",
  },
  {
    icon: Shield,
    title: "For schools",
    text: "A school-safe program model built around guardian involvement, approved communication, and positive student leadership.",
  },
];

const operatingCycle = [
  { icon: Radar, title: "Detect", text: "Visibility, awareness, and tracking concepts support early signals." },
  { icon: CheckCircle2, title: "Prepare", text: "First aid, charging, lighting, and care supplies support daily readiness." },
  { icon: Shield, title: "Protect", text: "Protective materials and compartments strengthen the safety proposition." },
  { icon: Sparkles, title: "Empower", text: "Ambassador and club programs turn safety into confidence and leadership." },
];

export default function Home({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Student safety. Family confidence. Everyday readiness."
        title="Hope's Safety Backpack"
        text="A student-created safety backpack concept built around visibility, emergency preparation, GPS support, protective materials, and confidence-building programs for school communities."
        image={{
          src: "/assets/home-story-hero.webp",
          webp: "/assets/home-story-hero.webp",
        }}
        imageAlt="Modern school hallway product scene for Hope's Safety Backpack"
        align="left"
        overlay="left"
        kicker="Student-led safety concept"
        stats={[
          ["11.1 lbs", "fully equipped estimate"],
          ["2026", "patent milestone"],
          ["12%", "ambassador learning model"],
        ]}
        chips={["LED visible", "GPS aware", "Emergency ready"]}
      >
        <ButtonLink href="/features" onNavigate={onNavigate}>
          Explore Features
        </ButtonLink>
        <ButtonLink href="/forms" variant="secondary" onNavigate={onNavigate}>
          View Forms
        </ButtonLink>
      </Hero>

      <section className="grid bg-[#06101d] text-white sm:grid-cols-5" aria-label="Product highlights">
        {["LED visible", "GPS aware", "Emergency ready", "Student led", "Family focused"].map((item, index) => (
          <span
            className={`grid min-h-14 place-items-center border-b border-white/10 px-4 py-3 text-center text-sm font-black text-white/80 sm:min-h-[72px] sm:border-b-0 ${
              index < 4 ? "sm:border-r" : ""
            }`}
            key={item}
          >
            {item}
          </span>
        ))}
      </section>

      <Reveal as="section" className="bg-command px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="The mission"
              title="A backpack idea shaped around the moments families worry about."
              text="Hope's concept connects practical school-day readiness with an uplifting message: safety should feel understandable, visible, and empowering for kids."
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

      <Reveal as="section" className="bg-[#f6f9fc] px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader
          eyebrow="Core benefits"
          title="The same idea speaks to students, families, and schools in different ways."
          text="Each audience gets a clear reason to care: confidence for kids, peace of mind for families, and a positive safety culture for school communities."
          align="center"
        />
        <div className="mx-auto max-w-[1224px]">
          <CardGrid items={benefitCards} columns="three" />
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-[#07111f] via-command to-[#083b43] px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Safety operating cycle"
            title="Detect, prepare, protect, and empower."
            text="The product story is organized around four simple actions families can remember after one visit."
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
              title="Eight safety signals, grouped for fast scanning."
              text="The homepage gives a quick overview before visitors choose the full feature page."
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

      <Reveal as="section" className="bg-[#f6f9fc] px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="max-h-[760px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lift">
            <ResponsiveImage
              src="/assets/description-and-weight.webp"
              webp="/assets/description-and-weight.webp"
              smallWebp="/assets/description-and-weight-720.webp"
              alt="Hope's Safety Backpack description and weight infographic"
              imageClassName="max-h-[760px] w-full object-contain"
              sizes="(max-width: 720px) 92vw, 42vw"
            />
          </figure>
          <div>
            <SectionHeader
              eyebrow="Product details"
              title="A closer look at the backpack concept."
              text="Families can scan the major components, see how the backpack is organized, and understand how each feature supports everyday preparedness."
            />
            <div className="mt-6 grid gap-4">
              <article className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-ink">Easy to understand</h3>
                <p className="mt-2 leading-7 text-muted">The product story starts with the everyday safety benefits families care about most.</p>
              </article>
              <article className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-ink">Ready for real conversations</h3>
                <p className="mt-2 leading-7 text-muted">The details help parents, schools, and ambassadors explain the safety mission with confidence.</p>
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
