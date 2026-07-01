import Link from "next/link"
import { WaitlistForm } from "@/src/components/waitlist-form"

export function StudentsFinalCta() {
  return (
    <section className="bg-foreground py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-balance font-heading text-3xl font-bold text-background sm:text-4xl">
          Your opinion is worth money. Start earning.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-pretty text-background/70">
          Drop your university email and we&apos;ll save your spot. Brands are already lining up their first briefs.
        </p>
        <div className="mx-auto mt-7 max-w-md rounded-2xl bg-background/95 p-4 text-left">
          <WaitlistForm variant="email" />
        </div>
        <p className="mt-5 text-sm text-background/70">
          Building a brand instead?{" "}
          <Link href="/companies" className="font-semibold text-ochre underline-offset-4 hover:underline">
            See Sóró for companies
          </Link>
        </p>
      </div>
    </section>
  )
}

export default StudentsFinalCta