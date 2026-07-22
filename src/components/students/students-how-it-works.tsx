const STEPS = [
  {
    n: "01",
    title: "Join and get verified",
    body: "Sign up with your university email. Verification keeps the panel honest — and your earnings real.",
  },
  {
    n: "02",
    title: "Get matched to a brief",
    body: "When a brand’s research matches your profile, you’re invited to chat with our AI — a real conversation, not a boring form.",
  },
  {
    n: "03",
    title: "Earn and cash out",
    body: "Make ₦500–₦1,000 per survey. Withdraw to OPay, PalmPay, or your bank once you hit the ₦1,000 minimum.",
  },
]

export function StudentsHowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-xl">
        <h2 className="text-balance font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl">How Sóró works</h2>
        <p className="mt-3 text-muted-foreground">Three steps from sign-up to cash-out.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {STEPS.map((step) => (
          <article key={step.n} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-terracotta/35">
            <span className="font-mono text-sm font-semibold text-terracotta">{step.n}</span>
            <h3 className="mt-3 font-heading text-xl font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StudentsHowItWorks
