import { WaitlistForm } from "@/src/components/waitlist-form"

export function StudentsFinalCta() {
  return (
    <section id="waitlist-bottom" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 text-center shadow-sm sm:p-10">
        <h2 className="text-balance font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Your opinion is worth money. <span className="text-terracotta">Start earning.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-pretty text-muted-foreground sm:text-lg">
          Drop your university email and we’ll save your spot. Brands are already lining up their first briefs.
        </p>

        <div className="mx-auto mt-9 max-w-md rounded-2xl border border-border bg-background p-5 text-left sm:p-6">
          <p className="mb-4 text-sm font-semibold text-foreground">Join the student panel</p>
          <WaitlistForm idPrefix="footer-waitlist" />
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Building a brand instead?{" "}
          <a href="/companies" className="font-semibold text-terracotta underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta">
            See Sóró for companies
          </a>
        </p>
      </div>
    </section>
  )
}

export default StudentsFinalCta
