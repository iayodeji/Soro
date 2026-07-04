"use client"

import { useEffect, useRef, useState } from "react"
import { CHAT_SCRIPT } from "@/src/lib/soro-data"

type Bubble =
  | { kind: "ai"; text: string }
  | { kind: "user"; text: string }
  | { kind: "success"; amount: number }

export function ChatDemo() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [typing, setTyping] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const totalSteps = CHAT_SCRIPT.length
  const surveyReward = 1000

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
        setCurrentStep(0)
        await wait(600)

        // Main Interview Loop
        for (let i = 0; i < totalSteps; i++) {
          const step = CHAT_SCRIPT[i]
          if (cancelled) return
          
          setTyping(true)
          await wait(1600)
          if (cancelled) return
          
          setTyping(false)
          setBubbles((b) => [...b, { kind: "ai", text: step.question }])
          await wait(1200)
          if (cancelled) return
          
          setBubbles((b) => [...b, { kind: "user", text: step.answer }])
          setCurrentStep(i + 1)
          await wait(1600)
        }

        // Completion / Reward State
        if (cancelled) return
        setTyping(true)
        await wait(1200)
        if (cancelled) return
        
        setTyping(false)
        setBubbles((b) => [...b, { kind: "success", amount: surveyReward }])
        
        // Hold on the success screen so the user actually reads the reward
        await wait(4500)
      }
    }

    run()
    return () => {
      cancelled = true
      timers.current.forEach(clearTimeout)
      timers.current = []
    }
  }, [totalSteps])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [bubbles, typing])

  const progressPercent = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card/80 shadow-sm backdrop-blur">
      {/* Header with static bounty */}
      <div className="flex items-center justify-between bg-background/50 px-4 py-3">
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
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Reward</p>
          <p className="font-mono text-sm font-bold text-sage">
            ₦{surveyReward.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Silent Momentum Progress Bar */}
      <div className="h-1 w-full bg-muted">
        <div 
          className="h-full bg-sage transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex h-80 flex-col gap-3 overflow-y-auto px-4 py-4 pb-6">
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
          // The Success Card UI
          return (
            <div 
              key={i} 
              className="relative z-30 flex w-full animate-in flex-col items-center justify-center p-6 select-none fade-in duration-500"
            >
              {/* Outer Particle Burst Effect */}
              <div className="absolute inset-0 flex scale-125 items-center justify-center pointer-events-none animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_1]">
                <svg className="h-full w-full text-sage/20" fill="none" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" className="animate-[spin_20s_linear_infinite]" />
                  <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="1 5" className="animate-[spin_40s_linear_infinite_reverse]" />
                </svg>
              </div>

              {/* Premium Reward Card Container */}
              <div 
                className="relative flex w-full max-w-[340px] flex-col items-center overflow-hidden rounded-[28px] border border-neutral-800 bg-neutral-950 p-8 text-center text-white shadow-[0_0_60px_rgba(46,125,50,0.25)]"
                style={{
                  animation: 'cardInertialPop 0.85s cubic-bezier(0.175, 0.885, 0.32, 1.4) forwards'
                }}
              >
                {/* Holographic Linear Light Foil Ring */}
                <div className="absolute -inset-x-20 top-0 h-40 bg-gradient-to-b from-sage/10 via-transparent to-transparent blur-xl pointer-events-none" />

                {/* Scale-In Glowing Check Icon */}
                <div 
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-neutral-950 bg-sage text-neutral-950 shadow-[0_0_30px_rgba(163,230,53,0.4)]"
                  style={{
                    animation: 'scaleInCheck 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s forwards',
                    transform: 'scale(0)'
                  }}
                >
                  <svg className="h-8 w-8 stroke-[3.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Payment Secured</p>
                
                {/* Massive Display Amount */}
                <div className="flex items-baseline justify-center font-mono select-all">
                  <span className="mr-0.5 text-2xl font-black text-sage animate-[pulse_2s_infinite]">+</span>
                  <h2 className="text-5xl font-black tracking-tighter text-white">
                    ₦{b.amount.toLocaleString()}
                  </h2>
                </div>

                <p className="mt-4 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] font-medium text-neutral-400">
                  Available instantly
                </p>
              </div>

              {/* Delayed Staggered CTA Section */}
              <div 
                className="mt-4 w-full max-w-[340px] space-y-2"
                style={{
                  animation: 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards',
                  opacity: 0,
                  transform: 'translateY(15px)'
                }}
              >
                <button className="w-full rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-semibold tracking-wide text-white/90 transition-all hover:bg-white/10 active:scale-[0.98]">
                  View dashboard
                </button>
              </div>
            </div>
          ) })}

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