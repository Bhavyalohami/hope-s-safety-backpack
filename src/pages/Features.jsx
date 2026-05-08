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
import { ButtonLink, CardGrid, CTASection, Hero, Reveal, SectionHeader } from "../components/ui.jsx";

const icons = [Camera, Zap, BatteryCharging, Cross, Waves, MapPin, Flashlight, Shield];
const featureCards = safetyFeatures.map(([title, text], index) => ({ title, text, icon: icons[index] }));

const layers = [
  {
    icon: Radar,
    title: "Look-out layer",
    text: "Camera, GPS, panic, and visibility ideas help the backpack tell a clearer safety story.",
  },
  {
    icon: Layers3,
    title: "Ready layer",
    text: "Charging, flashlight, first aid, masks, and sanitizer keep helpful tools together.",
  },
  {
    icon: Shield,
    title: "Brave layer",
    text: "Protective materials and thoughtful compartments make the idea feel prepared.",
  },
  {
    icon: BellRing,
    title: "Help layer",
    text: "Lighting, panic cues, and clear placement help kids and families understand what happens next.",
  },
];

const sketchCards = [
  ["1", "Bright lights", "So cars and grown-ups can see me better."],
  ["2", "Care kit", "So helpful supplies are not forgotten."],
  ["3", "Find-me support", "So families have another way to feel calm."],
  ["4", "Safety club", "So being careful can also mean being kind."],
];

export default function Features({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Hope's feature idea map"
        title="Backpack Feature Map"
        text="Hope's Safety Backpack combines bright visibility, helpful supplies, family support, and student confidence into one colorful map families can understand at a glance."
        image={{
          src: "/assets/features-tech-hero.webp",
          webp: "/assets/features-tech-hero.webp",
        }}
        imageAlt="Colorful feature map for Hope's Safety Backpack"
        align="center"
        overlay="center"
        kicker="Kid inventor notes"
        chips={["Bright", "Ready", "Brave", "Kind"]}
      />

      <Reveal as="section" className="bg-gradient-to-br from-safety-blue via-safety-teal to-safety-orange px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeader
            eyebrow="School-day moments"
            title="The features are built around moments kids can picture."
            text="Arrival, dismissal, travel, and uncertain moments each ask for a different kind of safety cue. This page explains the backpack in kid-clear language."
            tone="dark"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Morning arrival", "Bright lights help students stand out when the day begins."],
              ["Between classes", "Organized pockets make safety supplies feel easy to find."],
              ["After-school travel", "GPS support, lighting, and awareness cues focus on getting home."],
              ["Unexpected moments", "Panic cues, first aid, and flashlight support stay easy to explain."],
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
            eyebrow="Sticker map"
            title="Eight safety signals, easy for families to compare."
          text="Each idea has one easy job: help students be seen, stay prepared, feel supported, or understand what to do next."
          align="center"
        />
        <CardGrid items={featureCards} columns="four" />
      </Reveal>

      <Reveal as="section" className="bg-[#fff7ed] px-5 py-16 text-command sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Backpack layers"
              title="A layered idea families can follow quickly."
              text="Every feature has a plain-language purpose, helping parents and schools understand the backpack without guesswork."
            />
            <CardGrid items={layers} columns="two" />
          </div>
          <div className="rounded-[2rem] border-4 border-dashed border-safety-blue/50 bg-white p-5 shadow-lift" aria-label="Feature sketch cards">
            <p className="mb-5 w-fit rotate-1 rounded-lg bg-safety-gold px-4 py-2 text-sm font-black uppercase text-command shadow-soft">Hope's sketch notes</p>
            <div className="grid gap-3">
              {sketchCards.map(([number, title, text], index) => (
                <article
                  className={`flex gap-4 rounded-[1.25rem] border-2 border-command/10 p-5 shadow-soft ${
                    index === 0
                      ? "bg-cyan-100"
                      : index === 1
                        ? "bg-yellow-100"
                        : index === 2
                          ? "bg-red-100"
                          : "bg-green-100"
                  }`}
                  key={title}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-xl font-black text-command">{number}</span>
                  <div>
                    <h3 className="text-xl font-black text-command">{title}</h3>
                    <p className="mt-1 text-lg font-extrabold leading-7 text-body">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader eyebrow="Why it matters" title="Normal backpack vs. Hope's safety backpack thinking." align="center" />
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-soft">
            <span className="mb-4 inline-grid rounded-full bg-safety-red px-3 py-1 text-xs font-black uppercase text-white">Typical backpack</span>
            <h3 className="text-xl font-black text-ink">School supplies first</h3>
            <p className="mt-3 leading-7 text-muted">Most backpacks focus on books, laptops, and basic organization. Safety items are usually separate things families must remember to pack.</p>
          </article>
          <article className="rounded-[1.5rem] border border-safety-teal/30 bg-gradient-to-br from-white to-teal-50 p-7 shadow-soft">
            <span className="mb-4 inline-grid rounded-full bg-safety-teal px-3 py-1 text-xs font-black uppercase text-white">Hope's concept</span>
            <h3 className="text-xl font-black text-ink">Safety kids can explain</h3>
            <p className="mt-3 leading-7 text-muted">The concept places bright signals, helpful supplies, visibility, and support systems directly into the backpack story.</p>
          </article>
        </div>
      </Reveal>

      <CTASection
        eyebrow="Next step"
        title="Give families a clear path after they understand the features."
        text="Families who understand the idea can move directly into applications, preorder interest, or document review."
      >
        <ButtonLink href="/forms" onNavigate={onNavigate}>
          Review Forms
        </ButtonLink>
      </CTASection>
    </main>
  );
}
