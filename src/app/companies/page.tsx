import type { Metadata } from "next"
import { SiteNav } from "@/src/components/site-nav"
import { SiteFooter } from "@/src/components/site-footer"
import { CompaniesHero } from "@/src/components/companies/companies-hero"
import { CompaniesHowItWorks } from "@/src/components/companies/companies-how-it-works"
import { CompaniesPanel } from "@/src/components/companies/companies-panel"
import { CompaniesComparison } from "@/src/components/companies/companies-comparison"
import { CompaniesPricing } from "@/src/components/companies/companies-pricing"
import { CompaniesBrief } from "@/src/components/companies/companies-brief"
import { CompaniesTrust } from "@/src/components/companies/companies-trust"

export const metadata: Metadata = {
  title: "Sóró for companies — Verified African youth insight in 48 hours",
  description:
    "Submit a research brief and get AI-moderated interviews with verified Nigerian university students. Structured insights, verbatim quotes, and demographic breakdowns delivered in 48 hours.",
}

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav crossLinkLabel="For students" crossLinkHref="/" ctaLabel="Submit a brief" ctaTargetId="brief" />
      <CompaniesHero />
      <CompaniesHowItWorks />
      <CompaniesPanel />
      <CompaniesComparison />
      <CompaniesPricing />
      <CompaniesBrief />
      <CompaniesTrust />

      <SiteFooter crossLinkLabel="For students" crossLinkHref="/" contactEmail="hello@soro.africa" />
    </main>
  )
}
