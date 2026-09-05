export type Lang = 'en' | 'id'

export interface LocalizedText {
  en: string
  id: string
}

/* ── resolve helper ────────────────────────────────────────── */

export function t(text: LocalizedText, lang: Lang): string {
  return text[lang] || text.en
}

/* ── UI strings dictionary ─────────────────────────────────── */

export const ui: Record<string, LocalizedText> = {
  /* ── hero ─────────────────────────────────────── */
  heroStatus:       { en: 'Available for new projects', id: 'Tersedia untuk proyek baru' },
  heroTitle1:       { en: 'Multiplatform', id: 'Multiplatform' },
  heroTitle2:       { en: 'Software Engineer.', id: 'Software Engineer.' },
  statBuilds:       { en: 'featured apps', id: 'proyek unggulan' },
  statYears:        { en: 'years shipping', id: 'tahun pengalaman' },
  statApps:         { en: 'apps launched', id: 'aplikasi dirilis' },

  /* ── nav ──────────────────────────────────────── */
  navAbout:         { en: 'About Me', id: 'Tentang Saya' },
  navWork:          { en: 'Work', id: 'Karya' },
  navStack:         { en: 'Stack', id: 'Stack' },
  navExperience:    { en: 'Experience', id: 'Pengalaman' },
  navContact:       { en: 'Contact', id: 'Kontak' },
  emailMe:          { en: 'Email me', id: 'Email saya' },
  copied:           { en: 'Copied', id: 'Disalin' },

  /* ── about section ────────────────────────────── */
  aboutEyebrow:     { en: 'About Me', id: 'Tentang Saya' },
  aboutTag:         { en: '01 // ROOT-CAUSE SOLVER', id: '01 // PEMECAH AKAR MASALAH' },
  aboutHeadline:    { en: 'Root-cause solver, dedicated educator', id: 'Pemecah akar masalah, pendidik berdedikasi' },
  aboutStat1Value:  { en: '6+', id: '6+' },
  aboutStat1Label:  { en: 'Years in mobile dev & tech education', id: 'Tahun di mobile dev & edukasi teknologi' },
  aboutStat1Tag:    { en: 'Experience & Mentorship', id: 'Pengalaman & Mentorship' },
  aboutStat2Value:  { en: '75+', id: '75+' },
  aboutStat2Label:  { en: 'Production bugs diagnosed & squashed', id: 'Bug produksi terdiagnosis & terselesaikan' },
  aboutStat2Tag:    { en: 'Diagnostic Instinct', id: 'Insting Diagnostik' },
  aboutStat3Value:  { en: '18', id: '18' },
  aboutStat3Label:  { en: 'Production apps guided to store release', id: 'Aplikasi produksi dibimbing hingga rilis toko' },
  aboutStat3Tag:    { en: 'Track Record & Leadership', id: 'Rekam Jejak & Kepemimpinan' },

  /* ── work section ─────────────────────────────── */
  workEyebrow:      { en: 'Selected work', id: 'Karya pilihan' },
  workTitle:        { en: 'Software with a point of view.', id: 'Software dengan sudut pandang.' },
  workDetail:       { en: 'A small selection of products where systems thinking meets a very human interface.', id: 'Koleksi produk di mana pemikiran sistem bertemu dengan antarmuka yang manusiawi.' },
  inspectProof:     { en: 'Inspect proof', id: 'Lihat bukti' },

  /* ── stack section ────────────────────────────── */
  stackEyebrow:     { en: 'The toolkit', id: 'Peralatan' },
  stackTitle:       { en: 'Depth where it matters.', id: 'Mendalam di hal yang penting.' },
  stackDetail:      { en: 'A stack chosen for durable products, not trend-chasing.', id: 'Stack yang dipilih untuk produk tahan lama, bukan sekadar tren.' },

  /* ── experience section ───────────────────────── */
  expEyebrow:       { en: 'Track record', id: 'Rekam jejak' },
  expTitle:         { en: 'Built by shipping.', id: 'Dibangun dengan merilis.' },

  /* ── footer / contact ─────────────────────────── */
  contactEyebrow:   { en: 'Have a good problem?', id: 'Punya tantangan menarik?' },
  contactTitle:     { en: "Let\u2019s make the next screen worth opening.", id: 'Mari ciptakan layar berikutnya yang layak dibuka.' },
  contactButton:    { en: 'Start a conversation', id: 'Mulai percakapan' },
  contactCopied:    { en: 'Email copied', id: 'Email disalin' },

  /* ── proof drawer ─────────────────────────────── */
  proofEyebrow:     { en: 'Engineering proof', id: 'Bukti rekayasa' },
  caseStudyEyebrow: { en: 'Case study & architecture', id: 'Studi kasus & arsitektur' },
  proofSignal:      { en: 'Verified signal', id: 'Sinyal terverifikasi' },
  proofChallenge:   { en: 'Challenge', id: 'Tantangan' },
  proofApproach:    { en: 'Approach', id: 'Pendekatan' },
  proofArtifacts:   { en: 'Evidence artifacts', id: 'Artefak bukti' },
  proofOutcomes:    { en: 'Outcomes', id: 'Hasil' },
  proofFocusView:   { en: 'Focus view', id: 'Tampilan fokus' },
  proofClose:       { en: 'Close proof panel', id: 'Tutup panel bukti' },
  proofCloseFocus:  { en: 'Close focused evidence', id: 'Tutup tampilan bukti' },
  proofTechStack:   { en: 'Tech stack', id: 'Tech stack' },

  /* ── project status badges ────────────────────── */
  statusProduction: { en: 'production', id: 'produksi' },
  statusPreRelease: { en: 'Release-Ready · Passed QA', id: 'Siap Rilis · Lulus QA' },

  /* ── CTA buttons ──────────────────────────────── */
  viewCaseStudy:       { en: 'View Case Study', id: 'Lihat Studi Kasus' },
  downloadAppStore:    { en: 'Download on the App Store', id: 'Unduh di App Store' },
  getOnPlayStore:      { en: 'Get it on Google Play', id: 'Dapatkan di Google Play' },
  viewSource:          { en: 'View Source', id: 'Lihat Kode' },
  inspectVerification: { en: 'Inspect Verification Proof', id: 'Periksa Bukti Verifikasi' },
  appStoreLabel:       { en: 'App Store', id: 'App Store' },
  playStoreLabel:      { en: 'Play Store', id: 'Play Store' },
  sourceLabel:         { en: 'Source', id: 'Source' },
  qaPassedLockup:      { en: 'QA Passed · Ready to Publish', id: 'Lolos QA · Siap Rilis' },

  /* ── language toggle ──────────────────────────── */
  selectLanguage:   { en: 'Select language', id: 'Pilih bahasa' },
}
