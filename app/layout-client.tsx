"use client"

import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <Analytics />
    </LanguageProvider>
  )
}
