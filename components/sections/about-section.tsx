'use client'

import { useLang } from '@/lib/language-context'
import { t, ui } from '@/lib/localization'
import { profile } from '@/lib/portfolio-data'

export function AboutSection() {
  const { lang } = useLang()
  const loc = profile.location[lang] || profile.location.en

  const stats = [
    {
      tag: t(ui.aboutStat1Tag, lang),
      value: t(ui.aboutStat1Value, lang),
      label: t(ui.aboutStat1Label, lang),
    },
    {
      tag: t(ui.aboutStat2Tag, lang),
      value: t(ui.aboutStat2Value, lang),
      label: t(ui.aboutStat2Label, lang),
    },
    {
      tag: t(ui.aboutStat3Tag, lang),
      value: t(ui.aboutStat3Value, lang),
      label: t(ui.aboutStat3Label, lang),
    },
  ]

  return (
    <div id="about" className="page-shell section-pad relative border-t border-white/10">
      <div className="pointer-events-none absolute -top-16 right-1/4 -z-10 h-80 w-80 rounded-full bg-sky-500/4 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border
             border-white/10 bg-white/3 px-3.5 py-1.5 text-xs backdrop-blur-sm">
              <span className="font-mono text-[10px] uppercase tracking-wider text-sky-300">{t(ui.aboutTag, lang)}</span>
              <span className="h-3 w-px bg-white/15" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-400">{t(ui.aboutEyebrow, lang)}</span>
            </div>
          </div>

          <h2
            className="mt-6 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-100 leading-snug"
          >
            {t(ui.aboutHeadline, lang)}
          </h2>

          <div className="mt-6 flex flex-col gap-5 text-neutral-400 leading-relaxed text-base sm:text-lg">
            <p>
              {lang === 'id' ? (
                <>
                  Saya <strong className="text-neutral-200 font-medium">{profile.name}</strong>, seorang mobile app developer dan pendidik yang berbasis di <strong className="text-neutral-200 font-medium">{loc}</strong>. Meski saya membangun aplikasi intuitif dari nol menggunakan Kotlin, Dart, dan Java, keahlian terdalam saya terletak pada troubleshooting. Jiwa saya adalah seorang <span className="text-sky-300 font-medium">root-cause solver</span>—teruji di garis depan untuk mendiagnosis bug rumit, mengeliminasi technical debt, dan menstabilkan sistem yang kompleks.
                </>
              ) : (
                <>
                  I&apos;m <strong className="text-neutral-200 font-medium">{profile.name}</strong>, a mobile app developer and educator based in <strong className="text-neutral-200 font-medium">{loc}</strong>. While I build intuitive apps from scratch using Kotlin, Dart, and Java, my deepest expertise lies in troubleshooting. I am a <span className="text-sky-300 font-medium">root-cause solver</span> at heart—thriving in the trenches to diagnose complex bugs, eliminate technical debt, and stabilize intricate systems.
                </>
              )}
            </p>
            <p>
              {lang === 'id' ? (
                <>
                  Saya beroperasi dengan fokus tunggal tanpa kompromi, mendalami permasalahan hingga tuntas secara permanen dan memastikan codebase jauh lebih bersih dari sebelumnya. Berbekal pengalaman membimbing tim siswa dalam meluncurkan aplikasi siap produksi, saya memadukan insting diagnostik ini dengan komitmen kuat terhadap <span className="text-sky-300 font-medium">clean architecture</span> dan membangun perangkat lunak yang berdaya tahan lama.
                </>
              ) : (
                <>
                  I operate with relentless, single-context focus, immersing myself in a problem until it&apos;s permanently resolved and the codebase is cleaner than I found it. Having mentored student teams through deploying production-ready applications, I pair this diagnostic instinct with a firm commitment to <span className="text-sky-300 font-medium">clean architecture</span> and building software that lasts.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/3 
              p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400/80">
                  {stat.tag}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition-colors group-hover:bg-sky-400" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">
                  {stat.value}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 leading-snug font-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
