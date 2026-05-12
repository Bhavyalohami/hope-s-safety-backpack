import { HeartHandshake, Lightbulb, Megaphone, Shield, Sparkles } from "lucide-react";
import { ButtonLink, CardGrid, CTASection, Hero, KidNote, Reveal, SectionHeader } from "../components/ui.jsx";

const values = [
  {
    icon: Lightbulb,
    title: "A kid's big idea",
    text: "The idea began with a practical question: why not keep safety supplies where students already carry what matters?",
  },
  {
    icon: Shield,
    title: "School-day courage",
    text: "The mission grew from health supplies into a brighter safety idea for school, travel, and community moments.",
  },
  {
    icon: HeartHandshake,
    title: "Family calm",
    text: "The story is centered on helping students feel prepared while giving families another reason to breathe easier.",
  },
];

const timeline = [
  ["2020", "Hope imagines the original COVID Defense Backpack when school safety and health routines feel uncertain."],
  ["Age 7", "She brings the idea to the Orange County School Board Meeting and receives encouraging feedback."],
  ["2021", "The backpack concept grows into a larger student safety mission after Hope sees news about school danger."],
  ["2026", "The project reaches a United States patent milestone and continues growing as a family-led safety mission."],
];

export default function Story({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Created from a student's perspective"
        title="Hope's Story"
        text="Hope Herron's idea began the way many kid ideas begin: with a worry, a question, and a drawing that could help school feel safer."
        image={{
          src: "/assets/story-inventor-hero.webp",
          webp: "/assets/story-inventor-hero.webp",
        }}
        imageAlt="Warm invention desk scene with backpack sketches and safety supplies"
        align="right"
        overlay="right"
        kicker="Hope's notebook"
        chips={["Age 7 idea", "Family mission", "Brave school days"]}
      />

      <Reveal as="section" className="kid-dots px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeader eyebrow="Founder story" title="From a kid's backpack sketch to a larger safety mission." />
          <div className="grid gap-5">
            <article className="kid-paper -rotate-1 rounded-[1.5rem] border-4 border-dashed border-safety-gold/60 p-7 shadow-soft">
              <p className="text-lg leading-8 text-muted">
                Hope Herron first imagined putting safety supplies on the outside of a backpack when COVID made
                returning to school feel scary. Gloves, sanitizer, masks, and daily protection suddenly became part of
                being a kid. Her backpack idea gave those safety items a visible, easy-to-reach home.
              </p>
            </article>
            <article className="rotate-1 rounded-[1.5rem] border-4 border-dashed border-safety-blue/35 bg-cyan-50 p-7 shadow-soft">
              <p className="text-lg leading-8 text-muted">
                After seeing more news about danger in schools, Hope and her family began thinking bigger. The concept
                expanded into a backpack that could support kids in many situations: being visible, staying prepared,
                communicating safety, and giving parents another reason to feel at ease.
              </p>
            </article>
            <blockquote className="rounded-[1.5rem] border-4 border-command bg-gradient-to-r from-safety-red to-safety-orange p-7 text-2xl font-black leading-tight text-white shadow-[0_10px_0_rgb(12_20_37/0.16)] sm:text-3xl">
              Kids should feel protected, confident, and prepared when they go to school.
            </blockquote>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-safety-blue via-safety-teal to-safety-orange px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader eyebrow="Timeline" title="A student idea that kept evolving." align="center" tone="dark" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {timeline.map(([year, text], index) => (
            <article className={`rounded-[1.35rem] border-2 border-white/30 p-6 text-command shadow-soft ${index % 2 ? "rotate-1 bg-yellow-100" : "-rotate-1 bg-white"}`} key={year}>
              <span className="mb-4 inline-grid rounded-full bg-safety-red px-3 py-1 text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
              <strong className="block text-2xl font-black text-command">{year}</strong>
              <p className="mt-3 leading-7 text-body">{text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-white via-teal-50 to-yellow-50 px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader
          eyebrow="Mission values"
          title="A mission built around protection and possibility."
          text="The emotional center matters as much as the feature list: the idea is practical, hopeful, and led by a student's point of view."
        />
        <CardGrid items={values} columns="three" />
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="kid-paper grid gap-6 rounded-[2rem] border-4 border-dashed border-safety-gold/60 p-7 shadow-lift sm:p-10 lg:grid-cols-[auto_1fr]">
          <Megaphone className="h-11 w-11 text-safety-teal" aria-hidden="true" />
          <p className="max-w-5xl text-2xl font-black leading-snug text-ink">
            The strongest version of this brand is not fear-based. It is hopeful, practical, and empowering: students
            can learn safety habits, families can feel more prepared, and schools can encourage positive leadership.
          </p>
        </div>
      </Reveal>

      <CTASection
        eyebrow="Continue the story"
        title="See how the mission becomes a student program."
        text="The helper page turns Hope's safety idea into a supervised opportunity for communication, confidence, and kindness."
      >
        <KidNote className="rotate-1" color="blue">
          Investment opportunity available please schedule investment interview
        </KidNote>
        <ButtonLink href="/ambassadors" onNavigate={onNavigate} icon={Sparkles}>
          View Helpers
        </ButtonLink>
      </CTASection>
    </main>
  );
}
