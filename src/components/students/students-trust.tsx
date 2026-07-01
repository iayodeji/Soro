const TRUST = [
  {
    title: "University-ID verified",
    body: "Every panelist proves they're a real, enrolled Nigerian student before they can earn.",
  },
  {
    title: "Conversations, not clickthroughs",
    body: "AI interviews surface real reasoning — no lazy tapping through multiple choice for points.",
  },
  {
    title: "Fraud screening built in",
    body: "Duplicate, bot, and low-effort responses are flagged and filtered automatically.",
  },
  {
    title: "Cash, not points",
    body: "You earn naira you can actually withdraw — not vouchers, badges, or someday-rewards.",
  },
]

export function StudentsTrust() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-xl">
        <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Why brands trust this data
        </h2>
        <p className="mt-3 text-muted-foreground">
          Honest insight only works when the people behind it are real. Here&apos;s how we keep it that way.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {TRUST.map((t) => (
          <div key={t.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">{t.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StudentsTrust