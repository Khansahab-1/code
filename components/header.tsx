"use client"

import Link from "next/link"
import Image from "next/image"
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/lib/language-context"

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-border/50 backdrop-blur-md bg-primary/95 h-20">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logo-header.png"
            alt="Perfume Markaz Logo"
            width={120}
            height={50}
            className="rounded object-contain transition-transform duration-300"
            priority
          />
          <span className="sr-only">Perfume Markaz</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  )
}
