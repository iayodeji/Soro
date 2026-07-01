"use client"

import { useState } from "react"
import { createClient } from "@/src/lib/supabase/client"
import { UNIVERSITIES } from "@/src/lib/soro-data"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

type Variant = "full" | "email"

export function WaitlistForm({ variant = "full" }: { variant?: Variant }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [university, setUniversity] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [done, setDone] = useState(false)

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
      const { error } = await supabase.from("waitlist_students").insert({
        name: variant === "full" ? name.trim() : email.split("@")[0],
        email: email.trim().toLowerCase(),
        university: variant === "full" ? university : "Unknown",
      })
      if (error) throw error
      setDone(true)
    } catch {
      setSubmitError("Something went wrong saving your spot. Please try again.")
    } finally {
      setLoading(false)
    }
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
          We&apos;ll email you the moment a brief matches your profile. Keep an eye on your inbox.
        </p>
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
            {UNIVERSITIES.map((u) => (
              <option key={u.value} value={u.value} className="text-foreground">
                {u.label}
              </option>
            ))}
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
