import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { PostHogProvider } from "./posthog"
import { AtmospherePointer  } from "@/src/components/atmosphere/atmosphere-pointer"


const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
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
        
        <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          aria-hidden="true"
          className="soro-backdrop-video motion-reduce:hidden"
        >
          <source
            src="/Soro Ambient Signal Backdrop.mp4"
            type="video/mp4"
          />
        </video>

        {/* Wrap your children/pages in a relative container with a positive z-index */}
        <div className="relative z-10 w-full min-h-screen">
          {children}
        </div>
        
        {process.env.NODE_ENV === "production" && <Analytics />}
      </PostHogProvider>
    </body>
  </html>
)
}