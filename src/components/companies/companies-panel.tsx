import { UNIVERSITY_TAGS } from "@/src/lib/soro-data"

const STATS = [
  { value: "500+", label: "students on waitlist" },
  { value: "10+", label: "universities covered" },
  { value: "100%", label: "university-verified" },
]

export function CompaniesPanel() {
  return (
    <section className="bg-card/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">The panel</h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Sóró&apos;s respondents are verified through university email or student ID before they can ever earn.
              We screen for fraud continuously and pay in cash, so people show up with real, considered answers — not
              point-farming noise.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background p-4 text-center">
                  <p className="font-heading text-2xl font-extrabold text-terracotta sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Universities on the panel</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {UNIVERSITY_TAGS.map((u) => (
                <span
                  key={u}
                  className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-semibold text-foreground"
                >
                  {u}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Verification method: students confirm enrollment via their official university email domain or by
              uploading a current student ID, both checked before activation. Quality controls include attention
              checks, response-time analysis, and verbatim review.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompaniesPanel