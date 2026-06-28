import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { ActivityTicker } from "@/components/activity-ticker"
import { ChatDemo } from "@/components/chat-demo"
import { WaitlistForm } from "@/components/waitlist-form"

const STEPS = [
  {
    n: "01",
    title: "Join and get verified",
    body: "Sign up with your university email or student ID. Verification keeps the panel honest — and your earnings real.",
  },
  {
    n: "02",
    title: "Get matched to a brief",
    body: "When a brand's research matches your profile, you're invited to chat with our AI — a real conversation, not a boring form.",
  },
  {
    n: "03",
    title: "Earn and cash out",
    body: "Make ₦200+ per question. Withdraw to OPay, PalmPay, or your bank once you hit the ₦1,000 minimum.",
  },
]

const RATES = [
  { label: "Per question", value: "₦200+", valueClass: "text-terracotta" },
  { label: "Full interview", value: "₦1,000", valueClass: "text-ochre" },
  { label: "Premium studies", value: "₦5,000", valueClass: "text-sage" },
  { label: "Cashout minimum", value: "₦1,000", valueClass: "text-terracotta" },
]

const TRUST = [
  {
    title: "University-ID verified",
    body: "Every panelist proves they're a real, enrolled Nigerian student before they can earn.",
  },
  {
    title: "Conversations, not clickthroughs",
    body: "AI interviews surface real reasoning — no lazy tapping through multiple choice for points.",
  },
  {
    title: "Fraud screening built in",
    body: "Duplicate, bot, and low-effort responses are flagged and filtered automatically.",
  },
  {
    title: "Cash, not points",
    body: "You earn naira you can actually withdraw — not vouchers, badges, or someday-rewards.",
  },
]

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav crossLinkLabel="For companies" crossLinkHref="/companies" ctaLabel="Join waitlist" ctaTargetId="waitlist" />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
              Now onboarding verified Nigerian students
            </span>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Get paid to share what you actually think.
            </h1>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sóró pays Nigerian university students to answer brand questions through a quick AI conversation — not
              another boring survey form. Real talk, real naira.
            </p>

            <div
              id="waitlist"
              className="mt-7 max-w-md scroll-mt-24 rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur"
            >
              <WaitlistForm variant="full" />
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="h-7 w-7 rounded-full border-2 border-background bg-terracotta" />
                <span className="h-7 w-7 rounded-full border-2 border-background bg-ochre" />
                <span className="h-7 w-7 rounded-full border-2 border-background bg-sage" />
                <span className="h-7 w-7 rounded-full border-2 border-background bg-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+ students</span> already on the waitlist
              </p>
            </div>
          </div>

          <div className="lg:pl-6">
            <ChatDemo />
          </div>
        </div>
      </section>

      <ActivityTicker />

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">How Sóró works</h2>
          <p className="mt-3 text-muted-foreground">Three steps from sign-up to cash-out.</p>
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

      {/* Earnings breakdown */}
      <section className="bg-card/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
              What you can earn
            </h2>
            <p className="mt-3 text-muted-foreground">Clear rates, paid in cash. No points, no games.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {RATES.map((r) => (
              <div key={r.label} className="rounded-2xl border border-border bg-background p-6 text-center">
                <p className={`font-heading text-3xl font-extrabold ${r.valueClass}`}>{r.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-foreground">Withdraw to:</span>
            {["OPay", "PalmPay", "Bank Transfer"].map((m) => (
              <span
                key={m}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / verification */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Why brands trust this data
          </h2>
          <p className="mt-3 text-muted-foreground">
            Honest insight only works when the people behind it are real. Here&apos;s how we keep it that way.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {TRUST.map((t) => (
            <div key={t.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">{t.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-balance font-heading text-3xl font-bold text-background sm:text-4xl">
            Your opinion is worth money. Start earning.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-background/70">
            Drop your university email and we&apos;ll save your spot. Brands are already lining up their first briefs.
          </p>
          <div className="mx-auto mt-7 max-w-md rounded-2xl bg-background/95 p-4 text-left">
            <WaitlistForm variant="email" />
          </div>
          <p className="mt-5 text-sm text-background/70">
            Building a brand instead?{" "}
            <Link href="/companies" className="font-semibold text-ochre underline-offset-4 hover:underline">
              See Sóró for companies
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter crossLinkLabel="For companies" crossLinkHref="/companies" />
    </main>
  )
}
