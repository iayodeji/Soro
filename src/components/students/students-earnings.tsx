const RATES = [
  { label: "per interview", value: "₦500–₦1,000", valueClass: "text-ochre" },
  { label: "premium studies", value: "₦5,000", valueClass: "text-sage" },
  { label: "cash-out minimum", value: "₦1,000", valueClass: "text-terracotta" },
]

const METHODS = ["OPay", "PalmPay", "Bank transfer"]

export function StudentsEarnings() {
  return (
    <section className="border-y border-border/70 bg-card/65 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">What you can earn</h2>
          <p className="mt-3 text-muted-foreground">Clear rates, paid in cash. No points, no games.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {RATES.map((rate) => (
            <article key={rate.label} className="rounded-2xl border border-border bg-background p-6 text-center">
              <p className={"font-heading text-3xl font-extrabold " + rate.valueClass}>{rate.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{rate.label}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-foreground">Withdraw to:</span>
          {METHODS.map((method) => (
            <span key={method} className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground">
              {method}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentsEarnings
