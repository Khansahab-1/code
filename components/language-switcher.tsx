"use client"

import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"
import { useState, useRef, useEffect } from "react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const languages: Array<{ code: Language; label: string; nativeLabel: string }> = [
    { code: "en", label: "English", nativeLabel: "English" },
    { code: "hi", label: "हिन्दी", nativeLabel: "हिन्दी" },
    { code: "ur", label: "اُردو", nativeLabel: "اُردو" },
  ]

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
      {/* Globe / Language Icon Button */}
      <div className="relative inline-block">
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="p-2 rounded-lg hover:bg-accent/20 transition-colors duration-200 text-accent hover:text-accent/80 cursor-pointer"
          aria-label="Change Language"
        >
          {/* 🌐 Language/Globe Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
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
              d="M2.05 12H21.95M12 2.05v19.9M7 12a16 16 0 013-9.5M17 12a16 16 0 01-3 9.5"
            />
          </svg>
        </button>

        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-primary-foreground text-primary text-xs font-medium rounded whitespace-nowrap pointer-events-none">
            Change Language
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-1 w-0 h-0 border-4 border-transparent border-b-primary-foreground"></div>
          </div>
        )}
      </div>

      {/* Language Popover Menu */}
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute top-full right-0 mt-2 w-48 bg-primary border border-accent/30 rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="p-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-2.5 rounded-md transition-all duration-150 flex items-center gap-3 cursor-pointer ${
                  language === lang.code
                    ? "bg-accent text-primary font-semibold"
                    : "text-primary-foreground/80 hover:bg-primary/80 hover:text-primary-foreground"
                }`}
              >
                <span className="text-base">{lang.nativeLabel}</span>
                {language === lang.code && (
                  <svg
                    className="w-4 h-4 ml-auto"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
