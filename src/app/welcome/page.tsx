import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You’re on the Sóró waitlist",
  robots: { index: false, follow: false },
}

export default function WelcomePage() {
  return (
    <main className="flex min-h-dvh items-center px-4 py-12 sm:px-6">
      <section className="mx-auto w-full max-w-xl rounded-3xl border border-border bg-card p-7 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Sóró student panel</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          You’re on the list.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Thanks for registering. We’ll email you as soon as interviews open for your university.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90"
          >
            Back to Sóró
          </a>
          <a
            href="/companies"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            I’m a company
          </a>
        </div>
      </section>
    </main>
  )
}
