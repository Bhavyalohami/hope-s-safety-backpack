import {
  BatteryCharging,
  BellRing,
  Camera,
  Cross,
  Flashlight,
  Layers3,
  MapPin,
  Radar,
  Shield,
  Waves,
  Zap,
} from "lucide-react";
import { safetyFeatures } from "../data.js";
import { ButtonLink, CardGrid, CTASection, Hero, ResponsiveImage, Reveal, SectionHeader } from "../components/ui.jsx";

const icons = [Camera, Zap, BatteryCharging, Cross, Waves, MapPin, Flashlight, Shield];
const featureCards = safetyFeatures.map(([title, text], index) => ({ title, text, icon: icons[index] }));

const layers = [
  {
    icon: Radar,
    title: "Awareness layer",
    text: "Camera, GPS, panic, and visibility concepts support a clearer sense of where help may be needed.",
  },
  {
    icon: Layers3,
    title: "Readiness layer",
    text: "Charging, flashlight, first aid, masks, and sanitizer keep everyday emergency tools organized.",
  },
  {
    icon: Shield,
    title: "Protection layer",
    text: "Protective materials and thoughtful compartments create a stronger safety narrative.",
  },
  {
    icon: BellRing,
    title: "Response layer",
    text: "Lighting, panic cues, and clear placement help the product story focus on fast action.",
  },
];

export default function Features({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Backpack safety feature system"
        title="Product Features"
        text="Hope's Safety Backpack combines visibility, awareness, emergency readiness, and student confidence into one concept families can understand at a glance."
        image={{
          src: "/assets/features-tech-hero.webp",
          webp: "/assets/features-tech-hero.webp",
        }}
        imageAlt="Exploded view of safety backpack technology modules"
        align="center"
        overlay="center"
        kicker="Feature map"
        chips={["Awareness", "Readiness", "Protection", "Response"]}
      />

      <Reveal as="section" className="bg-command px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="School-day moments"
            title="The features are built around when students need support most."
            text="Arrival, dismissal, travel, and uncertain moments each ask for a different kind of safety cue. This page groups the backpack around those needs."
            tone="dark"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Morning arrival", "Bright LED visibility and quick-access supplies help the day start with more confidence."],
              ["Between classes", "Organized compartments make readiness feel normal instead of scattered."],
              ["After-school travel", "GPS support, lighting, and awareness cues are centered on the trip home."],
              ["Unexpected moments", "Panic cues, first aid, flashlight support, and protective thinking stay within reach."],
            ].map(([title, text], index) => (
              <article className="rounded-[1.35rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur" key={title}>
                <span className="mb-5 inline-grid h-10 w-10 place-items-center rounded-full bg-white text-command text-sm font-black">{index + 1}</span>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-3 leading-7 text-white/72">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader
          eyebrow="Feature matrix"
          title="Eight safety signals, easy to compare."
          text="The feature set is organized into clear jobs: help students be seen, stay prepared, receive family support, and understand the safety purpose quickly."
          align="center"
        />
        <CardGrid items={featureCards} columns="four" />
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-slate-950 via-command to-teal-950 px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Component layers"
              title="A layered system families can follow quickly."
              text="Every feature has a plain-language purpose and a place in the broader safety system, helping parents and schools understand the backpack without guesswork."
              tone="dark"
            />
            <CardGrid items={layers} columns="two" tone="dark" />
          </div>
          <figure className="max-h-[760px] overflow-hidden rounded-[2rem] border border-white/15 bg-white p-2 shadow-lift">
            <ResponsiveImage
              src="/assets/description-and-weight.webp"
              webp="/assets/description-and-weight.webp"
              smallWebp="/assets/description-and-weight-720.webp"
              alt="Detailed description and weight breakdown for Hope's Safety Backpack"
              imageClassName="max-h-[760px] w-full rounded-[1.45rem] object-contain"
              sizes="(max-width: 720px) 92vw, 40vw"
            />
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader eyebrow="Why it matters" title="Normal backpack vs. safety backpack thinking." align="center" />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-soft">
            <span className="mb-4 inline-grid rounded-full bg-safety-red px-3 py-1 text-xs font-black uppercase text-white">Typical backpack</span>
            <h3 className="text-xl font-black text-ink">School supplies first</h3>
            <p className="mt-3 leading-7 text-muted">Most backpacks focus on books, laptops, and basic organization. Safety items are usually separate things families must remember to pack.</p>
          </article>
          <article className="rounded-[1.5rem] border border-safety-teal/30 bg-gradient-to-br from-white to-teal-50 p-7 shadow-soft">
            <span className="mb-4 inline-grid rounded-full bg-safety-teal px-3 py-1 text-xs font-black uppercase text-white">Hope's concept</span>
            <h3 className="text-xl font-black text-ink">Readiness first</h3>
            <p className="mt-3 leading-7 text-muted">The concept places safety signals, supplies, visibility, and support systems directly into the backpack story.</p>
          </article>
        </div>
      </Reveal>

      <CTASection
        eyebrow="Next step"
        title="Give families a clear path after they understand the features."
        text="Visitors who understand the product can move directly into applications, preorder interest, or document review."
      >
        <ButtonLink href="/forms" onNavigate={onNavigate}>
          Review Forms
        </ButtonLink>
      </CTASection>
    </main>
  );
}
