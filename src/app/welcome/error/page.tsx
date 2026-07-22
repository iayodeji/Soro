import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Try joining Sóró again",
  robots: { index: false, follow: false },
}

export default function WelcomeErrorPage() {
  return (
    <main className="flex min-h-dvh items-center px-4 py-12 sm:px-6">
      <section className="mx-auto w-full max-w-xl rounded-3xl border border-border bg-card p-7 text-center shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">Sóró student panel</p>
        <h1 className="mt-3 text-balance font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl">
          Let’s try that again.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Please use an official university email and make sure every required field is filled in before submitting.
        </p>
        <a
          href="/#waitlist"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90"
        >
          Return to the form
        </a>
      </section>
    </main>
  )
}
