"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { WaitlistForm } from "@/src/components/waitlist-form"

export function StudentsFinalCta() {
  return (
    <section id="waitlist-bottom" className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden">
      {/* Subtle brand glow behind the final CTA */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/20 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-5xl">
            Your opinion is worth money. <span className="text-terracotta">Start earning.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-muted-foreground sm:text-lg">
            Drop your university email and we&apos;ll save your spot. Brands are already lining up their first briefs.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-card/60 p-5 text-left backdrop-blur-md shadow-xl"
        >
          <WaitlistForm variant="full" />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Building a brand instead?{" "}
          <Link href="/companies" className="font-semibold text-terracotta underline-offset-4 hover:underline">
            See Sóró for companies
          </Link>
        </motion.p>
      </div>
    </section>
  )
}

export default StudentsFinalCta
