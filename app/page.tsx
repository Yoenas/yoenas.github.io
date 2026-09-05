'use client'

import { LanguageProvider } from '@/lib/language-context'
import { PortfolioSite } from '@/components/portfolio-site'

export default function Page() {
  return (
    <LanguageProvider>
      <PortfolioSite />
    </LanguageProvider>
  )
}
