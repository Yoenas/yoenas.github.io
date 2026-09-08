'use client'

import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'

export function StatusBadge({ status }: { status: 'production' | 'pre-release' }) {
  const { lang } = useLang()
  if (status === 'production') {
    return <span className="proof-status proof-status-live">{t(ui.statusProduction, lang)}</span>
  }
  return (
    <span className="proof-status proof-status-pre">
      <span className="status-indicator-dot" />
      {t(ui.statusPreRelease, lang)}
    </span>
  )
}
