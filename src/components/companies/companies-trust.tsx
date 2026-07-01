const TRUST = [
  { title: "Verified panel", body: "Every respondent is a real, ID-checked Nigerian university student." },
  { title: "Fraud screening", body: "Bot, duplicate, and low-effort responses are detected and removed before reporting." },
  { title: "Data quality guarantee", body: "Conversational depth and follow-ups mean answers you can actually act on." },
  { title: "Confidential & GDPR-aware", body: "Your brief and findings stay private, handled with modern data-protection practices." },
]

export function CompaniesTrust() {
  return (
    <section className="bg-foreground py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-xl text-balance font-heading text-3xl font-bold text-background sm:text-4xl">
          Built so you can trust every data point
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.title} className="rounded-2xl border border-background/15 bg-background/5 p-6">
              <h3 className="font-heading text-lg font-bold text-background">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompaniesTrust