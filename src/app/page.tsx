import { SiteFooter } from "@/src/components/site-footer"
import { SiteNav } from "@/src/components/site-nav"
import { StudentsEarnings } from "@/src/components/students/students-earnings"
import { StudentsFinalCta } from "@/src/components/students/students-final-cta"
import { StudentsHero } from "@/src/components/students/students-hero"
import { StudentsHowItWorks } from "@/src/components/students/students-how-it-works"
import { StudentsTrust } from "@/src/components/students/students-trust"

export default function StudentsPage() {
  return (
    <main className="min-h-dvh">
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
