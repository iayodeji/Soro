import dynamic from "next/dynamic"
import { SiteNav } from "@/src/components/site-nav"
import { StudentsHero } from "@/src/components/students/students-hero"

// 1. HIGH PRIORITY BELOW THE FOLD (Load when browser finishes primary paint)
const StudentsHowItWorks = dynamic(
  () => import("@/src/components/students/students-how-it-works").then((mod) => mod.StudentsHowItWorks),
  { ssr: true }
)

const ActivityTicker = dynamic(
  () => import("@/src/components/activity-ticker").then((mod) => mod.ActivityTicker),
  { ssr: true }
)

// 2. LOWER PRIORITY DEEP BELOW THE FOLD (Defer parsing until needed)
const StudentsEarnings = dynamic(
  () => import("@/src/components/students/students-earnings").then((mod) => mod.StudentsEarnings),
  { ssr: true, loading: () => <div className="min-h-[400px]" /> } // Placeholder prevents layout shifts
)

const StudentsTrust = dynamic(
  () => import("@/src/components/students/students-trust").then((mod) => mod.StudentsTrust),
  { ssr: true }
)

const StudentsFinalCta = dynamic(
  () => import("@/src/components/students/students-final-cta").then((mod) => mod.StudentsFinalCta),
  { ssr: true }
)

const SiteFooter = dynamic(
  () => import("@/src/components/site-footer").then((mod) => mod.SiteFooter),
  { ssr: true }
)

export default function StudentsPage() {
  return (
    <main className="min-h-screen">
      {/* Critical Path: Sent instantly via SSR, parsed first by the main thread */}
      <SiteNav
        crossLinkLabel="Join waitlist"
        crossLinkHref="/#waitlist"
        ctaLabel="For companies"
        ctaHref="/companies"
      />
      <StudentsHero />

      {/* Secondary Path: Progressively hydrated components */}
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