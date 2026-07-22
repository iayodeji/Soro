export function CompaniesHero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-14 pt-14 text-center sm:px-6 sm:pb-20 sm:pt-24">
      <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-ochre" aria-hidden="true" />
        African youth insight, on startup time
      </p>

      <h1 className="mx-auto mt-5 max-w-4xl text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
        Honest answers from verified Nigerian students. In 48 hours.
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        Sóró runs deep, AI-moderated interviews with university-verified panels. No biased survey checkboxes. Just
        structured intelligence, fast enough for the deployment decisions you’re making this week.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#brief"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:w-auto"
        >
          Submit a brief
        </a>
        <a
          href="#how"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:w-auto"
        >
          See how it works
        </a>
      </div>
    </section>
  )
}

export default CompaniesHero
