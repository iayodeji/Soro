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

export function CompaniesHowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-xl">
        <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">From brief to report</h2>
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
  )
}
export default CompaniesHowItWorks