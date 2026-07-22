import { joinWaitlist } from "@/src/app/actions"

type Variant = "full" | "email"

type WaitlistFormProps = {
  idPrefix?: string
  variant?: Variant
}

export function WaitlistForm({ idPrefix = "waitlist", variant = "full" }: WaitlistFormProps) {
  const inputBase =
    "w-full rounded-lg border border-input bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 sm:text-sm"

  const nameId = idPrefix + "-name"
  const emailId = idPrefix + "-email"
  const universityId = idPrefix + "-university"

  return (
    <form action={joinWaitlist} className="space-y-4">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor={idPrefix + "-website"}>Company website</label>
        <input id={idPrefix + "-website"} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {variant === "full" ? (
        <div>
          <label htmlFor={nameId} className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={120}
            autoComplete="name"
            placeholder="Chidinma Okafor"
            className={inputBase}
          />
        </div>
      ) : null}

      <div>
        {variant === "full" ? (
          <label htmlFor={emailId} className="mb-1.5 block text-sm font-medium text-foreground">
            University email
          </label>
        ) : (
          <label htmlFor={emailId} className="sr-only">
            University email
          </label>
        )}
        <div className={variant === "email" ? "flex flex-col gap-3 sm:flex-row" : ""}>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            inputMode="email"
            placeholder="you@student.ui.edu.ng"
            className={inputBase}
          />
          {variant === "email" ? (
            <button
              type="submit"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-lg bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Join waitlist
            </button>
          ) : null}
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">Use your official university email address.</p>
      </div>

      {variant === "full" ? (
        <div>
          <label htmlFor={universityId} className="mb-1.5 block text-sm font-medium text-foreground">
            University
          </label>
          <input
            id={universityId}
            name="university"
            type="text"
            required
            minLength={2}
            maxLength={180}
            autoComplete="organization"
            placeholder="University of Ibadan"
            className={inputBase}
          />
        </div>
      ) : null}

      {variant === "full" ? (
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          Join the waitlist
        </button>
      ) : null}
    </form>
  )
}
