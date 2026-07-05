"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { ChatDemo } from "@/src/components/chat-demo"
import { WaitlistForm } from "@/src/components/waitlist-form"

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

export function StudentsHero() {
  const FADE_UP_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 pt-12 sm:px-6 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.span
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <div className="flex h-2 items-end gap-[1px]" aria-hidden="true">
              <span className="soro-waveform-bar w-[1.5px] bg-sage" style={{ animationDelay: "0s" }} />
              <span className="soro-waveform-bar w-[1.5px] bg-sage" style={{ animationDelay: "0.2s" }} />
              <span className="soro-waveform-bar w-[1.5px] bg-sage" style={{ animationDelay: "0.1s" }} />
            </div>
            Now onboarding verified Nigerian students
          </motion.span>
          <motion.h1
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            Get paid to share what you actually think.
          </motion.h1>
          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Sóró pays Nigerian university students to answer brand questions through a quick AI conversation — not
            another boring survey form. Real talk, real naira.
          </motion.p>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/companies"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-terracotta-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/20"
            >
              <span className="relative z-10">For companies</span>
              <div className="absolute inset-0 z-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <a
              href="#waitlist"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-terracotta hover:underline"
            >
              I&apos;m a student
            </a>
          </motion.div>

          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            id="waitlist"
            className="mt-7 max-w-md scroll-mt-24 rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur-sm"
          >
            <WaitlistForm variant="full" />
          </motion.div>

          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="h-7 w-7 rounded-full border-2 border-background bg-terracotta" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-ochre" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-sage" />
              <span className="h-7 w-7 rounded-full border-2 border-background bg-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground"> students</span> already on the waitlist
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: EASE_OUT_EXPO }}
          className="lg:pl-6"
        >
          <ChatDemo />
        </motion.div>
      </div>
    </section>
  )
}

export default StudentsHero
