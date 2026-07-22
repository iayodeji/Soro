import { submitBrief } from "@/src/app/actions"

const COUNTS = ["50", "100", "200", "Custom"]
const TIMELINES = ["ASAP", "Within a week", "Flexible"]

export function BriefForm() {
  const inputBase =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 sm:text-sm"

  return (
    <form action={submitBrief} className="space-y-5">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="bf-website">Company website</label>
        <input id="bf-website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-company" className="mb-1.5 block text-sm font-medium text-foreground">
            Company name
          </label>
          <input
            id="bf-company"
            name="company"
            required
            minLength={2}
            maxLength={160}
            autoComplete="organization"
            placeholder="Acme Fintech"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="bf-contact" className="mb-1.5 block text-sm font-medium text-foreground">
            Contact name
          </label>
          <input
            id="bf-contact"
            name="contact_name"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            placeholder="Ada Obi"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="bf-email" className="mb-1.5 block text-sm font-medium text-foreground">
            Work email
          </label>
          <input
            id="bf-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            inputMode="email"
            placeholder="ada@acme.com"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="bf-title" className="mb-1.5 block text-sm font-medium text-foreground">
            Job title <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="bf-title"
            name="title"
            maxLength={160}
            autoComplete="organization-title"
            placeholder="Head of Insights"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bf-question" className="mb-1.5 block text-sm font-medium text-foreground">
          Research question
        </label>
        <textarea
          id="bf-question"
          name="question"
          rows={3}
          required
          minLength={10}
          maxLength={4000}
          placeholder="What we want to learn — e.g. why students abandon our wallet during onboarding."
          className={inputBase + " resize-y"}
        />
      </div>

      <div>
        <label htmlFor="bf-target" className="mb-1.5 block text-sm font-medium text-foreground">
          Target respondent profile
        </label>
        <textarea
          id="bf-target"
          name="target_profile"
          rows={2}
          required
          minLength={5}
          maxLength={2000}
          placeholder="e.g. female students, Ibadan, 18–22, fintech users"
          className={inputBase + " resize-y"}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-count" className="mb-1.5 block text-sm font-medium text-foreground">
            Desired respondent count
          </label>
          <select id="bf-count" name="count" defaultValue="100" className={inputBase}>
            {COUNTS.map((count) => (
              <option key={count} value={count}>
                {count === "Custom" ? "Custom" : count + " respondents"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bf-timeline" className="mb-1.5 block text-sm font-medium text-foreground">
            Timeline
          </label>
          <select id="bf-timeline" name="timeline" defaultValue="Within a week" className={inputBase}>
            {TIMELINES.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
      >
        Submit a brief
      </button>
    </form>
  )
}
