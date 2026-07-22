import type { Metadata } from "next"
import { JsonLd } from "@/src/components/seo/json-ld"
import { SiteFooter } from "@/src/components/site-footer"
import { SiteNav } from "@/src/components/site-nav"

export const metadata: Metadata = {
  title: "Brand research in Nigeria",
  description:
    "Test brand positioning, campaigns, concepts, and trust signals with verified Nigerian university students through AI-moderated conversations.",
  alternates: { canonical: "/brand-research-nigeria" },
  openGraph: {
    type: "website",
    url: "/brand-research-nigeria",
    title: "Brand research in Nigeria | Sóró",
    description: "Build a Nigerian Gen Z brand with evidence, not assumptions.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sóró — Nigerian Gen Z market research" }],
  },
}

const QUESTIONS = [
  ["Positioning", "Does the value proposition make sense in the language your audience actually uses?"],
  ["Campaign creative", "Which idea earns attention, feels believable, and gives people something worth repeating?"],
  ["Brand trust", "What makes customers feel safe choosing you—and what makes them hesitate?"],
  ["Concept and naming", "Before you invest, test whether a new offer, name, or message is clear and culturally right."],
]

const FAQS = [
  {
    question: "What is brand research?",
    answer:
      "Brand research helps a team understand how an audience perceives its brand, message, creative work, and promise. It is used to make positioning, campaign, and product decisions with evidence rather than internal opinion.",
  },
  {
    question: "Can Sóró test a brand campaign before launch?",
    answer:
      "Yes. Teams can use a Sóró brief to explore how verified Nigerian university students interpret a message, concept, creative direction, or value proposition before launch.",
  },
]

export default function BrandResearchNigeriaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return (
    <main className="min-h-dvh">
      <JsonLd data={jsonLd} />
      <SiteNav crossLinkLabel="For students" crossLinkHref="/" ctaLabel="Submit a brief" ctaHref="/companies#brief" />

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">Brand research in Nigeria</p>
        <h1 className="mt-4 max-w-4xl text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
          Build a brand Nigerian Gen Z can believe in.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          The work is not done when the strategy deck is approved. Sóró gives you a direct line to verified Nigerian
          university students, so you can pressure-test the promise before the market does.
        </p>
        <a href="/companies#brief" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
          Test your brand idea
        </a>
      </section>

      <section className="border-y border-border bg-card/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="max-w-2xl text-balance font-heading text-4xl font-bold text-foreground">The brand questions worth asking before launch.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {QUESTIONS.map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-border bg-background p-6 sm:p-7">
                <h3 className="font-heading text-2xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-terracotta">From reaction to direction</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-foreground">Don&apos;t mistake a like for understanding.</h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              Surveys can tell you what a respondent selected. Conversational research gives people space to explain
              what they mean, what they compare you with, and what would change their mind.
            </p>
            <p>
              Sóró turns those conversations into a clear synthesis with verbatim quotes and demographic cuts, so a
              creative, product, or growth team can act on the insight while there is still time to change the work.
            </p>
            <a href="/market-research-nigeria" className="inline-flex font-semibold text-terracotta underline underline-offset-4 hover:text-foreground">
              Explore Sóró&apos;s market-research approach
            </a>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-balance font-heading text-4xl font-bold text-background">Your audience can tell the difference between a borrowed idea and a real one.</h2>
          <p className="mt-5 leading-relaxed text-background/75">
            Nigeria&apos;s young consumers are not one uniform audience. A useful brand study respects the setting, the
            category, and the specific decision your team needs to make. Sóró is designed to get that specific.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-4xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {FAQS.map((faq) => (
            <article key={faq.question} className="py-6">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter primaryCtaLabel="Submit a brief" primaryCtaHref="/companies#brief" crossLinkLabel="For students" crossLinkHref="/" contactEmail="hello@soro.africa" />
    </main>
  )
}
