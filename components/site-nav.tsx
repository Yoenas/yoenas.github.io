"use client"

import { useState } from "react"
import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"

// Note : HEADER Ini buat tampilan responsive web-mobile
export function SiteNav() {
  const [open, setOpen] = useState(false)
  const { t, language } = useLanguage()

  const links = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ]

  const displayRole = language === "id" ? profile.roleId || profile.role : profile.role

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {profile.name}
          </span>
          <span className="text-xs text-muted-foreground">{displayRole}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
          <a
            href="#contact"
            className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.nav.getInTouch}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-md border border-border text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-foreground px-4 py-2 text-center text-sm font-medium text-background"
            >
              {t.nav.getInTouch}
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
