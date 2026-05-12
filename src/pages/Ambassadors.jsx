import { Backpack, CheckCircle2, ClipboardCheck, Lock, Medal, Smile, Star, Users } from "lucide-react";
import { ButtonLink, CardGrid, CTASection, Checklist, Hero, KidNote, Reveal, SectionHeader } from "../components/ui.jsx";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Ask a guardian",
    text: "Students start with parent or guardian support, because the grown-ups stay part of the plan.",
  },
  {
    icon: Backpack,
    title: "Show the idea",
    text: "A demo backpack helps student helpers point to the lights, care pocket, and kindness message.",
  },
  {
    icon: Users,
    title: "Share safely",
    text: "Helpers use approved cards and simple words, while families handle every official next step.",
  },
  {
    icon: Star,
    title: "Earn a bright badge",
    text: "Students can practice confidence, listening, and responsibility without carrying products or pressure.",
  },
];

const safeguards = [
  "Guardian consent before participation",
  "School-approved communication boundaries",
  "Students do not carry products or handle orders",
  "Official family contact path",
  "Kind words before any product talk",
];

export default function Ambassadors({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Kid helper program"
        title="Student Helper Badges"
        text="A supervised program idea where students practice confidence, kindness, and clear safety words while a grown-up stays beside every step."
        image={{
          src: "/assets/ambassador-program-hero.webp",
          webp: "/assets/ambassador-program-hero.webp",
        }}
        imageAlt="Colorful student helper cards and Hope's Safety Backpack program materials"
        align="left"
        overlay="left"
        kicker="Helper badge path"
        chips={["Guardian support", "Kind sharing", "No pressure"]}
      />

      <Reveal as="section" className="kid-dots px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="mx-auto max-w-[1224px]">
          <SectionHeader
            eyebrow="Program flow"
            title="Four steps on the ambassador badge path."
            text="The program is designed to be easy for families to understand and easy for schools to review because the grown-up guardrails are part of the story."
            align="center"
          />
          <CardGrid items={steps} columns="four" numbered />
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-safety-blue via-safety-teal to-safety-orange px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeader
              eyebrow="School-safe guardrails"
              title="Big kid energy with clear adult support."
              text="The helper path is framed as a confidence-building activity with guardian involvement, school-aware boundaries, and official family communication."
              tone="dark"
            />
            <Checklist items={safeguards} tone="dark" />
          </div>
          <div className="kid-paper grid gap-4 rounded-[2rem] border-4 border-dashed border-white/70 p-7 text-command shadow-lift" aria-label="Sample helper badge board">
            <span className="w-fit rounded-full bg-safety-red px-3 py-1 text-xs font-black uppercase text-white">Helper badge board</span>
            <strong className="text-5xl font-black leading-none">I can help!</strong>
            {[
              ["Seen", "I can explain the bright lights."],
              ["Ready", "I can point to the care pocket."],
              ["Kind", "I can answer with a smile."],
            ].map(([title, text]) => (
              <div className="rounded-[1rem] border-2 border-command/10 bg-white p-4" key={title}>
                <p className="text-lg font-black text-command">{title}</p>
                <p className="mt-1 font-bold text-muted">{text}</p>
              </div>
            ))}
            <small className="text-muted">Badges celebrate practice, manners, and bravery. A guardian handles questions that need an adult answer.</small>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Learning outcomes"
            title="What students practice as helpers."
            text="The program gives young leaders a supervised way to practice helpful communication, school-safe sharing, and responsibility."
          />
          <CardGrid
            columns="three"
            items={[
              { icon: Smile, title: "Confidence", text: "Standing tall, using simple words, and remembering that safety can feel brave." },
              { icon: CheckCircle2, title: "Communication", text: "Explaining the idea clearly, listening to questions, and asking a grown-up when needed." },
              { icon: Lock, title: "Responsibility", text: "Respecting school rules, guardian guidance, and official helper boundaries." },
            ]}
          />
        </div>
      </Reveal>

      <CTASection
        eyebrow="Apply or review"
        title="Keep the next step simple for families."
        text="Families can review the application path, preorder interest, and supporting documents in one place."
      >
        <KidNote className="rotate-1" color="green">
          Investment opportunity available please schedule investment interview
        </KidNote>
        <ButtonLink href="/forms" onNavigate={onNavigate} icon={Medal}>
          Open Applications
        </ButtonLink>
      </CTASection>
    </main>
  );
}
