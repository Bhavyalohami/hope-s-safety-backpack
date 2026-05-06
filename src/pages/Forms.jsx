import { useState } from "react";
import { FileText, Lock, Mail, Send, ShieldCheck, Siren } from "lucide-react";
import { faqs } from "../data.js";
import { ButtonLink, Hero, Reveal, SectionHeader } from "../components/ui.jsx";
import { withBasePath } from "../paths.js";

function InterestForm({ type }) {
  const [message, setMessage] = useState("");
  const isPreorder = type === "preorder";

  return (
    <form
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("Thank you for your interest. Please use the downloadable form or contact the team to continue the conversation.");
      }}
    >
      <div className="mb-6 flex items-center gap-2 rounded-[1rem] border border-yellow-300/60 bg-yellow-100/70 p-3 font-extrabold text-yellow-900">
        <Lock className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Your family information deserves care. Use this page to prepare your details before contacting the team.</span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-ink">
          Parent or Guardian Name
          <input className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" type="text" name="guardianName" placeholder="Enter full name" autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Email Address
          <input className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" type="email" name="email" placeholder="parent@example.com" autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Phone Number
          <input className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" type="tel" name="phone" placeholder="(000) 000-0000" autoComplete="tel" />
        </label>
        <label className="grid gap-2 text-sm font-black text-ink">
          Student Name
          <input className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" type="text" name="studentName" placeholder="Enter student name" />
        </label>

        {isPreorder ? (
          <>
            <label className="grid gap-2 text-sm font-black text-ink">
              Quantity
              <input className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" type="number" min="1" name="quantity" placeholder="1" inputMode="numeric" />
            </label>
            <label className="grid gap-2 text-sm font-black text-ink">
              Preferred Color
              <select className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" name="preferredColor" defaultValue="">
                <option value="" disabled>
                  Select option
                </option>
                <option>Clear with blue LED</option>
                <option>Clear with red LED</option>
                <option>Clear with multi-color LED</option>
              </select>
            </label>
          </>
        ) : (
          <>
            <label className="grid gap-2 text-sm font-black text-ink">
              School or Organization
              <input className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" type="text" name="school" placeholder="School name" />
            </label>
            <label className="grid gap-2 text-sm font-black text-ink">
              Ambassador Age
              <input className="min-h-12 rounded-md border border-slate-200 px-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]" type="number" min="7" name="age" placeholder="13" inputMode="numeric" />
            </label>
          </>
        )}
      </div>

      <label className="mt-4 grid gap-2 text-sm font-black text-ink">
        Notes
        <textarea
          className="min-h-32 resize-y rounded-md border border-slate-200 px-3 py-3 text-body transition focus:border-safety-blue focus:shadow-[0_0_0_3px_rgb(21_94_239/0.12)]"
          name="notes"
          placeholder={isPreorder ? "Any preorder questions or timing notes?" : "Why are you interested in becoming an ambassador?"}
        />
      </label>

      <button className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-safety-red to-safety-orange px-5 py-3 text-sm font-black leading-none text-white shadow-[0_14px_34px_rgb(215_25_32/0.24)] transition hover:-translate-y-0.5 hover:shadow-lift sm:w-auto" type="submit">
        <span>{isPreorder ? "Prepare Preorder Details" : "Prepare Application Details"}</span>
        <Send size={17} aria-hidden="true" />
      </button>
      {message ? <p className="mt-4 font-black text-green-700" role="status">{message}</p> : null}
    </form>
  );
}

const downloads = [
  {
    href: "/forms/sales-ambassador-application.pdf",
    type: "PDF",
    label: "Sales Ambassador Application",
    icon: FileText,
  },
  {
    href: "/forms/sales-ambassador-application.docx",
    type: "DOCX",
    label: "Editable Ambassador Application",
    icon: FileText,
  },
  {
    href: "/forms/preorder-form.pdf",
    type: "PDF",
    label: "Backpack Preorder Form",
    icon: Siren,
  },
];

export default function Forms({ onNavigate }) {
  const [active, setActive] = useState("ambassador");

  return (
    <main>
      <Hero
        eyebrow="Applications and preorder interest"
        title="Forms and Resources"
        text="A clear place for families to review ambassador applications, share preorder interest, and find the documents needed to take the next step."
        image={{
          src: "/assets/forms-workflow-hero.webp",
          webp: "/assets/forms-workflow-hero.webp",
        }}
        imageAlt="Application and preorder workflow desk for Hope's Safety Backpack forms"
        align="left"
        overlay="left"
        kicker="Family resource center"
        chips={["Applications", "Preorders", "Documents"]}
      />

      <Reveal as="section" className="bg-[#f6f9fc] px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-[0.38fr_0.62fr]">
          <aside className="sticky top-24 rounded-[2rem] bg-command p-7 text-white shadow-lift" aria-label="Form guidance">
            <p className="mb-3 text-xs font-black uppercase tracking-normal text-[#71f0df]">Family guidance</p>
            <h2 className="text-4xl font-black leading-tight text-white">Choose the path that fits your family.</h2>
            <p className="mt-5 leading-7 text-white/75">
              Review the application path, gather the right details, and use the supplied files when you are ready to
              discuss ambassador participation or preorder interest.
            </p>
            <div className="mt-6 grid gap-2">
              {["Guardian details", "Student information", "Program interest"].map((item) => (
                <span className="rounded-lg border border-white/15 bg-white/10 p-3 font-extrabold text-white" key={item}>{item}</span>
              ))}
            </div>
          </aside>

          <div>
            <SectionHeader
              eyebrow="Start here"
              title="Application and preorder paths in one place."
              text="Families can review the information needed for either path, then use the downloadable forms or contact the team for the official next step."
            />
            <div className="mb-5 inline-flex rounded-lg border border-slate-200 bg-slate-100 p-1" role="tablist" aria-label="Form selector">
              <button
                className={`min-h-10 min-w-32 rounded-md px-4 py-2 font-black ${active === "ambassador" ? "bg-command text-white" : "text-muted"}`}
                type="button"
                role="tab"
                aria-selected={active === "ambassador"}
                onClick={() => setActive("ambassador")}
              >
                Ambassador
              </button>
              <button
                className={`min-h-10 min-w-32 rounded-md px-4 py-2 font-black ${active === "preorder" ? "bg-command text-white" : "text-muted"}`}
                type="button"
                role="tab"
                aria-selected={active === "preorder"}
                onClick={() => setActive("preorder")}
              >
                Preorder
              </button>
            </div>
            <InterestForm type={active} />
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="bg-command px-5 py-16 text-white sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader eyebrow="Supplied documents" title="Original files remain available for review." align="center" tone="dark" />
        <div className="grid gap-4 md:grid-cols-3">
          {downloads.map(({ href, type, label, icon: Icon }) => (
            <a className="flex min-h-44 flex-col justify-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-lift" href={withBasePath(href)} target="_blank" rel="noopener noreferrer" key={href}>
              <Icon className="h-8 w-8 text-[#71f0df]" aria-hidden="true" />
              <span className="w-fit rounded-full bg-safety-red px-3 py-1 text-xs font-black text-white">{type}</span>
              <strong className="text-lg font-black text-white">{label}</strong>
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="bg-gradient-to-br from-blue-50 via-white to-slate-100 px-5 py-16 sm:px-8 lg:px-[max(2rem,calc((100vw-1180px)/2+2rem))] lg:py-24">
        <SectionHeader eyebrow="FAQ" title="Important form and launch notes." align="center" />
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <details className="rounded-[1.25rem] border border-slate-200 bg-white shadow-soft" key={item.question}>
              <summary className="cursor-pointer p-5 font-black text-ink">{item.question}</summary>
              <p className="p-5 pt-4 leading-7 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1224px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-center gap-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-lift sm:p-10 lg:grid-cols-[1fr_auto]">
          <div>
            <Mail className="mb-3 h-9 w-9 text-safety-teal" aria-hidden="true" />
            <h2 className="text-balance text-3xl font-black leading-tight text-ink sm:text-4xl">Questions before you move forward?</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              Families, schools, and community partners can review the product story, compare forms, and reach out with
              questions about participation.
            </p>
          </div>
          <ButtonLink href="/features" variant="dark" onNavigate={onNavigate} icon={ShieldCheck}>
            Review Features
          </ButtonLink>
        </div>
      </Reveal>
    </main>
  );
}
