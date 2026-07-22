import type { Metadata } from "next"
import { CompaniesBrief } from "@/src/components/companies/companies-brief"
import { CompaniesComparison } from "@/src/components/companies/companies-comparison"
import { CompaniesHero } from "@/src/components/companies/companies-hero"
import { CompaniesHowItWorks } from "@/src/components/companies/companies-how-it-works"
import { CompaniesPanel } from "@/src/components/companies/companies-panel"
import { CompaniesPricing } from "@/src/components/companies/companies-pricing"
import { CompaniesTrust } from "@/src/components/companies/companies-trust"
import { SiteFooter } from "@/src/components/site-footer"
import { SiteNav } from "@/src/components/site-nav"

export const metadata: Metadata = {
  title: "Market research in Nigeria for Gen Z brands",
  description:
    "Run AI-moderated market research with verified Nigerian university students. Get qualitative Gen Z insight, verbatim quotes, and demographic cuts in 48 hours.",
  alternates: { canonical: "/companies" },
  openGraph: {
    type: "website",
    url: "/companies",
    title: "Market research in Nigeria for Gen Z brands | Sóró",
    description: "Verified Nigerian university student insight, delivered in 48 hours.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sóró — Nigerian Gen Z market research" }],
  },
}

export default function CompaniesPage() {
  return (
    <main className="min-h-dvh">
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
