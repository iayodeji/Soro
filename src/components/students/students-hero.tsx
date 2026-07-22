import { ChatDemo } from "@/src/components/chat-demo"
import { WaitlistForm } from "@/src/components/waitlist-form"

export function StudentsHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-sage" aria-hidden="true" />
            Now onboarding verified Nigerian students
          </p>

          <h1 className="mt-5 max-w-xl text-balance font-heading text-5xl font-bold leading-[0.98] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
            Get paid to share what you actually think.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sóró pays Nigerian university students to answer brand questions through a quick AI conversation — not another
            boring survey form. Real talk, real naira.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="/companies"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              For companies
            </a>
            <a
              href="#waitlist"
              className="inline-flex min-h-12 items-center text-sm font-semibold text-foreground underline decoration-terracotta/50 underline-offset-4 transition-colors hover:text-terracotta"
            >
              I’m a student
            </a>
          </div>

          <div id="waitlist" className="mt-8 max-w-md scroll-mt-24 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <p className="mb-4 text-sm font-semibold text-foreground">Save your place on the panel</p>
            <WaitlistForm idPrefix="hero-waitlist" />
          </div>

          <p className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex -space-x-2" aria-hidden="true">
              <span className="h-7 w-7 rounded-full border-2 border-background bg-terracotta" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-ochre" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-sage" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-foreground" />
            </span>
            Built for real students, not survey bots.
          </p>
        </div>

        <div className="lg:pl-4">
          <ChatDemo />
        </div>
      </div>
    </section>
  )
}

export default StudentsHero
