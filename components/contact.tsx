"use client"

import type React from "react"
import { useState } from "react"
import { profile } from "@/lib/portfolio-data"
import { useLanguage } from "@/lib/i18n"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const { t } = useLanguage()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    // Simulate submission — wire up to an email service or server action as needed.
    setTimeout(() => setStatus("sent"), 800)
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 md:py-24"
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-primary">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.contact.description}
          </p>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {t.contact.emailLabel}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 inline-block text-lg font-medium text-foreground underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/yoenas"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-lg font-medium text-foreground underline-offset-4 hover:underline"
            >
              /in/yoenas
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              {t.contact.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
              placeholder={t.contact.namePlaceholder}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              {t.contact.emailFieldLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
              placeholder={t.contact.emailPlaceholder}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
              placeholder={t.contact.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="mt-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "idle" && t.contact.sendIdle}
            {status === "sending" && t.contact.sendSending}
            {status === "sent" && t.contact.sendSent}
          </button>

          {status === "sent" && (
            <p className="text-sm text-muted-foreground">
              {t.contact.sentNote}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
