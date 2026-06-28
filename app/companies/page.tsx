import type { Metadata } from "next"
import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { BriefForm } from "@/components/brief-form"
import { UNIVERSITY_TAGS } from "@/lib/soro-data"

export const metadata: Metadata = {
  title: "Sóró for companies — Verified African youth insight in 48 hours",
  description:
    "Submit a research brief and get AI-moderated interviews with verified Nigerian university students. Structured insights, verbatim quotes, and demographic breakdowns delivered in 48 hours.",
}

const STEPS = [
  {
    n: "01",
    title: "Submit your brief",
    body: "Share your research question, target respondent profile, and how many people you need. Pay upfront — that's it.",
  },
  {
    n: "02",
    title: "We deploy",
    body: "Our AI turns your brief into a conversational interview and pushes it to matched verified students. Dynamic follow-ups dig for real depth.",
  },
  {
    n: "03",
    title: "Report delivered",
    body: "Structured insights: key findings, verbatim quotes, demographic breakdowns, CSV + PDF export — within 48 hours.",
  },
]

const STATS = [
  { value: "500+", label: "students on waitlist" },
  { value: "10+", label: "universities covered" },
  { value: "100%", label: "university-verified" },
]

const COMPARISON = {
  columns: ["Verified African youth", "AI conversations", "Under ₦300k", "48hr turnaround", "Nigeria-native"],
  rows: [
    { name: "Kantar / Nielsen", values: [false, false, false, false, false] },
    { name: "GeoPoll", values: [true, false, false, false, true] },
    { name: "Google Forms / Typeform", values: [false, false, true, true, false] },
    { name: "Local research firms", values: [true, false, false, false, true] },
  ],
  soro: { name: "Sóró", values: [true, true, true, true, true] },
}

const PRICING_INCLUDES = [
  "100 verified respondents",
  "AI-moderated conversational interviews",
  "Structured report with verbatim quotes",
  "Demographic breakdown",
  "CSV + PDF export",
  "48-hour turnaround",
]

const TRUST = [
  { title: "Verified panel", body: "Every respondent is a real, ID-checked Nigerian university student." },
  { title: "Fraud screening", body: "Bot, duplicate, and low-effort responses are detected and removed before reporting." },
  { title: "Data quality guarantee", body: "Conversational depth and follow-ups mean answers you can actually act on." },
  { title: "Confidential & GDPR-aware", body: "Your brief and findings stay private, handled with modern data-protection practices." },
]

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="mx-auto">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="mx-auto opacity-40">
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav crossLinkLabel="For students" crossLinkHref="/" ctaLabel="Submit a brief" ctaTargetId="brief" />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-ochre" aria-hidden="true" />
          African youth insight, on startup time
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
          Honest answers from verified Nigerian students. In 48 hours.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Sóró runs AI-moderated interviews with university-verified students and turns them into a structured report —
          fast enough for the decisions you&apos;re making this week.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#brief"
            className="inline-flex w-full items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 sm:w-auto"
          >
            Submit a brief
          </a>
          <a
            href="#how"
            className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:w-auto"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            From brief to report
          </h2>
          <p className="mt-3 text-muted-foreground">A research pipeline that fits in your sprint.</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-sm font-semibold text-terracotta">{s.n}</span>
              <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The panel */}
      <section className="bg-card/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">The panel</h2>
              <p className="mt-3 text-pretty text-muted-foreground">
                Sóró&apos;s respondents are verified through university email or student ID before they can ever earn.
                We screen for fraud continuously and pay in cash, so people show up with real, considered answers — not
                point-farming noise.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-border bg-background p-4 text-center">
                    <p className="font-heading text-2xl font-extrabold text-terracotta sm:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Universities on the panel</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {UNIVERSITY_TAGS.map((u) => (
                  <span
                    key={u}
                    className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-semibold text-foreground"
                  >
                    {u}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Verification method: students confirm enrollment via their official university email domain or by
                uploading a current student ID, both checked before activation. Quality controls include attention
                checks, response-time analysis, and verbatim review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Why not Google Forms or the big agencies?
          </h2>
          <p className="mt-3 text-muted-foreground">
            The honest comparison. Sóró is built for the way modern teams actually move.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th className="rounded-tl-xl border border-border bg-card p-3 text-left font-semibold text-foreground">
                  Solution
                </th>
                {COMPARISON.columns.map((c, i) => (
                  <th
                    key={c}
                    className={`border-y border-r border-border bg-card p-3 text-center text-xs font-semibold text-muted-foreground ${
                      i === COMPARISON.columns.length - 1 ? "rounded-tr-xl" : ""
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((row) => (
                <tr key={row.name}>
                  <td className="border-x border-b border-border bg-background p-3 text-left font-medium text-foreground">
                    {row.name}
                  </td>
                  {row.values.map((v, i) => (
                    <td key={i} className="border-b border-r border-border bg-background p-3 text-center text-foreground">
                      {v ? <Check /> : <Dash />}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Sóró row — stands out all-green */}
              <tr>
                <td className="rounded-bl-xl border-x border-b border-sage bg-sage p-3 text-left font-bold text-sage-foreground">
                  {COMPARISON.soro.name}
                </td>
                {COMPARISON.soro.values.map((_, i) => (
                  <td
                    key={i}
                    className={`border-b border-r border-sage bg-sage p-3 text-center text-sage-foreground ${
                      i === COMPARISON.soro.values.length - 1 ? "rounded-br-xl" : ""
                    }`}
                  >
                    <Check />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-card/60 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Simple, single-tier pricing
            </h2>
            <p className="mt-3 text-muted-foreground">One brief, everything included. Custom panels available.</p>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
            <div className="border-b border-border bg-terracotta px-6 py-8 text-center text-terracotta-foreground">
              <p className="text-sm font-medium opacity-90">Per research brief</p>
              <p className="mt-1 font-heading text-5xl font-extrabold">₦250,000</p>
              <p className="mt-2 text-sm opacity-90">Payment required upfront before deployment</p>
            </div>
            <div className="p-6 sm:p-8">
              <ul className="grid gap-3 sm:grid-cols-2">
                {PRICING_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#brief"
                className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90"
              >
                Submit your brief
              </a>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Custom pricing available for larger panels or ongoing retainers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief form */}
      <section id="brief" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Submit your first brief
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Tell us what you want to learn and who you want to hear from. We&apos;ll reply within one business day.
          </p>
        </div>
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <BriefForm />
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-xl text-balance font-heading text-3xl font-bold text-background sm:text-4xl">
            Built so you can trust every data point
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.title} className="rounded-2xl border border-background/15 bg-background/5 p-6">
                <h3 className="font-heading text-lg font-bold text-background">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-background/70">
            Are you a student?{" "}
            <Link href="/" className="font-semibold text-ochre underline-offset-4 hover:underline">
              Join the Sóró waitlist
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter crossLinkLabel="For students" crossLinkHref="/" contactEmail="hello@soro.africa" />
    </main>
  )
}
