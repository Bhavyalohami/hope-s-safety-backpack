import { ClipboardList, Mail, PackageCheck, Presentation, School, ShieldCheck } from "lucide-react";
import { agendaItems } from "../data.js";
import { ButtonLink, CardGrid, CTASection, Hero, Reveal, SectionHeader } from "../components/ui.jsx";

const agendaIcons = [Presentation, PackageCheck, ClipboardList, School, Mail, ShieldCheck];
const agendaCards = agendaItems.map(([title, text], index) => ({ title, text, icon: agendaIcons[index] }));

const playbook = [
  {
    title: "Lead with mission",
    text: "Start with student confidence and family peace of mind before moving into product features.",
  },
  {
    title: "Explain the system",
    text: "Use detect, prepare, protect, and empower as the short path through the product story.",
  },
  {
    title: "Confirm the boundaries",
    text: "Be clear about parent consent, school approval, official orders, and no student inventory.",
  },
];

export default function SalesTeam({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Sales team agenda"
        title="Sales Team Playbook"
        text="A clear training guide for mission-first conversations, school-safe communication, family questions, and consistent expectations across the team."
        image={{
          src: "/assets/sales-playbook-hero.webp",
          webp: "/assets/sales-playbook-hero.webp",
        }}
        imageAlt="Sales operations board and training materials for Hope's Safety Backpack"
        align="right"
        overlay="right"
        kicker="Team playbook"
        chips={["Training", "Compliance", "Fulfillment"]}
      />

      <Reveal as="section" className="bg-command px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Operating agenda"
            title="What the sales team needs to understand."
            text="The agenda turns a complex program into repeatable talking points, respectful outreach habits, and clear team boundaries."
            tone="dark"
          />
          <CardGrid items={agendaCards} columns="three" numbered tone="dark" />
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeader eyebrow="Pitch framework" title="A cleaner story for every conversation." align="center" />
        <div className="grid gap-4 md:grid-cols-3">
          {playbook.map((item, index) => (
            <article className="rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift" key={item.title}>
              <span className="mb-4 inline-grid rounded-full bg-safety-red px-3 py-1 text-xs font-black text-white">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-[#f6f9fc] px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeader
            eyebrow="Compliance-forward"
            title="The best sales system protects the student experience."
            text="The playbook focuses on official channels, approved events, transparent codes, and family communication."
          />
          <div className="grid gap-3">
            {[
              ["Ask permission first", "Respect school policies, parent guidance, and event boundaries before any promotion."],
              ["Use one product story", "Lead with student confidence, then explain visibility, readiness, and support features."],
              ["Keep orders official", "Share the approved path for applications, preorder interest, and questions."],
            ].map(([title, text]) => (
              <article className="rounded-[1.25rem] border border-slate-200 bg-white p-6 shadow-soft" key={title}>
                <h3 className="text-xl font-black text-ink">{title}</h3>
                <p className="mt-2 leading-7 text-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <CTASection
        eyebrow="Team resources"
        title="Give the team one reliable destination for forms."
        text="Applications, preorder interest, and supplied documents are grouped in one responsive page."
      >
        <ButtonLink href="/forms" onNavigate={onNavigate}>
          Open Forms
        </ButtonLink>
      </CTASection>
    </main>
  );
}
