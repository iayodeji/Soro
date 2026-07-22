"use server"

import { createClient } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

function getValue(formData: FormData, key: string, maxLength: number) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

function getSupabase() {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.SUPABASE_ANON_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error("Supabase is not configured")
  }

  return createClient(url, anonKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  })
}

function isUniversityEmail(email: string) {
  const match = email.match(/^[^\s@]+@([^\s@]+)$/)
  return !!match && /\.edu(\.ng)?$/i.test(match[1])
}

function isWorkEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function joinWaitlist(formData: FormData) {
  const name = getValue(formData, "name", 120)
  const email = getValue(formData, "email", 254).toLowerCase()
  const university = getValue(formData, "university", 180)
  const honeypot = getValue(formData, "company_website", 200)

  // Quietly accept obvious bot submissions without writing them to the panel.
  if (honeypot) {
    redirect("/welcome")
  }

  if (name.length < 2 || university.length < 2 || !isUniversityEmail(email)) {
    redirect("/welcome/error")
  }

  let outcome: "success" | "error" = "error"

  try {
    const supabase = getSupabase()
    const { data: existing, error: queryError } = await supabase
      .from("waitlist_students")
      .select("id")
      .eq("email", email)
      .limit(1)
      .maybeSingle()

    if (queryError) {
      throw queryError
    }

    if (existing) {
      outcome = "success"
    } else {
      const { error: insertError } = await supabase.from("waitlist_students").insert({
        name,
        email,
        university,
      })

      if (insertError && insertError.code !== "23505") {
        throw insertError
      }

      outcome = "success"
    }
  } catch {
    outcome = "error"
  }

  redirect(outcome === "success" ? "/welcome" : "/welcome/error")
}

export async function submitBrief(formData: FormData) {
  const company = getValue(formData, "company", 160)
  const contactName = getValue(formData, "contact_name", 120)
  const email = getValue(formData, "email", 254).toLowerCase()
  const title = getValue(formData, "title", 160)
  const question = getValue(formData, "question", 4000)
  const targetProfile = getValue(formData, "target_profile", 2000)
  const count = getValue(formData, "count", 32)
  const timeline = getValue(formData, "timeline", 64)
  const honeypot = getValue(formData, "company_website", 200)

  if (honeypot) {
    redirect("/companies/brief-received")
  }

  if (
    company.length < 2 ||
    contactName.length < 2 ||
    !isWorkEmail(email) ||
    question.length < 10 ||
    targetProfile.length < 5
  ) {
    redirect("/companies/brief-received/error")
  }

  let outcome: "success" | "error" = "error"

  try {
    const supabase = getSupabase()
    const { error } = await supabase.from("brief_inquiries").insert({
      company,
      contact_name: contactName,
      email,
      title: title || null,
      question,
      target_profile: targetProfile,
      count,
      timeline,
    })

    if (error) {
      throw error
    }

    outcome = "success"
  } catch {
    outcome = "error"
  }

  redirect(outcome === "success" ? "/companies/brief-received" : "/companies/brief-received/error")
}
