"use client"

import { useEffect, useRef, useState } from "react"
import { CHAT_SCRIPT } from "@/lib/soro-data"

type Bubble =
  | { kind: "ai"; text: string }
  | { kind: "user"; text: string }
  | { kind: "earn"; amount: number }

export function ChatDemo() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [typing, setTyping] = useState(false)
  const [wallet, setWallet] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    let cancelled = false
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms)
        timers.current.push(t)
      })

    async function run() {
      while (!cancelled) {
        setBubbles([])
        setWallet(0)
        await wait(600)

        for (const step of CHAT_SCRIPT) {
          if (cancelled) return
          setTyping(true)
          await wait(1400)
          if (cancelled) return
          setTyping(false)
          setBubbles((b) => [...b, { kind: "ai", text: step.question }])
          await wait(1100)
          if (cancelled) return
          setBubbles((b) => [...b, { kind: "user", text: step.answer }])
          await wait(700)
          if (cancelled) return
          setBubbles((b) => [...b, { kind: "earn", amount: step.earn }])
          setWallet((w) => w + step.earn)
          await wait(1600)
        }
        await wait(2200)
      }
    }

    run()
    return () => {
      cancelled = true
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [bubbles, typing])

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-border bg-card/80 shadow-sm backdrop-blur">
      {/* header with wallet */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta text-xs font-bold text-terracotta-foreground">
            S
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">Sóró Interview</p>
            <p className="text-xs text-muted-foreground">AI moderator · live</p>
          </div>
        </div>
        <div className="rounded-full border border-sage/30 bg-sage/10 px-3 py-1 text-right">
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Wallet</p>
          <p className="font-mono text-sm font-bold text-sage" aria-live="polite">
            ₦{wallet.toLocaleString()}
          </p>
        </div>
      </div>

      {/* messages */}
      <div ref={scrollRef} className="flex h-80 flex-col gap-3 overflow-y-auto px-4 py-4">
        {bubbles.map((b, i) => {
          if (b.kind === "ai") {
            return (
              <div key={i} className="soro-pop max-w-[85%] self-start rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5">
                <p className="text-sm leading-relaxed text-foreground">{b.text}</p>
              </div>
            )
          }
          if (b.kind === "user") {
            return (
              <div
                key={i}
                className="soro-pop max-w-[85%] self-end rounded-2xl rounded-tr-sm bg-terracotta px-4 py-2.5"
              >
                <p className="text-sm leading-relaxed text-terracotta-foreground">{b.text}</p>
              </div>
            )
          }
          return (
            <div key={i} className="soro-float self-end">
              <span className="inline-flex items-center gap-1 rounded-full bg-sage/15 px-3 py-1 text-xs font-semibold text-sage">
                +₦{b.amount} added to wallet
              </span>
            </div>
          )
        })}

        {typing ? (
          <div className="max-w-[60%] self-start rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
            <span className="flex items-center gap-1" aria-label="Sóró is typing">
              <span className="soro-dot h-2 w-2 rounded-full bg-muted-foreground" style={{ animationDelay: "0ms" }} />
              <span className="soro-dot h-2 w-2 rounded-full bg-muted-foreground" style={{ animationDelay: "200ms" }} />
              <span className="soro-dot h-2 w-2 rounded-full bg-muted-foreground" style={{ animationDelay: "400ms" }} />
            </span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
