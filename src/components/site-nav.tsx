type NavProps = {
  crossLinkLabel: string
  crossLinkHref: string
  ctaLabel: string
  ctaTargetId?: string
  ctaHref?: string
}

export function SiteNav({ crossLinkLabel, crossLinkHref, ctaLabel, ctaTargetId, ctaHref }: NavProps) {
  const ctaClassName =
    "inline-flex min-h-11 items-center justify-center rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:px-5"

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95">
      <nav className="flex w-full items-center justify-between px-3 py-2.5 sm:px-5" aria-label="Main navigation">
        <a href="/" className="flex min-h-12 items-center" aria-label="Sóró home">
          <img
            src="/soro-logo.webp"
            alt="Sóró"
            width="120"
            height="120"
            decoding="async"
            className="h-11 w-11 rounded-[3px] object-contain sm:h-12 sm:w-12"
          />
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={crossLinkHref}
            className="inline-flex min-h-11 items-center rounded-md px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:px-3"
          >
            {crossLinkLabel}
          </a>
          <a href={ctaHref ?? (ctaTargetId ? "#" + ctaTargetId : crossLinkHref)} className={ctaClassName}>
            {ctaLabel}
          </a>
        </div>
      </nav>
    </header>
  )
}
