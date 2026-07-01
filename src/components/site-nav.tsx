"use client"

import Link from "next/link"
import { SoroLogo } from "@/src/components/soro-logo"

type NavProps = {
  /** label for the cross-link to the other audience */
  crossLinkLabel: string
  crossLinkHref: string
  /** label + target id for the primary CTA that smooth-scrolls */
  ctaLabel: string
  ctaTargetId: string
}

export function SiteNav({ crossLinkLabel, crossLinkHref, ctaLabel, ctaTargetId }: NavProps) {
  function handleCta(e: React.MouseEvent) {
    e.preventDefault()
    const el = document.getElementById(ctaTargetId)
    el?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <SoroLogo />
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href={crossLinkHref}
            className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-3"
          >
            {crossLinkLabel}
          </Link>
          <a
            href={`#${ctaTargetId}`}
            onClick={handleCta}
            className="rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 sm:px-5"
          >
            {ctaLabel}
          </a>
        </div>
      </nav>
    </header>
  )
}
