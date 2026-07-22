import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { PostHog } from "./posthog"

export const metadata: Metadata = {
  metadataBase: new URL("https://getsoro.app"),
  title: {
    default: "Sóró | Nigerian Gen Z market research",
    template: "%s | Sóró",
  },
  description:
    "Sóró gives brands fast, credible insight from verified Nigerian university students through AI-moderated conversations.",
  keywords: [
    "market research Nigeria",
    "Gen Z research Nigeria",
    "Nigerian consumer insights",
    "Nigerian student panel",
    "youth market research Africa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Sóró",
    title: "Sóró | Nigerian Gen Z market research",
    description: "Fast, credible insight from verified Nigerian university students.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sóró — Nigerian Gen Z market research" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sóró | Nigerian Gen Z market research",
    description: "Fast, credible insight from verified Nigerian university students.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#FDFBF2",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="min-h-dvh font-sans antialiased">
        <PostHog />
        {children}

        {process.env.NODE_ENV === "production" ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  )
}
