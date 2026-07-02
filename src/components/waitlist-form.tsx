"use client"

import { useState } from "react"
import InviteCTA from "./invite-cta"
import { createClient } from "@/src/lib/supabase/client"
import { UNIVERSITY_STATE_GROUPS, UNIVERSITIES } from "@/src/lib/soro-data"

// component-level state (defined inside the component below)

function isValidEmail(email: string): boolean {
  const match = email.match(/^[^\s@]+@([^\s@]+)$/)
  if (!match) return false
  const domain = match[1].toLowerCase()

  return /\.edu(\.ng)?$/i.test(domain)
}

// Note: handleSendCode is implemented inside the component so it can access
// component state (setError, setStep) and create a Supabase client.

type Variant = "full" | "email"

export function WaitlistForm({ variant = "full" }: { variant?: Variant }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [university, setUniversity] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [done, setDone] = useState(false)
  const [alreadyRegisteredAt, setAlreadyRegisteredAt] = useState<string | null>(null)

  function validate() {
    const next: Record<string, string> = {}
    if (variant === "full" && name.trim().length < 2) {
      next.name = "Please enter your full name."
    }
    if (!email.trim()) {
      next.email = "Email is required."
    } else if (!isValidEmail(email)) {
      next.email = "Enter a valid university email."
    }
    if (variant === "full" && !university) {
      next.university = "Please select your university."
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitError("")
    if (!validate()) return

    setLoading(true)
    try {
      const supabase = createClient()
      const normalizedEmail = email.trim().toLowerCase()
      

      // quick server-side existence check for better UX (single-row, privacy-preserving)
      const { data: existing, error: queryError } = await supabase
        .from("waitlist_students")
        .select("id, created_at")
        .eq("email", normalizedEmail)
        .limit(1)
        .maybeSingle()

      if (queryError) {
        setSubmitError("Could not verify existing registration. Please try again.")
        setLoading(false)
        return
      }

      if (existing) {
        
        // already registered — prefer showing their registration timestamp when available,
        // otherwise fall back to the generic success UI so the user always gets feedback.
        if (existing.created_at) {
          setAlreadyRegisteredAt(existing.created_at)
        } else {
          setDone(true)
        }
        setLoading(false)
        return
      }

      const { error: insertError } = await supabase.from("waitlist_students").insert({
        name: variant === "full" ? name.trim() : normalizedEmail.split("@")[0],
        email: normalizedEmail,
        university: variant === "full" ? university : "Unknown",
      })

      if (insertError) {
        const msg = String(insertError.message || "")
        // Treat unique-constraint violations and HTTP 409 as already-registered (race condition fallback)
        const isDuplicate =
          insertError.code === "23505" || insertError.status === 409 || /unique|duplicate|409/i.test(msg)
        if (isDuplicate) {
          // duplicate — show success UI
          setDone(true)
        } else {
          throw insertError
        }
      } else {
        setDone(true)
      }
    } catch {
      setSubmitError("Something went wrong saving your spot. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (alreadyRegisteredAt) {
    const pretty = (() => {
      try {
        return new Date(alreadyRegisteredAt).toLocaleString()
      } catch {
        return alreadyRegisteredAt
      }
    })()

    return (
      <div className="soro-pop rounded-2xl border border-sage/30 bg-sage/10 p-6 text-center">
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-amber-600 text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M12 2v4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 12h-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">You&apos;re already on the list</h3>
        <p className="mt-1 text-sm text-muted-foreground">We received your request on {pretty}. Check your inbox for confirmation.</p>
        <div className="mt-4">
          <InviteCTA email={email} />
        </div>
      </div>
    )
  }

  if (done) {
    return (
      <div className="soro-pop rounded-2xl border border-sage/30 bg-sage/10 p-6 text-center">
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sage text-sage-foreground">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-xl font-bold text-foreground">You&apos;re on the list</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          We&apos;ll email you the moment we launch, keep an eye on your inbox.
        </p>
        <div className="mt-4">
          <InviteCTA email={email} />
        </div>
      </div>
    )
  }

  const inputBase =
    "w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {variant === "full" ? (
        <div>
          <label htmlFor="wl-name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="wl-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Chidinma Okafor"
            className={`${inputBase} ${errors.name ? "border-terracotta" : "border-input"}`}
            aria-invalid={!!errors.name}
          />
          {errors.name ? <p className="mt-1 text-xs font-medium text-terracotta">{errors.name}</p> : null}
        </div>
      ) : null}

      <div>
        {variant === "full" ? (
          <label htmlFor="wl-email" className="mb-1.5 block text-sm font-medium text-foreground">
            University email
          </label>
        ) : (
          <label htmlFor="wl-email" className="sr-only">
            University email
          </label>
        )}
        <div className={variant === "email" ? "flex flex-col gap-3 sm:flex-row" : ""}>
          <div className="flex-1">
            <input
              id="wl-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@student.ui.edu.ng"
              className={`${inputBase} ${errors.email ? "border-terracotta" : "border-input"}`}
              aria-invalid={!!errors.email}
            />
            {errors.email ? <p className="mt-1 text-xs font-medium text-terracotta">{errors.email}</p> : null}
          </div>
          {variant === "email" ? (
            <button
              type="submit"
              disabled={loading}
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 disabled:opacity-60"
            >
              {loading ? "Joining…" : "Join waitlist"}
            </button>
          ) : null}
        </div>
      </div>

      {variant === "full" ? (
        <div>
          <label htmlFor="wl-uni" className="mb-1.5 block text-sm font-medium text-foreground">
            University
          </label>
          <select
            id="wl-uni"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            className={`${inputBase} ${errors.university ? "border-terracotta" : "border-input"} ${university ? "" : "text-muted-foreground"}`}
            aria-invalid={!!errors.university}
          >
            <option value="">Select your university</option>
            {UNIVERSITY_STATE_GROUPS.map((group) => (
              <optgroup key={group.state} label={group.state}>
                {group.universities.map((u) => (
                  <option key={u.value} value={u.value} className="text-foreground">
                    {u.label}
                  </option>
                ))}
              </optgroup>
            ))}
            <optgroup label="Other">
              {UNIVERSITIES.filter((universityOption) => universityOption.value === "Other").map((u) => (
                <option key={u.value} value={u.value} className="text-foreground">
                  {u.label}
                </option>
              ))}
            </optgroup>
          </select>
          {errors.university ? (
            <p className="mt-1 text-xs font-medium text-terracotta">{errors.university}</p>
          ) : null}
        </div>
      ) : null}

      {variant === "full" ? (
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 disabled:opacity-60"
        >
          {loading ? "Saving your spot…" : "Join the waitlist"}
        </button>
      ) : null}

      {submitError ? <p className="text-sm font-medium text-terracotta">{submitError}</p> : null}
    </form>
  )
}
