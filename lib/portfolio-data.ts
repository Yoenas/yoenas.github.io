import type { LocalizedText, Lang } from './localization'

/* -- Proof Artifacts ----------------------------------------- */

export interface ProofArtifact {
  label: string
  kind: 'terminal' | 'architecture' | 'staging'
  summary: string
  lines: string[]
}

/* -- Project Interfaces -------------------------------------- */

export interface ProjectDetail {
  challenge: LocalizedText
  approach: LocalizedText
  outcomes: LocalizedText[]
  status?: 'production' | 'pre-release'
  verification?: LocalizedText
  artifacts?: ProofArtifact[]
}

export type MediaItem =
  | { kind: 'image'; src: string }
  | { kind: 'video'; src: string }

export interface Project {
  title: string
  eyebrow: LocalizedText
  thesis: LocalizedText
  metric: LocalizedText
  platforms: string[]
  accent: 'sky' | 'violet' | 'emerald' | 'amber'
  techStack: string[]
  detail: ProjectDetail
  playStoreUrl?: string
  appStoreUrl?: string
  githubUrl?: string
  /** Thumbnail paths relative to /public – used in the Zone B fan carousel */
  mockupImages?: string[]
  /** Full ordered media list for the lightbox (images + optional video) */
  media?: MediaItem[]
  /** App icon / logo path relative to /public */
  logoImage: string
}

/* -- Experience ---------------------------------------------- */

export interface Experience {
  company: string
  role: LocalizedText
  period: string
  summary: LocalizedText
  highlights: LocalizedText[]
}

/* -- Skill Groups -------------------------------------------- */

export interface SkillGroup {
  title: string
  description: LocalizedText
  items: string[]
}

/* -- Localized Resolvers ------------------------------------- */

export function getLocalizedProject(project: Project, lang: Lang) {
  return {
    ...project,
    eyebrow: project.eyebrow[lang] || project.eyebrow.en,
    thesis: project.thesis[lang] || project.thesis.en,
    metric: project.metric[lang] || project.metric.en,
  }
}

export function getLocalizedProjectDetail(detail: ProjectDetail, lang: Lang) {
  return {
    ...detail,
    challenge: detail.challenge[lang] || detail.challenge.en,
    approach: detail.approach[lang] || detail.approach.en,
    outcomes: detail.outcomes.map((o) => o[lang] || o.en),
    verification: detail.verification ? (detail.verification[lang] || detail.verification.en) : undefined,
  }
}

export function getLocalizedExperience(exp: Experience, lang: Lang) {
  return {
    ...exp,
    role: exp.role[lang] || exp.role.en,
    summary: exp.summary[lang] || exp.summary.en,
    highlights: exp.highlights.map((h) => h[lang] || h.en),
  }
}

/* -- Profile ------------------------------------------------- */

export const profile = {
  name: 'Yusril Nurhadi Alhabib Sulaeman',
  handle: '@yoenas',
  location: {
    en: 'Indonesia',
    id: 'Indonesia',
  } satisfies LocalizedText,
  email: 'yusrilnurhadi63@gmail.com',
  tagline: {
    en: `Hi, I'm Yusril, I don't just write code—I fix broken systems. Delivering scalable, clean, and production-ready apps with CMP and Flutter.`,
    id: 'Hai, saya Yusril, saya tidak sekedar menulis kode—saya memperbaiki sistem yang bermasalah. Menghadirkan aplikasi yang scalable, bersih, dan siap produksi dengan KMP dan Flutter.',
  } satisfies LocalizedText,
  github: 'https://github.com/yoenas',
  linkedin: 'https://linkedin.com/in/yoenas',
  instagram: 'https://instagram.com/ciel.yusril',
}

/* -- Projects ------------------------------------------------ */

export const projects: Project[] = [
  {
    title: 'Rumah Berkat',
    eyebrow: {
      en: 'Donation-based Crowdfunding · Mobile',
      id: 'Crowdfunding Berbasis Donasi · Mobile',
    },
    thesis: {
      en: 'A platform for donating and raising funds for social initiatives, campaigns, and programs.',
      id: 'Platform untuk berdonasi dan menggalang dana bagi berbagai inisiatif, campaign, dan program sosial.',
    },
    metric: {
      en: '499 files · 53 bugs resolved · 49 features',
      id: '499 file · 53 bug diselesaikan · 49 fitur',
    },
    platforms: ['Android', 'iOS'],
    accent: 'sky',
    techStack: ['Flutter', 'Dart', 'GetX', 'OAuth 2.0 (Google, Apple SSO)', 'Sentry', 'Dartz', 'Google Maps'],
    mockupImages: [
      '/apps/rb/1.png',
      '/apps/rb/2.png',
      '/apps/rb/3.png',
      '/apps/rb/5.png',
      '/apps/rb/4.png',
    ],
    media: [
      { kind: 'image', src: '/apps/rb/1.png' },
      { kind: 'image', src: '/apps/rb/2.png' },
      { kind: 'image', src: '/apps/rb/3.png' },
      { kind: 'image', src: '/apps/rb/5.png' },
      { kind: 'image', src: '/apps/rb/4.png' },
    ],
    logoImage: '/apps/rb/logo_rumahberkat.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rumahberkat&pcampaignid=web_share',
    appStoreUrl: 'https://apps.apple.com/us/app/rumah-berkat-donasi-daring/id1580891686',
    detail: {
      challenge: {
        en: 'Joining my first commercial project, I faced a production app riddled with critical bugs with some ridiculous coding style.',
        id: 'Bergabung di proyek komersial pertama saya, aplikasi yang berjalan memiliki banyak bug kritis dengan gaya pengkodean yang sangat tidak terstruktur.',
      },
      approach: {
        en: 'Since it was an urgent issue, a full refactor was off the table. Instead, I traced down the root cause of each issue, reworked the relevant parts, and fixed the code behind the affected features.',
        id: 'Karena urgent, tentu usulan refactor total ditolak. Jadi saya telusuri akar masalah setiap issue, merombak, dan memperbaiki code di balik fitur-fitur yang terdampak.',
      },
      outcomes: [
        { en: 'Net ~4,800 lines reduced across 499 files', id: 'Pengurangan ~4.800 baris kode di 499 file' },
        { en: '18 major architectural refactors shipped', id: '18 refaktor arsitektur utama dikirim' },
        { en: 'Seamless Google OAuth 2.0 sign-in flow restored', id: 'Alur masuk Google OAuth 2.0 dipulihkan' },
        { en: 'Zero text-overflow exceptions on all devices', id: 'Nol exception text-overflow di semua perangkat' },
        { en: 'User friendly navigation system', id: 'Sistem navigasi yang memudahkan user' },
      ],
      status: 'production',
      verification: {
        en: 'Production app on App Store and Google Play. 96 commits, 499 files modified.',
        id: 'Aplikasi produksi di App Store dan Google Play. 96 commit, 499 file dimodifikasi.',
      },
      artifacts: [
        {
          label: 'Impact metrics', kind: 'terminal', summary: 'Codebase impact across 96 production commits.',
          lines: [
            '96 commits · 499 files modified',
            '+21,704 insertions  −26,504 deletions',
            'Net reduction: ~4,800 lines',
            '',
            '53 bugs resolved',
            '49 feature/UI enhancements',
            '18 structural refactors',
          ],
        },
        {
          label: 'Architecture', kind: 'architecture', summary: 'Domain-driven refactor of core modules.',
          lines: [
            'Flutter App',
            '  ↓ GetX state management',
            'Domain Layer (Dartz, FP)',
            '  ↓ infrastructure / model / presentation',
            'Repository → Dio → REST API',
            '  ↓',
            'Google Maps · Sentry',
          ],
        },
        {
          label: 'Key fixes', kind: 'staging', summary: 'Critical bug resolutions and stability improvements.',
          lines: [
            '✓ Google OAuth 2.0: fixed null UserModel on HTTP 200',
            '✓ Forgot Password: strict OTP state-checks',
            '✓ Campaign Creation: refining the campaign creation',
            '✓ Verification Process: improving every verification system',
            '✓ Navigation: bottom navigation bar for easier navigation',
            '✓ Notification module: decoupled into DDD structure',
          ],
        },
      ],
    },
  },
  {
    title: 'Auxonode Desktop',
    eyebrow: {
      en: 'Private Networking · Desktop client',
      id: 'Private Networking · Desktop client',
    },
    thesis: {
      en: 'Private networking controls that feel native everywhere.',
      id: 'Kontrol private networking yang terasa native di platform manapun.',
    },
    metric: {
      en: '1,007 files · 23 bugs · 95 features',
      id: '1,007 file · 23 bug · 95 fitur',
    },
    platforms: ['macOS', 'Windows'],
    accent: 'violet',
    techStack: ['Kotlin', 'Compose Multiplatform', 'Ktor', 'kotlinx.serialization', 'DataStore', 'Coil3', 'Coroutines & Flow'],
    logoImage: '/apps/ad/logo_auxonode.jpeg',
    mockupImages: [
      '/apps/ad/1.png',
      '/apps/ad/2.png',
      '/apps/ad/3.png',
      '/apps/ad/4.png',
      '/apps/ad/5.png',
    ],
    media: [
      { kind: 'image', src: '/apps/ad/1.png' },
      { kind: 'image', src: '/apps/ad/2.png' },
      { kind: 'image', src: '/apps/ad/3.png' },
      { kind: 'image', src: '/apps/ad/4.png' },
      { kind: 'image', src: '/apps/ad/5.png' },
    ],
    detail: {
      challenge: {
        en: 'Make complex WireGuard and OpenVPN workflows approachable without hiding the useful controls, while facing disorganized and spaghetti code.',
        id: 'Membuat workflow WireGuard dan OpenVPN yang kompleks mudah dipahami tanpa menyembunyikan kontrol yang berguna, sambil menghadapi codebase yang tidak terstruktur.',
      },
      approach: {
        en: 'Refactored the entire codebase project to build a clean architecture, then created a shared multiplatform shell around OS subprocesses, static DNS, and connection lifecycle states.',
        id: 'Me-refactor codebase project untuk membangun clean architecture, kemudian membangun shared multiplatform shell di sekitar subproses OS, DNS statis, dan state siklus koneksi.',
      },
      outcomes: [
        { en: 'Vertical Slice Architecture across 10+ feature modules', id: 'Vertical Slice Architecture di 10+ modul fitur' },
        { en: 'Dual-protocol VPN engine (WireGuard + OpenVPN)', id: 'Mesin VPN dual-protokol (WireGuard + OpenVPN)' },
        { en: 'Zero memory leaks — all coroutine scopes managed', id: 'Nol memory leak — semua scope coroutine terkelola' },
        { en: 'Apple OAuth 2.0 SSO via Ktor + NimbusDS', id: 'Apple OAuth 2.0SSO via Ktor + NimbusDS' },
        { en: '15+ screens overhauled (Dashboard, Auth, Settings)', id: '15+ layar dirombak (Dashboard, Auth, Settings)' },
      ],
      status: 'pre-release',
      verification: {
        en: 'Verified against the shipped desktop client and its connection lifecycle.',
        id: 'Diverifikasi terhadap klien desktop yang dirilis dan siklus koneksinya.',
      },
      artifacts: [
        {
          label: 'Impact metrics', kind: 'terminal', summary: 'Codebase impact and engineering output.',
          lines: [
            '1,007 files modified',
            '+37,770 insertions  −30,682 deletions',
            'Net addition: +7,088 lines',
            '',
            '23 bugs resolved',
            '95 feature/UI/structural enhancements',
          ],
        },
        {
          label: 'System map', kind: 'architecture', summary: 'Vertical Slice Architecture with platform bridges.',
          lines: [
            'Compose Desktop UI',
            '  ↓ VpnUiState (centralized ViewModel)',
            'Feature Modules (Vertical Slices)',
            '  ↓ kotlinx.serialization + DataStore',
            'VPN Engine (WireGuard / OpenVPN)',
            '  ↓ OS subprocess + sudoers DNS',
            'macOS (.dylib, osascript) / Windows (.exe, TAP)',
          ],
        },
        {
          label: 'Staging pass', kind: 'staging', summary: 'Connection lifecycle and platform verification.',
          lines: [
            'CONNECT → tunnel established',
            'DNS → static resolver applied via sudoers',
            'GATEWAY CHANGE → auto-reconnect triggered',
            'DISCONNECT → process released safely',
            'CMD+Q → graceful VPN teardown',
            '✓ macOS   ✓ Windows',
          ],
        },
      ],
    },
  },
  {
    title: 'Auxonode Android',
    eyebrow: {
      en: 'Private Networking · Android client',
      id: 'Jaringan Pribadi · Android client',
    },
    thesis: {
      en: 'A secure tunnel, reduced to the essentials.',
      id: 'Tunnel aman, direduksi ke esensi.',
    },
    metric: {
      en: '162 files · Shared Kotlin core',
      id: '162 file · Core Kotlin bersama',
    },
    platforms: ['Android'],
    accent: 'emerald',
    techStack: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'WireGuard', 'OpenVPN', 'Gradle (AGP 8.8+)'],
    logoImage: '/apps/aa/logo_auxonode.jpeg',
    mockupImages: [
      '/apps/aa/1.png',
      '/apps/aa/2.png',
      '/apps/aa/3.png',
      '/apps/aa/4.png',
    ],
    media: [
      { kind: 'image', src: '/apps/aa/1.png' },
      { kind: 'image', src: '/apps/aa/2.png' },
      { kind: 'image', src: '/apps/aa/3.png' },
      { kind: 'image', src: '/apps/aa/4.png' },
      { kind: 'video', src: '/apps/aa/dns-connection.mp4' },
    ],
    detail: {
      challenge: {
        en: 'Bring desktop-grade networking primitives to a focused Android experience.',
        id: 'Membawa primitif desktop-grade networking ke pengalaman Android yang terfokus.',
      },
      approach: {
        en: 'Shared Kotlin domain modules with Compose UI, coroutines, and Flow-driven connection states.',
        id: 'Modul domain Kotlin bersama dengan Compose UI, coroutines, dan state koneksi berbasis Flow.',
      },
      outcomes: [
        { en: 'Static DNS routing for both WireGuard and OpenVPN', id: 'Routing DNS statis untuk WireGuard dan OpenVPN' },
        { en: 'Resilient token refresh with rate-limit handling', id: 'Refresh token yang tangguh dengan penanganan rate-limit' },
        { en: 'Architecture ready for Android 16KB page sizes', id: 'Arsitektur siap untuk ukuran page 16KB Android' },
        { en: 'Device-specific UI fixes (vendor ROM edge cases)', id: 'Perbaikan UI spesifik perangkat (edge case vendor ROM)' },
        { en: 'Upgraded to AGP 8.8.2 + Kotlin 2.2.10', id: 'Diupgrade ke AGP 8.8.2 + Kotlin 2.2.10' },
      ],
      status: 'pre-release',
      verification: {
        en: 'Pre-release build with the shared core wired and the Android flow ready for QA.',
        id: 'Build pre-release dengan core bersama terhubung dan alur Android siap untuk QA.',
      },
      artifacts: [
        {
          label: 'Impact metrics', kind: 'terminal', summary: 'Codebase footprint across the Android client.',
          lines: [
            '162 files modified',
            '+2,293 insertions  −2,855 deletions',
            'Net reduction: −562 lines (streamlined)',
            '',
            'Upgraded AGP 8.8.2 · Kotlin 2.2.10',
            'Cleaned all console loggers for production',
          ],
        },
        {
          label: 'Core map', kind: 'architecture', summary: 'The Android client keeps platform code at the edge.',
          lines: [
            'Jetpack Compose UI',
            '  ↓ Flow-driven state (MVVM)',
            'Shared Kotlin core',
            '  ↓ repository boundary',
            'VPN Engine (WireGuard / OpenVPN)',
            '  ↓ Static DNS at tunnel level',
            'Android SDK (16KB page-size ready)',
          ],
        },
        {
          label: 'QA staging', kind: 'staging', summary: 'Connection states verified on physical devices.',
          lines: [
            'IDLE → CONNECTING → CONNECTED',
            'NETWORK LOSS → RECONNECTING',
            'TOKEN EXPIRED → graceful refresh',
            'DISCONNECT → IDLE',
            '✓ Pixel 8   ✓ Android 15',
            '✓ Infinix (vendor ROM edge cases)',
          ],
        },
      ],
    },
  },
  {
    title: 'MovieVault',
    eyebrow: {
      en: 'Personal Product · Mobile',
      id: 'Produk Personal · Mobile',
    },
    thesis: {
      en: 'A small, fast home for the movies and shows worth remembering.',
      id: 'Rumah kecil yang cepat untuk film-film yang layak dikenang.',
    },
    metric: {
      en: 'Full-stack integration · Cross-platform',
      id: 'Integrasi full-stack · Cross-platform',
    },
    platforms: ['Android', 'iOS'],
    accent: 'amber',
    techStack: ['Flutter', 'Riverpod', 'Firebase Auth', 'Cloud Firestore', 'SQFlite', 'TMDB API', 'Freezed'],
    mockupImages: [
      '/apps/mv/2.png',
      '/apps/mv/3.png',
      '/apps/mv/1.png',
      '/apps/mv/4.png',
      '/apps/mv/5.png',
    ],
    media: [
      { kind: 'image', src: '/apps/mv/2.png' },
      { kind: 'image', src: '/apps/mv/3.png' },
      { kind: 'image', src: '/apps/mv/1.png' },
      { kind: 'image', src: '/apps/mv/4.png' },
      { kind: 'image', src: '/apps/mv/5.png' },
    ],
    logoImage: '/apps/mv/logo_movievault.svg',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.cielsoftwaresolutions.movie_vault&pcampaignid=web_share',
    githubUrl: 'https://github.com/Yoenas/MovieVault',
    detail: {
      challenge: {
        en: 'Building a detail page that implements a Collapsing AppBar with a pinned TabBar, and setting up a Stream/Data-Watching mechanism from SQFlite to observe real-time data changes in local storage.',
        id: 'Membangun halaman detail yang mengimplementasikan Collapsing AppBar dengan pinned TabBar, dan menyiapkan mekanisme Stream/Data-Watching dari SQFlite untuk mengamati perubahan data real-time di penyimpanan lokal.',
      },
      approach: {
        en: 'Used SliverOverlapAbsorber with NestedScrollView to implement the collapsing app bar. For real-time local storage updates, I utilize Flutter Riverpod\'s StateProvider and FutureProvider.autoDispose, with dedicated services and providers to manage the underlying mechanism',
        id: 'Menggunakan SliverOverlapAbsorber dalam NestedScrollView untuk implementasi CollapsingAppBar. Untuk mekanisme real-time data penyimpanan lokal, saya memanfaatkan Flutter Riverpod StateProvider dan FutureProvider.autoDispose untuk membangun rumah bagi service dan provider mekanisme ini.',
      },
      outcomes: [
        { en: 'Riverpod-powered caching and state management', id: 'Caching dan state management berbasis Riverpod' },
        { en: 'Firebase Auth (Email + Google Sign-In)', id: 'Firebase Auth (Email + Google Sign-In)' },
        { en: 'SQFlite offline watch list with instant search', id: 'Watch list offline SQFlite dengan pencarian instan' },
        { en: 'Secure API key management via Envied', id: 'Manajemen API key aman via Envied' },
        { en: 'Cloud Firestore for cross-device sync', id: 'Cloud Firestore untuk sinkronisasi lintas perangkat' },
      ],
      status: 'production',
      verification: {
        en: 'Published on Google Play. Open-source on GitHub.',
        id: 'Dipublikasikan di Google Play. Open-source di GitHub.',
      },
      artifacts: [
        {
          label: 'Data layer', kind: 'architecture', summary: 'Comprehensive data architecture with type-safe serialization.',
          lines: [
            'Flutter UI (Riverpod)',
            '  ↓ state + caching',
            'Freezed models (type-safe JSON)',
            '  ↓ data sources',
            'TMDB API (secure key via Envied)',
            'Cloud Firestore (remote database & sync)',
            'SQFlite (local offline storage)',
          ],
        },
        {
          label: 'Auth & cloud', kind: 'staging', summary: 'Authentication flow and cloud database.',
          lines: [
            '✓ Email/Password registration + login',
            '✓ Google Sign-In integration',
            '✓ Secure password reset flow',
            '✓ Cloud Firestore: remote user prefs',
            '✓ Cross-device watch list sync ready',
          ],
        },
        {
          label: 'Local storage', kind: 'terminal', summary: 'Offline watch list with SQFlite.',
          lines: [
            'SQFlite local database',
            '  → Save / remove favorites',
            '  → Instant search across watch list',
            '  → Zero network dependency for saved items',
            '  → Responsive UI without loading states',
          ],
        },
      ],
    },
  },
]

/* -- Skill Groups -------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core platforms',
    description: { en: 'Cross-platform by default.', id: 'Multiplatform secara default.' },
    items: ['Flutter', 'Compose Multiplatform', 'Android SDK', 'Jetpack Compose', 'iOS (Swift)'],
  },
  {
    title: 'Languages',
    description: { en: 'The languages that power everything.', id: 'Bahasa pemrograman di balik semuanya.' },
    items: ['Kotlin', 'Dart', 'Swift', 'Java', 'Bash / Shell'],
  },
  {
    title: 'Networking & security',
    description: { en: 'Low-level systems that make software dependable.', id: 'Sistem level-rendah yang menjadikan software dapat diandalkan.' },
    items: ['WireGuard', 'OpenVPN', 'Static DNS', 'OAuth 2.0 (Google, Apple SSO)', 'Ktor', 'Dio'],
  },
  {
    title: 'Patterns & state',
    description: { en: 'Structure that keeps teams moving.', id: 'Struktur yang menjaga tim tetap bergerak.' },
    items: ['Vertical Slice Architecture', 'Domain-Driven Design', 'Clean Architecture', 'MVVM', 'Coroutines & Flow', 'Riverpod', 'GetX'],
  },
  {
    title: 'Data & storage',
    description: { en: 'From local persistence to cloud sync.', id: 'Dari penyimpanan lokal hingga sinkronisasi cloud.' },
    items: ['Firebase (Auth, Firestore)', 'DataStore', 'SQFlite', 'kotlinx.serialization', 'Freezed'],
  },
  {
    title: 'Ecosystem & tooling',
    description: { en: 'Practical tooling for shipping.', id: 'Peralatan praktis untuk merilis produk.' },
    items: ['AGP 9.4+', 'Gradle', 'Sentry', 'Coil3', 'Lottie', 'Google Maps API', 'TMDB API'],
  },
]

/* -- Experience ---------------------------------------------- */

export const experience: Experience[] = [
  {
    company: 'PT. Rakhasa Artha Wisesa',
    role: {
      en: 'Multiplatform Software Engineer',
      id: 'Software Engineer Multiplatform',
    },
    period: '2023 — Present',
    summary: {
      en: 'Building production mobile and desktop products across finance, networking, and consumer experiences. Shipping across Flutter, Compose Multiplatform, and native Android.',
      id: 'Membangun produk mobile dan desktop produksi di bidang keuangan, jaringan, dan pengalaman konsumen. Merilis produk dengan Flutter, Compose Multiplatform, dan Android native.',
    },
    highlights: [
      { en: 'Kotlin Multiplatform', id: 'Kotlin Multiplatform' },
      { en: 'Flutter', id: 'Flutter' },
      { en: 'Compose Desktop', id: 'Compose Desktop' },
      { en: '3 production products', id: '3 produk produksi' },
      { en: 'VPN engineering', id: 'Rekayasa VPN' },
    ],
  },
  {
    company: 'SMK IDN Boarding School',
    role: {
      en: 'IT Teacher & Mobile Engineering Lead',
      id: 'Guru IT & Lead Rekayasa Mobile',
    },
    period: '2018 — 2024',
    summary: {
      en: 'Taught mobile development across four technology cycles (Swift → Java → Kotlin → Flutter) and led student teams to ship 18 production apps to the Play Store.',
      id: 'Mengajar pengembangan mobile di empat siklus teknologi (Swift → Java → Kotlin → Flutter) dan memimpin tim siswa merilis 18 aplikasi produksi ke Play Store.',
    },
    highlights: [
      { en: '18 apps shipped to Play Store', id: '18 aplikasi dirilis ke Play Store' },
      { en: 'Swift · Java · Kotlin · Flutter', id: 'Swift · Java · Kotlin · Flutter' },
      { en: 'Technical mentorship', id: 'Mentoring teknis' },
      { en: '60+ practical projects designed', id: '60+ proyek praktik dirancang' },
      { en: 'Curriculum across 7+ branches', id: 'Kurikulum di 7+ cabang' },
    ],
  },
]
