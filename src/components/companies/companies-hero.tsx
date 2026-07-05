"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

// B2B hooks that hit the nail on the head — pure utility, zero corporate fluff
const BRAND_HOOKS = [
  "Honest answers from verified Nigerian students. In 48 hours.",
  "Top brands don’t guess. They ask sóró.",
  "Unfiltered student context, packaged on startup time."
]

export function CompaniesHero() {
  const [hookIndex, setHookIndex] = useState(0)

  // Controlled, high-contrast cycle pace
  useEffect(() => {
    const timer = setInterval(() => {
      setHookIndex((prev) => (prev + 1) % BRAND_HOOKS.length)
    }, 4800)
    return () => clearInterval(timer)
  }, [])

  const FADE_UP_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
  }

  const TEXT_FLIP_VARIANTS: Variants = {
    enter: { opacity: 0, y: 24, filter: "blur(4px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
    exit: { opacity: 0, y: -24, filter: "blur(4px)", transition: { duration: 0.4, ease: [0.7, 0, 0.84, 0] } }
  }

  return (
    <section className="mx-auto max-w-5xl px-4 pb-12 pt-16 text-center sm:px-6 sm:pt-24">
      <motion.span 
        initial="hidden"
        animate="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-ochre" aria-hidden="true" />
        African youth insight, on startup time
      </motion.span>

      {/* Heavy Typography Container */}
      <div className="relative mx-auto mt-5 h-[120px] sm:h-[150px] lg:h-[180px] max-w-3xl overflow-hidden w-full">
        <AnimatePresence mode="wait">
          <motion.h1
            key={hookIndex}
            variants={TEXT_FLIP_VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-x-0 top-0 text-balance font-heading text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
          >
            {BRAND_HOOKS[hookIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.p 
        initial="hidden"
        animate="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        Sóró runs deep, AI-moderated interviews with university-verified panels. No biased survey checkboxes. Just structured intelligence, fast enough for the deployment decisions you&apos;re making this week.
      </motion.p>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
      >
        <a
          href="#brief"
          className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-terracotta-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/20 sm:w-auto"
        >
          <span className="relative z-10">Submit a brief</span>
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </a>
        <a
          href="#how"
          className="inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-muted sm:w-auto"
        >
          See how it works
        </a>
      </motion.div>
    </section>
  )
}

export default CompaniesHero
