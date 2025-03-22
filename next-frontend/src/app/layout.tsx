import type React from "react"
import { Kalam } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import "../components/fontawesome"

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Foodwal - Food delivery in Butwal area",
  description: "Food delivery service for Butwal and nearby areas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={kalam.className}>{children}</body>
    </html>
  )
}

