import type { Metadata } from "next"
import { JsonLd } from "@/src/components/seo/json-ld"
import { SiteFooter } from "@/src/components/site-footer"
import { SiteNav } from "@/src/components/site-nav"

export const metadata: Metadata = {
  title: "Market research in Nigeria",
  description:
    "A faster way to hear from Nigerian Gen Z: AI-moderated research with verified university students, rich verbatims, and clear reporting in 48 hours.",
  alternates: { canonical: "/market-research-nigeria" },
  openGraph: {
    type: "website",
    url: "/market-research-nigeria",
    title: "Market research in Nigeria | Sóró",
    description: "A faster, more human way to understand Nigerian Gen Z.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sóró — Nigerian Gen Z market research" }],
  },
}

const FAQs = [
  {
    question: "What makes Sóró different from a traditional market research agency in Nigeria?",
    answer:
      "Sóró is purpose-built for fast qualitative research with verified Nigerian university students. Instead of a long fieldwork cycle, AI-moderated conversations surface follow-up questions and are delivered as a structured report within 48 hours.",
  },
  {
    question: "Who can Sóró research?",
    answer:
      "Sóró currently specialises in verified Nigerian university students. This makes it suited to questions about Gen Z preferences, product concepts, campaigns, digital behaviour, and campus-adjacent consumer segments.",
  },
  {
    question: "What do I receive in a Sóró research report?",
    answer:
      "Each brief includes AI-moderated conversational interviews, a structured synthesis, verbatim quotes, demographic breakdowns, and CSV and PDF exports.",
  },
]

export default function MarketResearchNigeriaPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://getsoro.app/#organization",
      name: "Sóró",
      url: "https://getsoro.app",
      logo: "https://getsoro.app/soro-logo.webp",
      description: "A verified Nigerian university student research panel for fast, qualitative Gen Z insight.",
      email: "hello@soro.africa",
      areaServed: { "@type": "Country", name: "Nigeria" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Nigerian Gen Z market research",
      serviceType: "Qualitative market research",
      url: "https://getsoro.app/market-research-nigeria",
      provider: { "@id": "https://getsoro.app/#organization" },
      areaServed: { "@type": "Country", name: "Nigeria" },
      audience: { "@type": "Audience", audienceType: "Brands and product teams researching Nigerian Gen Z" },
      description: "AI-moderated interviews with verified Nigerian university students, with structured findings delivered in 48 hours.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  return (
    <main className="min-h-dvh">
      <JsonLd data={jsonLd} />
      <SiteNav crossLinkLabel="For students" crossLinkHref="/" ctaLabel="Submit a brief" ctaHref="/companies#brief" />

      <section className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">Nigerian consumer insight</p>
        <h1 className="mt-4 max-w-4xl text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
          Market research in Nigeria, built for the pace of now.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Sóró helps teams understand Nigerian Gen Z through deep conversations with verified university students—without
          waiting weeks for a traditional fieldwork cycle.
        </p>
        <a href="/companies#brief" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta">
          Start a research brief
        </a>
      </section>

      <section className="border-y border-border bg-card/60 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3">
          {[
            ["Verified voices", "Students are verified before joining the panel, so your research starts with a real human sample."],
            ["Conversation, not checkboxes", "AI-moderated interviews can ask the useful follow-up—not just collect a one-word answer."],
            ["Decision-ready in 48 hours", "Receive themes, verbatims, demographic cuts, and exports while the decision is still live."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-2xl border border-border bg-background p-6">
              <h2 className="font-heading text-2xl font-bold text-foreground">{title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-terracotta">What you can learn</p>
            <h2 className="mt-3 text-balance font-heading text-4xl font-bold text-foreground">Use research to make the next move with confidence.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Does this product concept make sense to students?",
              "Which message feels credible—and which one feels forced?",
              "What stops a customer from trying or trusting the brand?",
              "How does a campus audience actually discover and discuss the category?",
            ].map((question) => (
              <p key={question} className="rounded-xl border border-border bg-card p-5 text-foreground">{question}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-balance font-heading text-4xl font-bold text-background">Questions about Gen Z need a Nigeria-native answer.</h2>
          <p className="mt-5 leading-relaxed text-background/75">
            Nigeria&apos;s consumer market is young, mobile-first, and shaped by local trust, affordability, and culture.
            Research designed for another market will miss that context. Sóró keeps the work close to the people whose
            choices you are trying to understand.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-background/60">
            Context: KPMG reports that more than 60% of Nigerians are under 30 and that social platforms increasingly
            shape commerce and trust for younger consumers. {" "}
            <a className="underline underline-offset-4 hover:text-background" href="https://assets.kpmg.com/content/dam/kpmg/ng/pdf/2025/10/NAVIGATING%20THE%20EVOLVING%20LANDSCAPE%20%28LANDSCAPE%29.pdf">
              Read the 2025 Nigeria consumer trends report
            </a>.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="font-heading text-4xl font-bold text-foreground">Frequently asked questions</h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {FAQs.map((faq) => (
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
