import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { SiteNav } from "@/src/components/site-nav"
import { CompaniesHero } from "@/src/components/companies/companies-hero"

export const metadata: Metadata = {
  title: "Sóró for companies — Verified African youth insight in 48 hours",
  description:
    "Submit a research brief and get AI-moderated interviews with verified Nigerian university students. Structured insights, verbatim quotes, and demographic breakdowns delivered in 48 hours.",
}

// 1. HIGH PRIORITY BELOW THE FOLD (Hydrates as soon as Hero finishes painting)
const CompaniesHowItWorks = dynamic(
  () => import("@/src/components/companies/companies-how-it-works").then((mod) => mod.CompaniesHowItWorks),
  { ssr: true }
)

const CompaniesPanel = dynamic(
  () => import("@/src/components/companies/companies-panel").then((mod) => mod.CompaniesPanel),
  { ssr: true }
)

// 2. HEAVY INTERACTIVE MODULES (Deferred to offload the initial main thread parse)
const CompaniesComparison = dynamic(
  () => import("@/src/components/companies/companies-comparison").then((mod) => mod.CompaniesComparison),
  { ssr: true, loading: () => <div className="min-h-[400px]" /> } // Placeholder boxes prevent layout shifts
)

const CompaniesPricing = dynamic(
  () => import("@/src/components/companies/companies-pricing").then((mod) => mod.CompaniesPricing),
  { ssr: true, loading: () => <div className="min-h-[500px]" /> }
)

// 3. BOTTOM-OF-PAGE UTILITIES
const CompaniesBrief = dynamic(
  () => import("@/src/components/companies/companies-brief").then((mod) => mod.CompaniesBrief),
  { ssr: true }
)

const CompaniesTrust = dynamic(
  () => import("@/src/components/companies/companies-trust").then((mod) => mod.CompaniesTrust),
  { ssr: true }
)

const SiteFooter = dynamic(
  () => import("@/src/components/site-footer").then((mod) => mod.SiteFooter),
  { ssr: true }
)

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* ⚡ CRITICAL ABOVE-THE-FOLD: Standard imports keep initial rendering instantaneous */}
      <SiteNav 
        crossLinkLabel="For students" 
        crossLinkHref="/" 
        ctaLabel="Submit a brief" 
        ctaTargetId="brief" 
      />
      <CompaniesHero />

      {/* 🔄 PROGRESSIVE HYDRATION: Split into separate bundles to reduce primary Long Tasks */}
      <CompaniesHowItWorks />
      <CompaniesPanel />
      <CompaniesComparison />
      <CompaniesPricing />
      <CompaniesBrief />
      <CompaniesTrust />

      <SiteFooter 
        crossLinkLabel="For students" 
        crossLinkHref="/" 
        contactEmail="hello@soro.africa" 
      />
    </main>
  )
}