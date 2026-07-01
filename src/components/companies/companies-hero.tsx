export function CompaniesHero() {
  return (
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
  )
}

export default CompaniesHero