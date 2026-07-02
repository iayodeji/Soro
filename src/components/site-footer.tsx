import Link from "next/link"
import { SoroLogo } from "@/src/components/soro-logo"

type FooterProps = {
  crossLinkLabel: string
  crossLinkHref: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  contactEmail?: string
}

export function SiteFooter({ crossLinkLabel, crossLinkHref, primaryCtaLabel, primaryCtaHref, contactEmail }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <SoroLogo />
          <p className="max-w-xs text-sm text-muted-foreground">
            A verified Nigerian university student research panel. Honest answers, fairly paid.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">
          {primaryCtaLabel && primaryCtaHref ? (
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-4 py-2 font-semibold text-terracotta-foreground transition-colors hover:bg-terracotta/90"
            >
              {primaryCtaLabel}
            </Link>
          ) : null}
          <Link href={crossLinkHref} className="font-medium text-foreground transition-colors hover:text-terracotta">
            {crossLinkLabel}
          </Link>
          {contactEmail ? (
            <a
              href={`mailto:${contactEmail}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {contactEmail}
            </a>
          ) : null}
          <span className="text-muted-foreground">© {new Date().getFullYear()} Sóró</span>
        </div>
      </div>
    </footer>
  )
}
