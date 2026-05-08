import { Award, Gift, HeartHandshake, Medal, Shield, Sparkles, Star, Users } from "lucide-react";
import { ButtonLink, CardGrid, CTASection, Hero, Reveal, SectionHeader } from "../components/ui.jsx";

const clubCards = [
  {
    icon: HeartHandshake,
    title: "Kind choices",
    text: "Students are recognized for helping others, showing respect, and supporting classmates.",
  },
  {
    icon: Shield,
    title: "Safe actions",
    text: "Reporting unsafe situations and following safety expectations become visible wins.",
  },
  {
    icon: Star,
    title: "Point levels",
    text: "Positive behavior can unlock school-approved incentives and milestone rewards.",
  },
  {
    icon: Users,
    title: "Peer leadership",
    text: "Club members model the behavior and confidence they want to see around campus.",
  },
];

const rewards = [
  { icon: Gift, label: "Restaurant cards" },
  { icon: Award, label: "Store cards" },
  { icon: Medal, label: "Milestone prizes" },
  { icon: Sparkles, label: "Recognition moments" },
];

export default function SafetyClub({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Safety Patrol Club"
        title="Kindness and Safety Culture"
        text="A school-friendly club concept that turns safety, kindness, and peer responsibility into visible habits students can practice, notice, and celebrate."
        image={{
          src: "/assets/safety-club-hero.webp",
          webp: "/assets/safety-club-hero.webp",
        }}
        imageAlt="Positive school safety club mural with badges, kindness tokens, and reward materials"
        align="center"
        overlay="center"
        kicker="Kindness badge board"
        chips={["Kind choices", "Safe actions", "Happy recognition"]}
      />

      <Reveal as="section" className="bg-gradient-to-br from-safety-blue via-safety-teal to-safety-orange px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Club structure"
            title="Encourage, notice, celebrate."
            text="The behavior system is positive and practical, with clear pillars schools can adapt for safe actions and everyday kindness."
            tone="dark"
          />
          <CardGrid items={clubCards} columns="four" tone="dark" />
        </div>
      </Reveal>

      <Reveal as="section" className="kid-dots px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader eyebrow="Reward examples" title="Recognition should feel joyful and age-appropriate." align="center" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {rewards.map(({ icon: Icon, label }, index) => (
            <article className={`grid min-h-40 place-items-center gap-3 rounded-[1.5rem] border-2 border-command/10 p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${index === 0 ? "bg-yellow-100" : index === 1 ? "bg-cyan-100" : index === 2 ? "bg-red-100" : "bg-green-100"}`} key={label}>
              <Icon className="h-9 w-9 text-safety-gold" aria-hidden="true" />
              <span className="rounded-full bg-command px-3 py-1 text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-black text-ink">{label}</span>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="kid-paper grid gap-9 rounded-[2rem] border-4 border-dashed border-safety-gold/60 p-7 shadow-lift sm:p-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-normal text-safety-red">Simple rule set</p>
            <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-4xl lg:text-5xl">Kind behavior is easier to build when the rules are visible.</h2>
          </div>
          <ul className="grid gap-3">
            <li className="rounded-[1rem] border-2 border-command/10 bg-white p-5 font-extrabold text-ink">Points should be awarded consistently and transparently.</li>
            <li className="rounded-[1rem] border-2 border-command/10 bg-white p-5 font-extrabold text-ink">Rewards should be approved by guardians and school leadership.</li>
            <li className="rounded-[1rem] border-2 border-command/10 bg-white p-5 font-extrabold text-ink">Students should be celebrated for helping, reporting, and including others.</li>
          </ul>
        </div>
      </Reveal>

      <CTASection
        eyebrow="Connect the programs"
        title="Safety culture and student leadership can work together."
        text="The helper badges and Safety Patrol Club share the same goal: make safety feel brave, kind, and easy to practice."
      >
        <ButtonLink href="/ambassadors" onNavigate={onNavigate}>
          View Helpers
        </ButtonLink>
      </CTASection>
    </main>
  );
}
