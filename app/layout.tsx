import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteBackground } from "@/components/site-background"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "James Jimenez | Full-Stack AI/ML Engineer",
  description: "System Architect & Interface Designer crafting intelligent digital experiences",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${geistMono.variable}`}>
      <body className="relative overflow-x-hidden bg-[#050505] font-sans antialiased text-foreground">
        <SiteBackground />
        <div className="relative z-10">{children}</div>
        <div className="noise-overlay" />
        <Analytics />
      </body>
    </html>
  )
}
