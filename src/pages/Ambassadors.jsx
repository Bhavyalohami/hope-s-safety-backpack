import { Backpack, CheckCircle2, ClipboardCheck, DollarSign, GraduationCap, Lock, Shield, Users } from "lucide-react";
import { ButtonLink, CardGrid, CTASection, Checklist, Hero, Reveal, SectionHeader } from "../components/ui.jsx";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Apply with a guardian",
    text: "Students complete the application with parent or guardian involvement from the start.",
  },
  {
    icon: Backpack,
    title: "Use a demo backpack",
    text: "A starter kit gives ambassadors a clear, tangible product story to demonstrate.",
  },
  {
    icon: Users,
    title: "Share an approved code",
    text: "Referral codes keep orders trackable without asking students to manage product inventory.",
  },
  {
    icon: DollarSign,
    title: "Learn while earning",
    text: "Commission tracking becomes a practical lesson in saving, budgeting, goals, and responsibility.",
  },
];

const safeguards = [
  "Guardian consent before participation",
  "School-approved communication boundaries",
  "No student-managed inventory",
  "Official ordering and fulfillment channels",
  "Transparent referral and commission tracking",
];

export default function Ambassadors({ onNavigate }) {
  return (
    <main>
      <Hero
        eyebrow="Financial commitment to kids"
        title="Student Ambassador Program"
        text="A supervised program concept that helps students practice leadership, product communication, goal setting, and financial literacy while promoting a safety-focused mission."
        image={{
          src: "/assets/ambassador-program-hero.webp",
          webp: "/assets/ambassador-program-hero.webp",
        }}
        imageAlt="Ambassador program materials for student entrepreneurship and safety backpack referrals"
        align="left"
        overlay="left"
        kicker="Student leadership pathway"
        chips={["Guardian support", "Referral codes", "Financial literacy"]}
      />

      <Reveal as="section" className="bg-[#f6f9fc] px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="mx-auto max-w-[1224px]">
          <SectionHeader
            eyebrow="Program flow"
            title="A simple path from application to referral."
            text="The program is designed to be easy for families to understand and easy for schools to review because the boundaries are built into the model."
            align="center"
          />
          <CardGrid items={steps} columns="four" numbered />
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-slate-950 via-command to-blue-950 px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeader
              eyebrow="School-safe guardrails"
              title="Entrepreneurship with clear adult support."
              text="The ambassador path is framed as a structured learning opportunity with guardian involvement, school-aware boundaries, and official ordering."
              tone="dark"
            />
            <Checklist items={safeguards} tone="dark" />
          </div>
          <div className="grid gap-4 rounded-[2rem] border border-white/12 bg-white p-7 text-command shadow-lift" aria-label="Sample commission education board">
            <span className="w-fit rounded-full bg-safety-red px-3 py-1 text-xs font-black uppercase text-white">Sample learning board</span>
            <strong className="text-5xl font-black leading-none">$200 sale</strong>
            <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
              <p className="text-muted">12% model</p>
              <b>$24</b>
            </div>
            <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
              <p className="text-muted">Save half</p>
              <b>$12</b>
            </div>
            <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
              <p className="text-muted">Set a goal</p>
              <b>Track</b>
            </div>
            <small className="text-muted">Sample earning examples help students talk about saving, goals, and responsibility with a guardian.</small>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionHeader
            eyebrow="Learning outcomes"
            title="What students practice as ambassadors."
            text="The program gives young leaders a supervised way to practice money habits, product communication, and responsibility."
          />
          <CardGrid
            columns="three"
            items={[
              { icon: GraduationCap, title: "Financial literacy", text: "Saving, budgeting, tracking commission, and understanding customer value." },
              { icon: CheckCircle2, title: "Communication", text: "Explaining the product clearly, listening to questions, and presenting with confidence." },
              { icon: Lock, title: "Responsibility", text: "Respecting school rules, guardian guidance, and official sales boundaries." },
            ]}
          />
        </div>
      </Reveal>

      <CTASection
        eyebrow="Apply or review"
        title="Keep the next step simple for families."
        text="Families can review the application path, preorder interest, and supporting documents in one place."
      >
        <ButtonLink href="/forms" onNavigate={onNavigate} icon={Shield}>
          Open Applications
        </ButtonLink>
      </CTASection>
    </main>
  );
}
