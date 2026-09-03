import type { Language } from "./translations"

export const profile = {
  name: "Yusril Nurhadi Alhabib Sulaeman",
  role: "Multiplatform Software Engineer",
  roleId: "Multiplatform Software Engineer",
  tagline:
    "I design and build polished mobile apps with KMP and Flutter — fast, accessible, and a joy to use on every device.",
  taglineId:
    "Saya merancang dan membangun aplikasi mobile berkualitas tinggi dengan KMP dan Flutter — cepat, aksesibel, dan nyaman digunakan di setiap perangkat.",
  location: "Jakarta Barat, DKI Jakarta, Indonesia",
  locationId: "Jakarta Barat, DKI Jakarta, Indonesia",
  email: "yusrilnurhadi63@gmail.com",
  available: true,
}

export const socials = [
  { label: "LinkedIn", handle: "/in/yoenas", href: "https://linkedin.com/in/yoenas" },
  { label: "GitHub", handle: "@yoenas", href: "https://github.com/yoenas" },
  { label: "Instagram", handle: "@ciel.yusril", href: "https://instagram.com/ciel.yusril" }
]

/* ------------------------------------------------------------------ */
/*  Project types                                                      */
/* ------------------------------------------------------------------ */

export type Project = {
  slug: string
  title: string
  tagline: string
  taglineId?: string
  description: string
  descriptionId?: string
  image: string
  platforms: string[]
  tags: string[]
  metric: string
  metricId?: string
  href: string
}

export type CoverImage = {
  url: string
  alt: string
}

export type ProjectContribution = {
  featureTitle: string
  featureTitleId?: string
  story: string
  storyId?: string
  mediaUrl?: string
  mediaType?: "image" | "video"
  impactOrOutcome?: string
  impactOrOutcomeId?: string
}

export type ProjectDetail = {
  slug: string
  title: string
  tagline: string
  taglineId?: string
  role: string
  roleId?: string
  timeline: string
  timelineId?: string
  techStack: string[]
  coverImage: CoverImage
  contributions: ProjectContribution[]
  liveUrl?: string
  githubUrl?: string
}

/* ------------------------------------------------------------------ */
/*  Projects grid data                                                 */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: "rumah-berkat",
    title: "Rumah Berkat",
    tagline: "Community-driven campaign platform",
    taglineId: "Platform kampanye dan donasi berbasis komunitas",
    description:
      "A social impact mobile app for managing campaigns, donations, and community engagement. Rebuilt core architecture with domain-driven design, squashed 53 bugs, and delivered 49 feature enhancements.",
    descriptionId:
      "Aplikasi mobile dampak sosial untuk mengelola kampanye, donasi, dan keterlibatan komunitas. Membangun ulang arsitektur inti dengan Domain-Driven Design, menyelesaikan 53 bug, dan merilis 49 peningkatan fitur.",
    image: "/apps/finance-app.png",
    platforms: ["iOS", "Android"],
    tags: ["Flutter", "Dart", "GetX", "Google Maps"],
    metric: "53 bugs resolved · 49 features shipped",
    metricId: "53 bug terselesaikan · 49 fitur dirilis",
    href: "/work/rumah-berkat",
  },
  {
    slug: "movie-vault",
    title: "Movie Vault",
    tagline: "Your ultimate movie & TV show companion",
    taglineId: "Teman setia eksplorasi film dan serial TV Anda",
    description:
      "A comprehensive movie and TV show tracking app powered by TMDB API. Features include detailed listings, search, personalized watch lists, and secure Firebase authentication.",
    descriptionId:
      "Aplikasi pelacak film dan serial TV komprehensif bertenaga TMDB API. Menghadirkan daftar lengkap, pencarian, daftar tontonan personal, dan autentikasi aman Firebase.",
    image: "/apps/fitness-app.png",
    platforms: ["iOS", "Android"],
    tags: ["Flutter", "Riverpod", "Firebase", "TMDB API"],
    metric: "Full-stack integration · Cross-platform",
    metricId: "Integrasi menyeluruh · Lintas platform",
    href: "/work/movie-vault",
  },
  {
    slug: "auxonode-desktop",
    title: "Auxonode Desktop",
    tagline: "Cross-platform VPN, reimagined",
    taglineId: "VPN lintas platform, dirancang ulang",
    description:
      "A desktop VPN client for macOS and Windows built with Compose Multiplatform. Architected vertical slice architecture, engineered resilient VPN engine, and overhauled 15+ screens.",
    descriptionId:
      "Klien VPN desktop untuk macOS dan Windows dibangun dengan Compose Multiplatform. Merancang Vertical Slice Architecture, membangun engine VPN tangguh, dan merombak 15+ layar.",
    image: "/apps/fitness-app.png",
    platforms: ["macOS", "Windows"],
    tags: ["Kotlin", "Compose Multiplatform", "OpenVPN", "WireGuard"],
    metric: "95 enhancements · 23 bugs fixed",
    metricId: "95 peningkatan · 23 bug diperbaiki",
    href: "/work/auxonode-desktop",
  },
  {
    slug: "auxonode-android",
    title: "Auxonode Android",
    tagline: "Secure connectivity on the go",
    taglineId: "Konektivitas aman di mana pun Anda berada",
    description:
      "The Android counterpart of Auxonode VPN. Upgraded VPN engine binaries, implemented static DNS routing, and resolved critical device-specific UI and auth issues.",
    descriptionId:
      "Mitra Android dari Auxonode VPN. Memperbarui biner engine VPN, menerapkan perutean Static DNS, dan menyelesaikan bug UI spesifik perangkat serta autentikasi.",
    image: "/apps/travel-app.png",
    platforms: ["Android"],
    tags: ["Kotlin", "Android SDK", "OpenVPN", "WireGuard"],
    metric: "245 files modified · 562 lines reduced",
    metricId: "245 file dimodifikasi · 562 baris dikurangi",
    href: "/work/auxonode-android",
  },
]

export const featuredProjects = projects

/* ------------------------------------------------------------------ */
/*  Project detail data                                                */
/* ------------------------------------------------------------------ */

export const projectDetails: Record<string, ProjectDetail> = {
  "rumah-berkat": {
    slug: "rumah-berkat",
    title: "Rumah Berkat",
    tagline: "Community-driven campaign platform",
    taglineId: "Platform kampanye dan donasi berbasis komunitas",
    role: "Mobile Developer (Flutter)",
    roleId: "Mobile Developer (Flutter)",
    timeline: "Mar 2025 — Present",
    timelineId: "Mar 2025 — Sekarang",
    techStack: [
      "Flutter",
      "Dart",
      "GetX",
      "Firebase",
      "Google Maps",
      "Dio",
      "Sentry",
      "Lottie",
      "Dartz",
    ],
    coverImage: {
      url: "/apps/finance-app.png",
      alt: "Rumah Berkat app — campaign management and community engagement platform",
    },
    contributions: [
      {
        featureTitle: "Architecture & Codebase Overhaul",
        featureTitleId: "Pembaruan Arsitektur & Codebase",
        story:
          "The legacy codebase had grown unwieldy — tightly coupled modules, redundant logic scattered across screens, and no clear domain boundaries. I spearheaded a full architectural reorganization, decoupling core modules like Notifications into a clean domain-driven structure with separate infrastructure/model, presentation, and repository layers. I migrated complex stateful components (like the NotificationScreen) to StatelessWidgets, eliminating redundant logic. Across 96 commits, I modified 846 files with 21,704 insertions and 26,504 deletions — a net reduction of ~4,800 lines that dramatically reduced technical debt.",
        storyId:
          "Codebase warisan sebelumnya menjadi rumit dengan modul yang terikat erat dan logika tersebar tanpa batas domain yang jelas. Saya memimpin reorganisasi arsitektural menyeluruh, memisahkan modul inti seperti Notifikasi ke dalam struktur domain-driven dengan lapisan infrastruktur/model, presentasi, dan repositori. Di 96 commit, saya memodifikasi 846 file dengan 21.704 penambahan dan 26.504 penghapusan—pengurangan bersih ~4.800 baris kode yang secara signifikan memangkas technical debt.",
        mediaUrl: "/apps/finance-app.png",
        mediaType: "image",
        impactOrOutcome:
          "Net reduction of ~4,800 lines of code across 846 files. 18 major architectural refactor commits completed.",
        impactOrOutcomeId:
          "Pengurangan bersih ~4.800 baris kode di 846 file. 18 commit refaktor arsitektur besar selesai.",
      },
      {
        featureTitle: "Feature Development & UI/UX Engineering",
        featureTitleId: "Pengembangan Fitur & Rekayasa UI/UX",
        story:
          "I delivered 49 new feature enhancements and UI/UX improvements, including the \"Share to Social Media\" tools and advanced Campaign List filtering with custom controller logic and responsive UI widgets. One of the most impactful changes was overhauling the campaign creation mapping experience — I completely refactored the MapWidget to dynamically react to camera movements, achieving immediate location synchronization and 100% accuracy in sub-district selection. I also fixed cross-device responsiveness issues, eliminating text overflow exceptions in the DrawerSideScreen by implementing Flexible layout constraints.",
        storyId:
          "Saya merilis 49 peningkatan fitur dan penyempurnaan UI/UX baru, termasuk fitur 'Bagikan ke Media Sosial' dan penyaringan daftar kampanye lanjutan. Salah satu perubahan paling berdampak adalah perombakan peta pembuatan kampanye—saya merefaktor MapWidget agar bereaksi dinamis terhadap pergerakan kamera, mencapai sinkronisasi lokasi seketika dan akurasi 100% dalam pemilihan kecamatan. Saya juga memperbaiki masalah responsivitas lintas perangkat pada DrawerSideScreen.",
        mediaUrl: "/apps/finance-app.png",
        mediaType: "image",
        impactOrOutcome:
          "49 feature/UI enhancements shipped. Map location synchronization accuracy improved to 100%.",
        impactOrOutcomeId:
          "49 peningkatan fitur/UI dirilis. Akurasi sinkronisasi lokasi peta mencapai 100%.",
      },
      {
        featureTitle: "System Stability & Bug Resolution",
        featureTitleId: "Stabilitas Sistem & Penyelesaian Bug",
        story:
          "I diagnosed and resolved 53 distinct software bugs across the frontend state and backend integration layers. One of the most critical was an authentication failure where the API returned a successful HTTP 200 response but produced a null UserModel object — a deep parsing bug that silently broke the Google OAuth sign-in flow. I also fortified user input validation in the Forgot Password flow by implementing strict state-checks for incorrect and invalid OTP submissions, and engineered a faster OAuth registration pipeline by identifying heavy vector assets and replacing .svg elements with lightweight .png images.",
        storyId:
          "Saya mendiagnosis dan menyelesaikan 53 bug perangkat lunak pada layer state frontend dan integrasi backend. Salah satu yang paling krusial adalah kegagalan autentikasi di mana API mengembalikan HTTP 200 namun menghasilkan objek UserModel null yang merusak alur masuk Google OAuth. Saya juga memperkuat validasi input pengguna pada alur Lupa Password dan mengoptimalkan kecepatan registrasi OAuth dengan mengganti aset vektor berat ke format gambar ringan.",
        mediaUrl: "/apps/finance-app.png",
        mediaType: "image",
        impactOrOutcome:
          "53 bugs resolved. Zero reported layout bottlenecks during user onboarding after OAuth optimization.",
        impactOrOutcomeId:
          "53 bug terselesaikan. Menghilangkan bottleneck layout pada onboarding pengguna.",
      },
    ],
  },
  "movie-vault": {
    slug: "movie-vault",
    title: "Movie Vault",
    tagline: "Your ultimate destination for discovering movies & TV shows",
    taglineId: "Teman setia eksplorasi film dan serial TV Anda",
    role: "Mobile Developer (Flutter)",
    roleId: "Mobile Developer (Flutter)",
    timeline: "Personal Project",
    timelineId: "Proyek Personal",
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Firebase Auth",
      "Cloud Firestore",
      "SQFlite",
      "TMDB API",
      "Freezed",
    ],
    coverImage: {
      url: "/apps/fitness-app.png",
      alt: "Movie Vault app - discover and explore movies and TV shows",
    },
    contributions: [
      {
        featureTitle: "Data Architecture & TMDB Integration",
        featureTitleId: "Arsitektur Data & Integrasi TMDB",
        story:
          "Designed a robust data layer using Riverpod for robust state management and data caching, alongside Freezed for type-safe JSON serialization. Integrated the TMDB API to fetch dynamic content such as Now Playing, Top Rated, and Upcoming movies and TV shows. Implemented secure API key management using the Envied package to keep credentials protected within the application.",
        storyId:
          "Merancang layer data yang andal menggunakan Riverpod untuk manajemen state dan caching data, serta Freezed untuk serialisasi JSON type-safe. Mengintegrasikan TMDB API untuk mengambil konten dinamis seperti Now Playing, Top Rated, dan Upcoming film serta serial TV. Menerapkan pengelolaan kunci API yang aman menggunakan paket Envied.",
        mediaUrl: "/apps/fitness-app.png",
        mediaType: "image",
        impactOrOutcome:
          "Seamless and performant data fetching with comprehensive caching using Riverpod.",
        impactOrOutcomeId:
          "Pengambilan data lancar dan performan dengan caching komprehensif menggunakan Riverpod.",
      },
      {
        featureTitle: "Authentication & Cloud Integration",
        featureTitleId: "Autentikasi & Integrasi Cloud",
        story:
          "Implemented a complete authentication flow using Firebase Auth (Email/Password & Google Sign-In) including secure password reset functionality. Connected the application to Cloud Firestore for remote database operations, allowing for future expansion of syncing user preferences and watch lists securely across devices.",
        storyId:
          "Menerapkan alur autentikasi lengkap menggunakan Firebase Auth (Email/Password & Google Sign-In) termasuk fitur reset password yang aman. Menghubungkan aplikasi ke Cloud Firestore untuk operasi database jarak jauh, memfasilitasi sinkronisasi preferensi pengguna dan daftar tontonan dengan aman lintas perangkat.",
        mediaUrl: "/apps/fitness-app.png",
        mediaType: "image",
        impactOrOutcome:
          "Secure user authentication and reliable cloud database architecture.",
        impactOrOutcomeId:
          "Autentikasi pengguna yang aman dan arsitektur database cloud yang andal.",
      },
      {
        featureTitle: "Local Storage & Watch List Management",
        featureTitleId: "Penyimpanan Lokal & Manajemen Daftar Tontonan",
        story:
          "Developed a personalized Watch List feature utilizing SQFlite for robust local database storage. This allows users to save and manage their favorite movies and TV shows efficiently on their device, providing quick access, search functionality, and a highly responsive user experience without relying constantly on network requests.",
        storyId:
          "Mengembangkan fitur Daftar Tontonan personal memanfaatkan SQFlite untuk penyimpanan database lokal. Memungkinkan pengguna menyimpan dan mengelola film serta serial TV favorit secara efisien di perangkat mereka dengan akses cepat, pencarian responsif, dan tanpa bergantung terus-menerus pada koneksi jaringan.",
        mediaUrl: "/apps/fitness-app.png",
        mediaType: "image",
        impactOrOutcome:
          "Fast and reliable offline access to personalized movie and TV show watch lists.",
        impactOrOutcomeId:
          "Akses offline yang cepat dan andal ke daftar tontonan film dan serial TV personal.",
      },
    ],
    githubUrl: "https://github.com/yoenas/MovieVault",
  },
  "auxonode-desktop": {
    slug: "auxonode-desktop",
    title: "Auxonode Desktop",
    tagline: "Cross-platform VPN, reimagined",
    taglineId: "VPN lintas platform, dirancang ulang",
    role: "Desktop Developer (CMP/Kotlin)",
    roleId: "Desktop Developer (CMP/Kotlin)",
    timeline: "Sep 2025 — May 2026",
    timelineId: "Sep 2025 — Mei 2026",
    techStack: [
      "Kotlin",
      "Compose Multiplatform",
      "Jetpack Compose",
      "Ktor",
      "kotlinx.serialization",
      "DataStore",
      "Coroutines & Flow",
      "OpenVPN",
      "WireGuard",
    ],
    coverImage: {
      url: "/apps/fitness-app.png",
      alt: "Auxonode Desktop — cross-platform VPN client for macOS and Windows",
    },
    contributions: [
      {
        featureTitle: "Vertical Slice Architecture Migration",
        featureTitleId: "Migrasi ke Vertical Slice Architecture",
        story:
          "The desktop app was built with a generic \"Package by Layer\" structure that made feature isolation impossible — a change in one domain could accidentally break another. I architected a complete migration to Feature-Driven Vertical Slice Architecture (Screaming Architecture), isolating domain logic across 10+ major feature modules with strict Bounded Contexts. I also modernized the entire data handling layer by replacing Gson with kotlinx.serialization to eliminate boilerplate in GenericHandler, migrated local storage to DataStore, and refactored UI state management into centralized ViewModels handling VpnUiState with proper state persistence across component changes.",
        storyId:
          "Aplikasi desktop sebelumnya dibangun dengan struktur lapis generik yang menyulitkan isolasi fitur. Saya merancang migrasi penuh ke Vertical Slice Architecture berbasis fitur, mengisolasi logika domain di lebih dari 10 modul fitur dengan Bounded Contexts yang ketat. Saya juga memodernisasi layer data dengan mengganti Gson ke kotlinx.serialization, memigrasikan penyimpanan lokal ke DataStore, dan memusatkan manajemen state ke ViewModel.",
        mediaUrl: "/apps/fitness-app.png",
        mediaType: "image",
        impactOrOutcome:
          "Reduced developer cognitive load across 10+ feature modules. Modified 2,363 files with a net addition of 7,088 lines.",
        impactOrOutcomeId:
          "Mengurangi beban kognitif developer di 10+ modul fitur. Memodifikasi 2.363 file dengan penambahan bersih 7.088 baris.",
      },
      {
        featureTitle: "Resilient Cross-Platform VPN Engine",
        featureTitleId: "Engine VPN Lintas Platform yang Tangguh",
        story:
          "I engineered a resilient VPN engine with seamless integration of both OpenVPN and WireGuard protocols for macOS and Windows. The engine achieves automated recovery during network gateway changes through persistent coroutine scopes and precise OS-level subprocess lifecycle management. I implemented Static DNS by developing executable bash scripts (set_dns.sh) running via sudoers to dynamically override and restore DNS servers at runtime without requiring repeated user password prompts. I also built real-time latency measurement for VPN servers with auto-sorting by speed, and created persistent network monitoring with isolated app-scale coroutine scopes that track upload/download bytes and connection duration — surviving component transitions without memory leaks.",
        storyId:
          "Saya merekayasa engine VPN dengan integrasi protokol OpenVPN dan WireGuard untuk macOS dan Windows. Engine ini mampu memulihkan koneksi secara otomatis saat terjadi perubahan gateway jaringan melalui coroutine scope persisten dan pengelolaan lifecycle subprocess tingkat OS. Saya juga menerapkan Static DNS dinamis dan monitoring jaringan persisten tanpa kebocoran memori.",
        mediaUrl: "/apps/fitness-app.png",
        mediaType: "image",
        impactOrOutcome:
          "Zero memory leak vulnerabilities. Automated VPN reconnection during gateway changes. Handled WireGuard binary auto-install on Windows.",
        impactOrOutcomeId:
          "Bebas dari celah kebocoran memori. Rekoneksi VPN otomatis saat gateway berubah.",
      },
      {
        featureTitle: "UI Overhaul & Auth Integration",
        featureTitleId: "Perombakan UI & Integrasi SSO Apple",
        story:
          "I led a massive redesign phase touching nearly every surface of the app — Dashboard, Package List, Settings, VPN Options, Connection Settings, Multiple Device management, and the complete Auth flow (Login, Register, Forgot Password, QR Code, Code Login). I integrated secure Apple OAuth SSO using Ktor and NimbusDS to process access tokens and redirect URLs, eliminated the heavy polling system in the QR Code login flow to reduce unnecessary network requests, and resolved severe bugs within the Register/Login/Logout states by centralizing the session token into a singleton. I also added native features like a Built-in Uninstaller, Feedback Screen, About Us, Contact Support, and Get Help screens, and fixed edge-case lifecycle bugs including graceful macOS quit handling (CMD+Q or X button) to safely disconnect VPN before process termination.",
        storyId:
          "Saya memimpin fase perombakan antarmuka besar-besaran yang mencakup Dashboard, Pengaturan, Opsi Koneksi, Pengelolaan Multi-Perangkat, dan seluruh alur Autentikasi. Mengintegrasikan Apple OAuth SSO aman menggunakan Ktor dan NimbusDS, meniadakan sistem polling berat pada alur QR Code login, serta memperbaiki penanganan event quit di macOS agar VPN terputus dengan aman sebelum proses dihentikan.",
        mediaUrl: "/apps/fitness-app.png",
        mediaType: "image",
        impactOrOutcome:
          "15+ core screens overhauled. Apple OAuth SSO integrated. Safe process termination on macOS quit events.",
        impactOrOutcomeId:
          "Merombak 15+ layar utama. Integrasi Apple OAuth SSO dan terminasi proses aman pada macOS.",
      },
    ],
  },
  "auxonode-android": {
    slug: "auxonode-android",
    title: "Auxonode Android",
    tagline: "Secure connectivity on the go",
    taglineId: "Konektivitas aman di mana pun Anda berada",
    role: "Mobile Developer (Android/Kotlin)",
    roleId: "Mobile Developer (Android/Kotlin)",
    timeline: "Jul — Sep 2025",
    timelineId: "Jul — Sep 2025",
    techStack: [
      "Kotlin",
      "Android SDK",
      "Jetpack Navigation",
      "OpenVPN",
      "WireGuard",
      "Gradle (AGP 8.8+)",
    ],
    coverImage: {
      url: "/apps/travel-app.png",
      alt: "Auxonode Android — VPN client with protocol management and subscription handling",
    },
    contributions: [
      {
        featureTitle: "VPN Engine & Protocol Upgrades",
        featureTitleId: "Peningkatan Engine VPN & Protokol",
        story:
          "I maintained and upgraded the core VPN engine by integrating newer, highly compatible binary files for both OpenVPN and WireGuard, while actively preparing the application architecture for Android's modern 16KB Page Size support. I engineered a reliable Static DNS routing mechanism for both protocols, resolving complex connection issues and ensuring user configurations are respected at the tunnel level. I also fixed critical bugs where the VPN connection state was stuck in \"CONNECTED\" or \"DISCONNECTED\", ensuring the UI accurately reflects background socket states, and resolved edge cases related to connection initialization right after client certificates are generated.",
        storyId:
          "Saya memelihara dan memperbarui engine inti VPN dengan mengintegrasikan file biner baru untuk OpenVPN dan WireGuard, sekaligus mempersiapkan arsitektur aplikasi untuk dukungan Page Size 16KB Android modern. Mengimplementasikan mekanisme perutean Static DNS yang andal untuk kedua protokol dan memperbaiki bug status koneksi yang macet.",
        mediaUrl: "/apps/travel-app.png",
        mediaType: "image",
        impactOrOutcome:
          "VPN engine upgraded for long-term stability. Static DNS routing implemented for both protocols. Architecture prepared for Android 16KB Page Sizes.",
        impactOrOutcomeId:
          "Engine VPN diperbarui untuk stabilitas jangka panjang. Perutean Static DNS diimplementasikan untuk kedua protokol.",
      },
      {
        featureTitle: "Auth, Subscription & UI Fixes",
        featureTitleId: "Perbaikan Autentikasi, Langganan & UI",
        story:
          "I streamlined authentication and session management by handling edge cases involving token refresh limits, unexpected logouts during network drops, and improving secure login via QR Code and PIN Code. I fixed Null Pointer Exceptions and force-closes occurring right after successful authorization in QR/Code Login flows, implemented mechanisms to gracefully handle Too Many Requests limits during token refresh cycles, and improved the Change Password flow UX. On the UI side, I overhauled the subscription cancellation UX to display buttons correctly depending on the user's plan state, fixed payment navigation crashes after webview completion, resolved device-specific layout bugs (FAB behavior on Infinix vendor ROMs), and enhanced registration form error field accessibility.",
        storyId:
          "Menyederhanakan manajemen autentikasi dan sesi dengan menangani edge cases token refresh, logout mendadak saat jaringan drop, serta mengamankan login via QR Code dan PIN. Memperbaiki force-close pada alur otorisasi, menyempurnakan alur pembatalan langganan dan mengatasi bug layout spesifik vendor perangkat (tombol aksi mengambang pada ROM Infinix).",
        mediaUrl: "/apps/travel-app.png",
        mediaType: "image",
        impactOrOutcome:
          "Zero force-closes in auth flows. Device-specific UI bugs resolved. Net reduction of 562 lines across 245 files.",
        impactOrOutcomeId:
          "Nol insiden force-close pada alur auth. Bug UI spesifik perangkat berhasil diselesaikan.",
      },
      {
        featureTitle: "Build System & Architecture Modernization",
        featureTitleId: "Modernisasi Build System & Arsitektur",
        story:
          "I optimized the codebase by upgrading the Android Gradle Plugin to 8.8.2 and Kotlin to 2.2.10, removing obsolete logic and bloated logs for better maintainability and performance. I added dynamic configurations to easily toggle API BaseURLs between Staging and Production environments, and executed a comprehensive cleanup of console loggers to ensure production security and reduce overhead.",
        storyId:
          "Mengoptimalkan codebase dengan memperbarui Android Gradle Plugin ke 8.8+ dan Kotlin ke 2.2+, membersihkan logika usang dan log berlebih untuk meningkatkan pemeliharaan dan performa. Menambahkan konfigurasi dinamis untuk beralih antara environment Staging dan Production.",
        mediaUrl: "/apps/travel-app.png",
        mediaType: "image",
        impactOrOutcome:
          "AGP upgraded to 8.8.2, Kotlin to 2.2.10. Production logger cleanup completed. Dynamic staging/production toggle added.",
        impactOrOutcomeId:
          "AGP diperbarui ke 8.8+, Kotlin ke 2.2+. Pembersihan log produksi selesai.",
      },
    ],
  },
}

/* ------------------------------------------------------------------ */
/*  Helper functions                                                   */
/* ------------------------------------------------------------------ */

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectDetails[slug]
}

export function getAdjacentProjects(slug: string): {
  prev: Project | undefined
  next: Project | undefined
} {
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) return { prev: undefined, next: undefined }

  const prev = index > 0 ? projects[index - 1] : undefined
  const next = index < projects.length - 1 ? projects[index + 1] : undefined

  return { prev, next }
}

export function getLocalizedProject(project: Project, lang: Language): Project {
  if (lang === "en") return project
  return {
    ...project,
    tagline: project.taglineId || project.tagline,
    description: project.descriptionId || project.description,
    metric: project.metricId || project.metric,
  }
}

export function getLocalizedProjectDetail(detail: ProjectDetail, lang: Language): ProjectDetail {
  if (lang === "en") return detail
  return {
    ...detail,
    tagline: detail.taglineId || detail.tagline,
    role: detail.roleId || detail.role,
    timeline: detail.timelineId || detail.timeline,
    contributions: detail.contributions.map((c) => ({
      ...c,
      featureTitle: c.featureTitleId || c.featureTitle,
      story: c.storyId || c.story,
      impactOrOutcome: c.impactOrOutcomeId || c.impactOrOutcome,
    })),
  }
}

/* ------------------------------------------------------------------ */
/*  Skills & Stack                                                     */
/* ------------------------------------------------------------------ */

export type SkillGroup = {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frameworks & Platforms",
    items: [
      "Flutter (iOS & Android)",
      "Compose Multiplatform (Desktop)",
      "Jetpack Compose",
      "Android SDK (Native)",
    ],
  },
  {
    category: "Programming Languages",
    items: [
      "Kotlin",
      "Dart",
      "Java",
      "Swift",
      "Bash / Shell Scripting",
    ],
  },
  {
    category: "Architecture & State",
    items: [
      "Clean Architecture & DDD",
      "Vertical Slice Architecture",
      "Riverpod & GetX",
      "MVVM & Bounded Contexts",
      "Kotlin Coroutines & Flow",
    ],
  },
  {
    category: "Networking & Protocols",
    items: [
      "OpenVPN & WireGuard",
      "Ktor & Dio (REST APIs)",
      "Static DNS Routing",
      "OAuth 2.0 (Apple & Google SSO)",
      "OS Subprocesses & Sockets",
    ],
  },
  {
    category: "Data & Persistence",
    items: [
      "Cloud Firestore & Firebase Auth",
      "SQLite & SQFlite",
      "Room Database",
      "Jetpack DataStore",
      "kotlinx.serialization & Freezed",
    ],
  },
  {
    category: "Tooling & Ecosystem",
    items: [
      "Gradle (AGP 9.4+) & Android Studio",
      "Git & GitHub Workflow",
      "Sentry Crash Reporting",
      "Flavorizr (Environment Config)",
      "macOS & Windows OS Integrations",
    ],
  },
]

export type Experience = {
  period: string
  periodId?: string
  role: string
  roleId?: string
  company: string
  description: string
  descriptionId?: string
  stack: string[]
}

export const experience: Experience[] = [
  {
    period: "Feb 2025 — Present",
    periodId: "Feb 2025 — Sekarang",
    role: "Mobile Developer (Flutter)",
    roleId: "Mobile Developer (Flutter)",
    company: "Rakhasa Artha Wisesa (Rumah Berkat)",
    description:
      "Decoupled legacy modules into Domain-Driven Design across 846 files, achieving a net reduction of ~4,800 lines of code to eliminate technical debt. Diagnosed and resolved 53 bugs including silent OAuth authentication failures, delivered 49 feature/UI enhancements, and overhauled campaign map location synchronization.",
    descriptionId:
      "Memisahkan modul legacy ke Domain-Driven Design di 846 file (pengurangan bersih ~4.800 baris kode untuk menekan technical debt). Mendiagnosis dan menyelesaikan 53 bug termasuk kegagalan autentikasi OAuth, merilis 49 peningkatan fitur/UI, dan menyempurnakan sinkronisasi peta kampanye.",
    stack: [
      "Flutter",
      "Dart",
      "GetX",
      "Clean Architecture",
      "Firebase",
      "Google Maps",
      "Dio",
    ],
  },
  {
    period: "Sep 2025 - May 2026",
    periodId: "Sep 2025 - Mei 2026",
    role: "Desktop Developer (CMP / Kotlin)",
    roleId: "Desktop Developer (CMP / Kotlin)",
    company: "Rakhasa Artha Wisesa (Auxonode Desktop)",
    description:
      "Architected a scalable Vertical Slice Architecture isolating 10+ feature modules and modernized data serialization using kotlinx.serialization and DataStore. Engineered a resilient cross-platform VPN engine with automated recovery for OpenVPN and WireGuard on macOS and Windows, overhauled 15+ core screens, and eliminated memory leak vulnerabilities and orphan subprocesses.",
    descriptionId:
      "Merancang Vertical Slice Architecture terisolasi di 10+ modul fitur dan memodernisasi serialisasi data dengan kotlinx.serialization serta DataStore. Merekayasa engine VPN lintas platform dengan pemulihan otomatis untuk OpenVPN dan WireGuard pada macOS dan Windows, merombak 15+ layar utama, serta meniadakan celah kebocoran memori.",
    stack: [
      "Compose Multiplatform",
      "Kotlin",
      "WireGuard",
      "OpenVPN",
      "Ktor",
      "DataStore",
      "Coroutines",
    ],
  },
  {
    period: "Jul — Sep 2025",
    periodId: "Jul — Sep 2025",
    role: "Android Developer (Kotlin)",
    roleId: "Android Developer (Kotlin)",
    company: "Rakhasa Artha Wisesa (Auxonode Android)",
    description:
      "Maintained and upgraded core VPN engine binaries for OpenVPN and WireGuard while preparing native architecture for Android 16KB Page Sizes. Implemented tunnel-level Static DNS routing, resolved persistent socket connection state bugs, fixed QR/PIN code authentication edge-cases, and modernized build configurations to AGP 8.8+ and Kotlin 2.2+.",
    descriptionId:
      "Memelihara dan memperbarui biner engine VPN inti OpenVPN dan WireGuard serta mempersiapkan arsitektur untuk dukungan Page Size 16KB Android. Menerapkan perutean Static DNS tingkat tunnel, menyelesaikan bug status soket, memperbaiki edge case auth QR/PIN, dan memodernisasi konfigurasi build ke AGP 8.8+ dan Kotlin 2.2+.",
    stack: [
      "Kotlin",
      "Android SDK",
      "OpenVPN",
      "WireGuard",
      "Jetpack Navigation",
      "Gradle",
    ],
  },
  {
    period: "Jun 2018 — Dec 2024",
    periodId: "Jun 2018 — Des 2024",
    role: "IT Teacher & Mobile Development Lead",
    roleId: "Pengajar IT & Koordinator Mobile Development",
    company: "SMK IDN Boarding School",
    description:
      "Led mobile programming curriculum across IDN branches, training 7-8 teachers and mentoring hundreds of students in Kotlin, Flutter, Java, and Swift. Guided student engineering teams through developing and deploying 18 production-level apps to the Google Play Store and supervised 10+ practical client projects.",
    descriptionId:
      "Memimpin kurikulum mobile programming di seluruh cabang IDN, melatih 7-8 pengajar dan membimbing ratusan siswa pada materi Kotlin, Flutter, Java, dan Swift. Membimbing tim siswa merilis 18 aplikasi produksi ke Google Play Store dan mensupervisi 10+ proyek klien praktis.",
    stack: [
      "Kotlin",
      "Flutter",
      "Android SDK",
      "Dart",
      "Java",
      "Swift",
      "Room",
      "MVVM",
    ],
  },
]

export function getLocalizedExperience(items: Experience[], lang: Language): Experience[] {
  if (lang === "en") return items
  return items.map((item) => ({
    ...item,
    role: item.roleId || item.role,
    period: item.periodId || item.period,
    description: item.descriptionId || item.description,
  }))
}
