import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Brief received — Sóró for companies",
  robots: { index: false, follow: false },
}

export default function BriefReceivedPage() {
  return (
    <main className="flex min-h-dvh items-center px-4 py-12 sm:px-6">
      <section className="mx-auto w-full max-w-xl rounded-3xl border border-border bg-card p-7 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Sóró for companies</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Brief received.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          A Sóró research lead will email you within one business day to confirm scope, pricing, and next steps.
        </p>
        <a
          href="/companies"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90"
        >
          Back to Sóró for companies
        </a>
      </section>
    </main>
  )
}
