"use client"

import { motion } from "framer-motion"

const RATES = [
  { label: "per interview", value: "₦500-1,000", valueClass: "text-ochre" },
  { label: "Premium studies", value: "₦5,000", valueClass: "text-sage" },
  { label: "Cashout minimum", value: "₦1000", valueClass: "text-terracotta" },
]

const METHODS = ["OPay", "PalmPay", "Bank Transfer"]

export function StudentsEarnings() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground sm:text-4xl">What you can earn</h2>
          <p className="mt-3 text-muted-foreground">Clear rates, paid in cash. No points, no games.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {RATES.map((r) => (
            <motion.div
              key={r.label}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="rounded-2xl border border-border bg-card/30 p-6 text-center backdrop-blur-sm transition-all hover:bg-card/50"
            >
              <p className={`font-heading text-3xl font-extrabold ${r.valueClass}`}>{r.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <span className="text-sm font-medium text-foreground">Withdraw to:</span>
          {METHODS.map((m) => (
            <span key={m} className="rounded-full border border-border bg-card/40 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
              {m}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StudentsEarnings
