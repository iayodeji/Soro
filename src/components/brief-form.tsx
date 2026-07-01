"use client"

import { useState } from "react"
import { createClient } from "@/src/lib/supabase/client"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const COUNTS = ["50", "100", "200", "Custom"]
const TIMELINES = ["ASAP", "Within a week", "Flexible"]

type FormState = {
  company: string
  contact_name: string
  email: string
  title: string
  question: string
  target_profile: string
  count: string
  timeline: string
}

const EMPTY: FormState = {
  company: "",
  contact_name: "",
  email: "",
  title: "",
  question: "",
  target_profile: "",
  count: "100",
  timeline: "Within a week",
}

export function BriefForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [done, setDone] = useState(false)

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function validate() {
    const next: Record<string, string> = {}
    if (form.company.trim().length < 2) next.company = "Company name is required."
    if (form.contact_name.trim().length < 2) next.contact_name = "Your name is required."
    if (!form.email.trim()) next.email = "Work email is required."
    else if (!isValidEmail(form.email)) next.email = "Enter a valid work email."
    if (form.question.trim().length < 10) next.question = "Tell us a bit more about your research question."
    if (form.target_profile.trim().length < 5) next.target_profile = "Describe your target respondents."
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
      const { error } = await supabase.from("brief_inquiries").insert({
        company: form.company.trim(),
        contact_name: form.contact_name.trim(),
        email: form.email.trim().toLowerCase(),
        title: form.title.trim() || null,
        question: form.question.trim(),
        target_profile: form.target_profile.trim(),
        count: form.count,
        timeline: form.timeline,
      })
      if (error) throw error
      setDone(true)
    } catch {
      setSubmitError("We couldn't submit your brief just now. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="soro-pop rounded-2xl border border-sage/30 bg-sage/10 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sage text-sage-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground">Brief received</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks, {form.contact_name.split(" ")[0] || "there"}. A Sóró research lead will email you within one business
          day to confirm scope, pricing, and your upfront payment link. Once that&apos;s settled, we deploy your
          interview and deliver insights within 48 hours.
        </p>
      </div>
    )
  }

  const inputBase =
    "w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"

  function Err({ name }: { name: string }) {
    return errors[name] ? <p className="mt-1 text-xs font-medium text-terracotta">{errors[name]}</p> : null
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-company" className="mb-1.5 block text-sm font-medium text-foreground">
            Company name
          </label>
          <input
            id="bf-company"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Acme Fintech"
            className={`${inputBase} ${errors.company ? "border-terracotta" : "border-input"}`}
          />
          <Err name="company" />
        </div>
        <div>
          <label htmlFor="bf-contact" className="mb-1.5 block text-sm font-medium text-foreground">
            Contact name
          </label>
          <input
            id="bf-contact"
            value={form.contact_name}
            onChange={(e) => update("contact_name", e.target.value)}
            placeholder="Ada Obi"
            className={`${inputBase} ${errors.contact_name ? "border-terracotta" : "border-input"}`}
          />
          <Err name="contact_name" />
        </div>
        <div>
          <label htmlFor="bf-email" className="mb-1.5 block text-sm font-medium text-foreground">
            Work email
          </label>
          <input
            id="bf-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="ada@acme.com"
            className={`${inputBase} ${errors.email ? "border-terracotta" : "border-input"}`}
          />
          <Err name="email" />
        </div>
        <div>
          <label htmlFor="bf-title" className="mb-1.5 block text-sm font-medium text-foreground">
            Job title <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="bf-title"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Head of Insights"
            className={`${inputBase} border-input`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="bf-question" className="mb-1.5 block text-sm font-medium text-foreground">
          Research question
        </label>
        <textarea
          id="bf-question"
          rows={3}
          value={form.question}
          onChange={(e) => update("question", e.target.value)}
          placeholder="What we want to learn — e.g. why students abandon our wallet during onboarding."
          className={`${inputBase} resize-y ${errors.question ? "border-terracotta" : "border-input"}`}
        />
        <Err name="question" />
      </div>

      <div>
        <label htmlFor="bf-target" className="mb-1.5 block text-sm font-medium text-foreground">
          Target respondent profile
        </label>
        <textarea
          id="bf-target"
          rows={2}
          value={form.target_profile}
          onChange={(e) => update("target_profile", e.target.value)}
          placeholder="e.g. female students, Ibadan, 18–22, fintech users"
          className={`${inputBase} resize-y ${errors.target_profile ? "border-terracotta" : "border-input"}`}
        />
        <Err name="target_profile" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bf-count" className="mb-1.5 block text-sm font-medium text-foreground">
            Desired respondent count
          </label>
          <select
            id="bf-count"
            value={form.count}
            onChange={(e) => update("count", e.target.value)}
            className={`${inputBase} border-input`}
          >
            {COUNTS.map((c) => (
              <option key={c} value={c}>
                {c === "Custom" ? "Custom" : `${c} respondents`}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="bf-timeline" className="mb-1.5 block text-sm font-medium text-foreground">
            Timeline
          </label>
          <select
            id="bf-timeline"
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={`${inputBase} border-input`}
          >
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-terracotta px-6 py-3.5 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 disabled:opacity-60"
      >
        {loading ? "Submitting brief…" : "Submit a brief"}
      </button>

      {submitError ? <p className="text-sm font-medium text-terracotta">{submitError}</p> : null}
    </form>
  )
}
