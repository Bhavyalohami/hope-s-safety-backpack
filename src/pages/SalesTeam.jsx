import { ClipboardList, Mail, PackageCheck, Presentation, School, ShieldCheck } from "lucide-react";
import { agendaItems } from "../data.js";
import { ButtonLink, CardGrid, CTASection, Hero, Reveal, SectionHeader } from "../components/ui.jsx";

const agendaIcons = [Presentation, PackageCheck, ClipboardList, School, Mail, ShieldCheck];
const agendaCards = agendaItems.map(([title, text], index) => ({ title, text, icon: agendaIcons[index] }));

const playbook = [
  {
    title: "Start with Hope's why",
    text: "Talk about student confidence and family peace of mind before listing features.",
  },
  {
    title: "Use kid-clear words",
    text: "Use be seen, be ready, ask for help, and be kind as the short path through the product story.",
  },
  {
    title: "Keep the rules bright",
    text: "Be clear about parent consent, school approval, official forms, and no student-handled orders.",
  },
];

export default function SalesTeam({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Helper team agenda"
        title="Helper Team Guide"
        text="A cheerful guide for grown-ups and student helpers: practice the safety story, answer family questions kindly, and keep every next step clear."
        image={{
          src: "/assets/sales-playbook-hero.webp",
          webp: "/assets/sales-playbook-hero.webp",
        }}
        imageAlt="Colorful helper team board and practice cards for Hope's Safety Backpack"
        align="right"
        overlay="right"
        kicker="Talk about the idea"
        chips={["Practice", "Permission", "Clear next step"]}
      />

      <Reveal as="section" className="bg-gradient-to-br from-safety-blue via-safety-teal to-safety-orange px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Team guide"
            title="What every helper should remember."
            text="The guide turns Hope's idea into simple talking points, respectful sharing habits, and clear grown-up boundaries."
            tone="dark"
          />
          <CardGrid items={agendaCards} columns="three" numbered tone="dark" />
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader eyebrow="Conversation cards" title="A kinder story for every conversation." align="center" />
        <div className="grid gap-4 md:grid-cols-3">
          {playbook.map((item, index) => (
            <article className={`rounded-[1.35rem] border-2 border-command/10 p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${index === 0 ? "bg-yellow-100" : index === 1 ? "bg-cyan-100" : "bg-green-100"}`} key={item.title}>
              <span className="mb-4 inline-grid rounded-full bg-safety-red px-3 py-1 text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="kid-dots px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Permission-first"
            title="The best helper system protects the student experience."
            text="The playbook focuses on official channels, approved events, transparent codes, and family communication."
          />
          <div className="grid gap-3">
            {[
              ["Ask permission first", "Respect school policies, parent guidance, and event boundaries before sharing."],
              ["Use one bright story", "Lead with student confidence, then explain visibility, readiness, and support features."],
              ["Keep orders official", "Share the approved path for applications, preorder interest, and questions."],
            ].map(([title, text]) => (
              <article className="kid-paper rounded-[1.25rem] border-2 border-command/10 p-6 shadow-soft" key={title}>
                <h3 className="text-xl font-black text-ink">{title}</h3>
                <p className="mt-2 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <CTASection
        eyebrow="Team resources"
        title="Give helpers one reliable destination for family forms."
        text="Applications, preorder interest, and supplied documents are grouped in one responsive page."
      >
        <ButtonLink href="/forms" onNavigate={onNavigate}>
          Open Forms
        </ButtonLink>
      </CTASection>
    </main>
  );
}
