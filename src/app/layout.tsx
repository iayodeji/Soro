import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { PostHogProvider } from "./posthog"
import { AtmospherePointer  } from "@/src/components/atmosphere/atmosphere-pointer"
import SoroBackground from '@/src/components/SoroBackground';

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: 'swap', // This is non-negotiable for FCP
  preload: true,   // Next.js will preload the font for you
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // This is non-negotiable for FCP
  preload: true,   // Next.js will preload the font for you
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sóró — Get paid to share what you think",
  description:
    "Sóró is a verified Nigerian university student research panel. Students get paid to answer questions through AI conversations, and brands get honest insights in 48 hours.",
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
  <html lang="en" className={`${playfair.variable} ${inter.variable} bg-background`}>
    {/* Added 'relative isolation' to protect the z-index stacking context */}
    <body className="font-sans antialiased relative isolation">
      <PostHogProvider>
        <AtmospherePointer />
        <SoroBackground />      
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
        
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </PostHogProvider>
    </body>
  </html>
)
}