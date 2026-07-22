"use client"

import { useEffect } from "react"

/** Product analytics is deliberately excluded from the critical rendering path. */
export function PostHog() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const connection = (navigator as Navigator & {
      connection?: { effectiveType?: string; saveData?: boolean }
    }).connection

    if (
      !key ||
      connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g"
    ) {
      return
    }

    let cancelled = false
    let timeout: number | undefined
    let idleCallback: number | undefined
    const idleWindow = window as Window & {
      cancelIdleCallback?: (id: number) => void
      requestIdleCallback?: (callback: () => void) => number
    }

    const load = () => {
      void import("posthog-js").then(({ default: posthog }) => {
        if (cancelled) {
          return
        }

        posthog.init(key, {
          api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
          ui_host: "https://eu.posthog.com",
          capture_pageview: "history_change",
          capture_pageleave: true,
        })
      })
    }

    const schedule = () => {
      if (idleWindow.requestIdleCallback) {
        idleCallback = idleWindow.requestIdleCallback(load)
      } else {
        timeout = window.setTimeout(load, 8000)
      }
    }

    if (document.readyState === "complete") {
      schedule()
    } else {
      window.addEventListener("load", schedule, { once: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener("load", schedule)
      if (idleCallback !== undefined) {
        idleWindow.cancelIdleCallback?.(idleCallback)
      }
      if (timeout !== undefined) {
        window.clearTimeout(timeout)
      }
    }
  }, [])

  return null
}
