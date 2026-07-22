import type { Metadata } from "next"
import { JsonLd } from "@/src/components/seo/json-ld"
import { SiteFooter } from "@/src/components/site-footer"
import { SiteNav } from "@/src/components/site-nav"

export const metadata: Metadata = {
  title: "Gen Z research in Nigeria",
  description:
    "Understand what Nigerian Gen Z actually thinks with AI-moderated conversations from verified university students—not generic surveys or second-hand assumptions.",
  alternates: { canonical: "/gen-z-research-nigeria" },
  openGraph: {
    type: "website",
    url: "/gen-z-research-nigeria",
    title: "Gen Z research in Nigeria | Sóró",
    description: "Hear directly from verified Nigerian university students.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sóró — Nigerian Gen Z market research" }],
  },
}

const USE_CASES = [
  ["Brand and campaign testing", "Find the words, references, and promises that feel real to a Nigerian Gen Z audience before the campaign goes live."],
  ["Product and concept testing", "Pressure-test new products, names, packaging, or features against the people you want to reach."],
  ["Customer understanding", "Uncover the trade-offs, trust signals, and day-to-day realities behind a behaviour—not just the behaviour itself."],
  ["Campus audience research", "Reach a university-verified panel when campuses are the right place to start learning."],
]

export default function GenZResearchNigeriaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gen Z research in Nigeria",
    url: "https://getsoro.app/gen-z-research-nigeria",
    description: "A guide to qualitative Gen Z research in Nigeria, from Sóró.",
    about: [
      { "@type": "Thing", name: "Generation Z" },
      { "@type": "Thing", name: "Market research in Nigeria" },
    ],
    publisher: { "@id": "https://getsoro.app/#organization" },
  }

  return (
    <main className="min-h-dvh">
      <JsonLd data={jsonLd} />
      <SiteNav crossLinkLabel="For students" crossLinkHref="/" ctaLabel="Submit a brief" ctaHref="/companies#brief" />

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">Nigerian Gen Z research</p>
        <h1 className="mt-4 max-w-4xl text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
          Don&apos;t guess what Nigerian Gen Z wants. Ask them properly.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Sóró connects brands with verified Nigerian university students for conversational research that goes beyond
          what a checkbox can tell you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/companies#brief" className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
            Research Nigerian Gen Z
          </a>
          <a href="/market-research-nigeria" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
            How Sóró works
          </a>
        </div>
      </section>

      <section className="bg-card/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold text-foreground">One generation. Many contexts. Better questions matter.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {USE_CASES.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-border bg-background p-6 sm:p-7">
                <h3 className="font-heading text-2xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-terracotta">A more useful research brief</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-foreground">Start with the decision, not a list of questions.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The strongest Gen Z research is specific about the choice it needs to unlock: launch or revise, which
              audience to prioritise, what to say, or what friction to remove. Sóró turns that decision into a
              conversational interview and reports back the patterns behind the answers.
            </p>
          </div>
          <ol className="space-y-5 border-l border-border pl-6">
            {[
              ["1", "Name the decision", "What will your team do differently after hearing from students?"],
              ["2", "Define the right voices", "Choose the student profile, campus context, and sample size that suit the question."],
              ["3", "Look for the why", "Use follow-ups and verbatim answers to understand the thinking behind the response."],
            ].map(([number, title, body]) => (
              <li key={number} className="relative">
                <span className="absolute -left-[2.1rem] flex h-8 w-8 items-center justify-center rounded-full bg-sage text-sm font-bold text-sage-foreground">{number}</span>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-foreground py-16 text-background sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-balance font-heading text-4xl font-bold">A student panel is powerful—when it&apos;s the right audience.</h2>
          <p className="mt-5 leading-relaxed text-background/75">
            Sóró is transparent about its panel: verified Nigerian university students. That makes it a strong source
            of insight for student and Gen Z questions, but it is not a stand-in for every Nigerian consumer. Good
            research starts by matching the audience to the decision.
          </p>
          <a href="/companies#brief" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background/90">
            Tell us what you need to learn
          </a>
        </div>
      </section>

      <SiteFooter primaryCtaLabel="Submit a brief" primaryCtaHref="/companies#brief" crossLinkLabel="For students" crossLinkHref="/" contactEmail="hello@soro.africa" />
    </main>
  )
}
