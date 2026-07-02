import { SiteNav } from "@/src/components/site-nav"
import { SiteFooter } from "@/src/components/site-footer"
import { ActivityTicker } from "@/src/components/activity-ticker"
import { StudentsHero } from "@/src/components/students/students-hero"
import { StudentsHowItWorks } from "@/src/components/students/students-how-it-works"
import { StudentsEarnings } from "@/src/components/students/students-earnings"
import { StudentsTrust } from "@/src/components/students/students-trust"
import { StudentsFinalCta } from "@/src/components/students/students-final-cta"

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNav crossLinkLabel="For companies" crossLinkHref="/companies" ctaLabel="Join waitlist" ctaTargetId="waitlist" />
      <StudentsHero />

      <ActivityTicker />
      <StudentsHowItWorks />
      <StudentsEarnings />
      <StudentsTrust />
      <StudentsFinalCta />

      <SiteFooter
        crossLinkLabel="For companies"
        crossLinkHref="/companies"
        ctaLabel="Join waitlist"
        ctaHref="#waitlist-bottom"
      />
    </main>
  )
}
