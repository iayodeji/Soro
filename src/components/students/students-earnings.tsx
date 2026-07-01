const RATES = [
  { label: "Per question", value: "₦200+", valueClass: "text-terracotta" },
  { label: "Full interview", value: "₦1,000", valueClass: "text-ochre" },
  { label: "Premium studies", value: "₦5,000", valueClass: "text-sage" },
  { label: "Cashout minimum", value: "₦1,000", valueClass: "text-terracotta" },
]

const METHODS = ["OPay", "PalmPay", "Bank Transfer"]

export function StudentsEarnings() {
  return (
    <section className="bg-card/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">What you can earn</h2>
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
          {METHODS.map((m) => (
            <span key={m} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudentsEarnings