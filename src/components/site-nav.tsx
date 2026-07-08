"use client"

import Link from "next/link"
import Image from 'next/image';
import logo from '@/public/soro-logo.webp'; // Ensure this file is accessible here

type NavProps = {
  crossLinkLabel: string
  crossLinkHref: string
  ctaLabel: string
  ctaTargetId?: string
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
        
        {/* ⚡ OPTIMIZED LOGO: Uses next/image + priority to fix LCP bottleneck */}
        <Link href="/" className="flex items-center">
           <Image 
             src={logo} 
             alt="Sóró Logo" 
             width={48} 
             height={48} 
             priority // Crucial: Tells the browser to download this asset first
             className="h-8 w-auto" // Control size via CSS
           />
        </Link>

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