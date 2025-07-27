import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"
import { ThemeProvider } from "next-themes"
import "../lib/firebase";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Connectomics - Brain Mapping Discord Community",
  description:
    "A space for people to get insights into synapse-level brain mapping while probing the prospect of mind uploading. Deep-tech discussions, open datasets, and rigorous debates.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
