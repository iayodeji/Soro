const PRICING_INCLUDES = [
  "100 verified respondents",
  "AI-moderated conversational interviews",
  "Structured report with verbatim quotes",
  "Demographic breakdown",
  "CSV + PDF export",
  "48-hour turnaround",
]

export function CompaniesPricing() {
  return (
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
  )
}

export default CompaniesPricing