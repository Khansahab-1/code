"use client"

import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const languages: Array<{ code: Language; label: string }> = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "ur", label: "اُردو" },
  ]

  const currentLanguage =
    languages.find((l) => l.code === language)?.label || "English"

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative">
      {/* Pill Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background text-foreground hover:border-primary transition text-sm font-medium"
      >
        {/* Globe Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.05 12H21.95M12 2.05v19.9"
          />
        </svg>

        <span>{currentLanguage}</span>

        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute right-0 mt-2 w-40 rounded-xl border border-border bg-background shadow-lg overflow-hidden z-50"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-2 text-left text-sm transition flex items-center justify-between
                ${
                  language === lang.code
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-muted"
                }`}
            >
              {lang.label}
              {language === lang.code && (
                <span className="text-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
