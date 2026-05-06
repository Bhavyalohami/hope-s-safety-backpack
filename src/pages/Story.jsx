import { HeartHandshake, Lightbulb, Megaphone, Shield, Sparkles } from "lucide-react";
import { ButtonLink, CardGrid, CTASection, Hero, Reveal, SectionHeader } from "../components/ui.jsx";

const values = [
  {
    icon: Lightbulb,
    title: "Student imagination",
    text: "The idea began with a child's practical question: why not keep safety supplies where students already carry what matters?",
  },
  {
    icon: Shield,
    title: "Everyday protection",
    text: "The mission expanded from COVID supplies into a broader safety concept for school, travel, and community moments.",
  },
  {
    icon: HeartHandshake,
    title: "Family peace of mind",
    text: "The product story is centered on helping students feel prepared while giving parents a clearer support system.",
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
        text="Hope Herron's idea began as a way to feel safer returning to school. It has grown into a mission to help more children feel protected, confident, and prepared."
        image={{
          src: "/assets/story-inventor-hero.webp",
          webp: "/assets/story-inventor-hero.webp",
        }}
        imageAlt="Warm invention desk scene with backpack sketches and safety supplies"
        align="right"
        overlay="right"
        kicker="Origin story"
        chips={["Student idea", "Family mission", "Hope-led"]}
      />

      <Reveal as="section" className="bg-[#fff7ed] px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <SectionHeader eyebrow="Founder story" title="From COVID Defense Backpack to a larger safety mission." />
          <div className="grid gap-5">
            <article className="rounded-[1.5rem] border border-orange-200 bg-white p-7 shadow-soft">
              <p className="text-lg leading-8 text-muted">
                Hope Herron first imagined putting safety supplies on the outside of a backpack when COVID made
                returning to school feel scary. Gloves, sanitizer, masks, and daily protection suddenly became part of
                being a kid. Her backpack idea gave those safety items a visible, easy-to-reach home.
              </p>
            </article>
            <article className="rounded-[1.5rem] border border-orange-200 bg-white p-7 shadow-soft">
              <p className="text-lg leading-8 text-muted">
                After seeing more news about danger in schools, Hope and her family began thinking bigger. The concept
                expanded into a backpack that could support kids in many situations: being visible, staying prepared,
                communicating safety, and giving parents another reason to feel at ease.
              </p>
            </article>
            <blockquote className="rounded-[1.5rem] border-l-8 border-safety-gold bg-command p-7 text-2xl font-black leading-tight text-white shadow-lift sm:text-3xl">
              Kids should feel protected, confident, and prepared when they go to school.
            </blockquote>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-command px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader eyebrow="Timeline" title="A student idea that kept evolving." align="center" tone="dark" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {timeline.map(([year, text], index) => (
            <article className="rounded-[1.35rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur" key={year}>
              <span className="mb-4 inline-grid rounded-full bg-safety-red px-3 py-1 text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
              <strong className="block text-2xl font-black text-white">{year}</strong>
              <p className="mt-3 leading-7 text-white/72">{text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-white via-teal-50 to-blue-50 px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader
          eyebrow="Mission values"
          title="A brand built around protection and possibility."
          text="The emotional center matters as much as the feature list: the idea is practical, hopeful, and led by a student's point of view."
        />
        <CardGrid items={values} columns="three" />
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lift sm:p-10 lg:grid-cols-[auto_1fr]">
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
        text="The ambassador page turns Hope's safety idea into a supervised opportunity for communication, confidence, and financial literacy."
      >
        <ButtonLink href="/financial" onNavigate={onNavigate} icon={Sparkles}>
          View Ambassadors
        </ButtonLink>
      </CTASection>
    </main>
  );
}
