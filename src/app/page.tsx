import { SiteFooter } from "@/src/components/site-footer"
import { SiteNav } from "@/src/components/site-nav"
import { JsonLd } from "@/src/components/seo/json-ld"
import { StudentsEarnings } from "@/src/components/students/students-earnings"
import { StudentsFinalCta } from "@/src/components/students/students-final-cta"
import { StudentsHero } from "@/src/components/students/students-hero"
import { StudentsHowItWorks } from "@/src/components/students/students-how-it-works"
import { StudentsTrust } from "@/src/components/students/students-trust"

export default function StudentsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://getsoro.app/#organization",
      name: "Sóró",
      alternateName: "Soro",
      url: "https://getsoro.app",
      logo: "https://getsoro.app/soro-logo.webp",
      description: "A verified Nigerian university student research panel for fast, qualitative Gen Z insight.",
      email: "hello@soro.africa",
      areaServed: { "@type": "Country", name: "Nigeria" },
      knowsAbout: [
        "Nigerian Gen Z consumer behaviour",
        "Nigerian youth market research",
        "Brand research in Nigeria",
        "Consumer insights in Nigeria",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://getsoro.app/#website",
      name: "Sóró",
      url: "https://getsoro.app",
      inLanguage: "en-NG",
      publisher: { "@id": "https://getsoro.app/#organization" },
      about: [
        "Nigerian Gen Z data and behaviour",
        "Nigerian consumer insights",
        "Brand and market research in Nigeria",
      ],
    },
  ]

  return (
    <main className="min-h-dvh">
      <JsonLd data={jsonLd} />
      <SiteNav
        crossLinkLabel="Join waitlist"
        crossLinkHref="/#waitlist"
        ctaLabel="For companies"
        ctaHref="/companies"
      />
      <StudentsHero />
      <StudentsHowItWorks />
      <StudentsEarnings />
      <StudentsTrust />
      <StudentsFinalCta />
      <SiteFooter
        primaryCtaLabel="For companies"
        primaryCtaHref="/companies"
        crossLinkLabel="Join waitlist"
        crossLinkHref="/#waitlist-bottom"
      />
    </main>
  )
}
