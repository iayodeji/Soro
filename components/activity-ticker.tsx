"use client"

import { useMemo } from "react"
import { buildTickerItems } from "@/lib/soro-data"

export function ActivityTicker() {
  const items = useMemo(() => buildTickerItems(), [])
  // duplicate the list so the -50% translate loops seamlessly
  const loop = [...items, ...items]

  return (
    <div className="soro-ticker overflow-hidden border-y border-border bg-card py-3">
      <div className="soro-ticker-track flex w-max items-center gap-3">
        {loop.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm"
          >
            {item.type === "joined" ? (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-ochre" aria-hidden="true" />
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-muted-foreground">from {item.uni} joined the waitlist</span>
              </>
            ) : (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="text-muted-foreground">from {item.uni} earned</span>
                <span className="font-semibold text-sage">{item.amount}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
