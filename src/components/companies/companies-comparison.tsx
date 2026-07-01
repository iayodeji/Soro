function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="mx-auto">
      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Dash() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="mx-auto opacity-40">
      <path d="M5 12h14" strokeLinecap="round" />
    </svg>
  )
}

const COMPARISON = {
  columns: ["Verified African youth", "AI conversations", "Under ₦300k", "48hr turnaround", "Nigeria-native"],
  rows: [
    { name: "Kantar / Nielsen", values: [false, false, false, false, false] },
    { name: "GeoPoll", values: [true, false, false, false, true] },
    { name: "Google Forms / Typeform", values: [false, false, true, true, false] },
    { name: "Local research firms", values: [true, false, false, false, true] },
  ],
  soro: { name: "Sóró", values: [true, true, true, true, true] },
}

export function CompaniesComparison() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-xl">
        <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Why not Google Forms or the big agencies?
        </h2>
        <p className="mt-3 text-muted-foreground">The honest comparison. Sóró is built for the way modern teams actually move.</p>
      </div>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-0 text-sm">
          <thead>
            <tr>
              <th className="rounded-tl-xl border border-border bg-card p-3 text-left font-semibold text-foreground">
                Solution
              </th>
              {COMPARISON.columns.map((c, i) => (
                <th
                  key={c}
                  className={`border-y border-r border-border bg-card p-3 text-center text-xs font-semibold text-muted-foreground ${
                    i === COMPARISON.columns.length - 1 ? "rounded-tr-xl" : ""
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.rows.map((row) => (
              <tr key={row.name}>
                <td className="border-x border-b border-border bg-background p-3 text-left font-medium text-foreground">
                  {row.name}
                </td>
                {row.values.map((v, i) => (
                  <td key={i} className="border-b border-r border-border bg-background p-3 text-center text-foreground">
                    {v ? <Check /> : <Dash />}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="rounded-bl-xl border-x border-b border-sage bg-sage p-3 text-left font-bold text-sage-foreground">
                {COMPARISON.soro.name}
              </td>
              {COMPARISON.soro.values.map((_, i) => (
                <td
                  key={i}
                  className={`border-b border-r border-sage bg-sage p-3 text-center text-sage-foreground ${
                    i === COMPARISON.soro.values.length - 1 ? "rounded-br-xl" : ""
                  }`}
                >
                  <Check />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CompaniesComparison