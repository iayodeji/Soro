import Link from "next/link"
import { ChatDemo } from "@/src/components/chat-demo"
import { WaitlistForm } from "@/src/components/waitlist-form"

export function StudentsHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
            Now onboarding verified Nigerian students
          </span>
          <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            Get paid to share what you actually think.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Sóró pays Nigerian university students to answer brand questions through a quick AI conversation — not
            another boring survey form. Real talk, real naira.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/companies"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90"
            >
              For companies
            </Link>
            <a
              href="#waitlist"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline"
            >
              I&apos;m a student
            </a>
          </div>

          <div
            id="waitlist"
            className="mt-7 max-w-md scroll-mt-24 rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur"
          >
            <WaitlistForm variant="full" />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="h-7 w-7 rounded-full border-2 border-background bg-terracotta" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-ochre" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-sage" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">500+ students</span> already on the waitlist
            </p>
          </div>
        </div>

        <div className="lg:pl-6">
          <ChatDemo />
        </div>
      </div>
    </section>
  )
}

export default StudentsHero