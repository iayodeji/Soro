"use client"

import Link from "next/link"
import { SoroLogo } from "@/src/components/soro-logo"

type NavProps = {
  /** label for the cross-link to the other audience */
  crossLinkLabel: string
  crossLinkHref: string
  /** label + target id for the primary CTA that smooth-scrolls */
  ctaLabel: string
  ctaTargetId?: string
  /** optional route for the primary CTA when it should navigate instead of scroll */
  ctaHref?: string
}

export function SiteNav({ crossLinkLabel, crossLinkHref, ctaLabel, ctaTargetId, ctaHref }: NavProps) {
  function handleCta(e: React.MouseEvent) {
    if (ctaHref) return
    if (!ctaTargetId) return

    e.preventDefault()
    const el = document.getElementById(ctaTargetId)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/50 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <SoroLogo />
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href={crossLinkHref}
            className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3"
          >
            {crossLinkLabel}
          </Link>
          {ctaHref ? (
            <Link
              href={ctaHref}
              className="group relative inline-flex items-center justify-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-terracotta-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/20 sm:px-5"
            >
              {ctaLabel}
            </Link>
          ) : (
            <a
              href={ctaTargetId ? `#${ctaTargetId}` : crossLinkHref}
              onClick={handleCta}
              className="group relative inline-flex items-center justify-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-terracotta-foreground transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-terracotta/20 sm:px-5"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}
