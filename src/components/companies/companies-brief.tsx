import { BriefForm } from "@/src/components/brief-form"

export function CompaniesBrief() {
  return (
    <section id="brief" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <div className="text-center">
        <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Submit your first brief
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Tell us what you want to learn and who you want to hear from. We&apos;ll reply within one business day.
        </p>
      </div>
      <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <BriefForm />
      </div>
    </section>
  )
}

export default CompaniesBrief