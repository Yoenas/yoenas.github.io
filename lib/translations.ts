export type Language = "en" | "id"

export const translations = {
  en: {
    nav: {
      work: "Work",
      skills: "Skills",
      about: "About",
      experience: "Experience",
      contact: "Contact",
      getInTouch: "Get in touch",
      back: "Back",
      toggleAria: "Switch language to Bahasa Indonesia",
    },
    hero: {
      available: "Available for new projects",
      headline: "Building mobile apps people love to open every day.",
      viewWork: "View my work",
    },
    projects: {
      eyebrow: "Featured Work",
      title: "Apps I've Built",
      description:
        "A selection of cross-platform products built with Flutter and CMP.",
      viewCaseStudy: "View case study →",
    },
    skills: {
      eyebrow: "Skills & Stack",
      title: "The tools I reach for",
      description:
        "A battle-tested multiplatform toolkit honed across production Flutter apps, Kotlin/Compose desktop systems, and native mobile clients.",
      categories: {
        "Frameworks & Platforms": "Frameworks & Platforms",
        "Programming Languages": "Programming Languages",
        "Architecture & State": "Architecture & State",
        "Networking & Protocols": "Networking & Protocols",
        "Data & Persistence": "Data & Persistence",
        "Tooling & Ecosystem": "Tooling & Ecosystem",
      },
    },
    about: {
      eyebrow: "About",
      title: "Root-cause solver, dedicated educator",
      p1: (name: string, location: string) =>
        `I'm ${name}, a mobile app developer and educator based in ${location}. While I build intuitive apps from scratch using Kotlin, Dart, and Java, my deepest expertise lies in troubleshooting. I am a root-cause solver at heart—thriving in the trenches to diagnose complex bugs, eliminate technical debt, and stabilize intricate systems.`,
      p2: "I operate with relentless, single-context focus, immersing myself in a problem until it's permanently resolved and the codebase is cleaner than I found it. Having mentored student teams through deploying production-ready applications, I pair this diagnostic instinct with a firm commitment to clean architecture and building software that lasts.",
      stats: {
        years: "Years in mobile dev & tech education",
        bugs: "Production bugs diagnosed & squashed",
        apps: "Production apps guided to store release",
      },
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I've been",
      subtitle:
        "A track record of stabilizing complex codebases, leading multiplatform engineering, and mentoring future developers.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something great",
      description:
        "Have an app idea or an open role? Send a message or reach out directly — I usually reply within a day.",
      emailLabel: "Email",
      elsewhereLabel: "Elsewhere",
      nameLabel: "Name",
      namePlaceholder: "Jane Doe",
      emailFieldLabel: "Email",
      emailPlaceholder: "jane@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendIdle: "Send message",
      sendSending: "Sending...",
      sendSent: "Message sent — thanks!",
      sentNote: "I'll get back to you at the email you provided shortly.",
    },
    footer: {
      builtWith: "Built with React & Next.js.",
    },
    detail: {
      deepDive: "Deep Dive",
      contributionsTitle: "Contributions & Story",
      contributionsSubtitle:
        "The key features I designed and built, the problems I solved, and the technical decisions behind them.",
      nextProject: "Next Project",
      jumpTo: "Jump to:",
      allWork: "All work →",
      backToAllWork: "Back to all work",
      comingSoonBadge: "Coming Soon",
      comingSoonTitle: "More projects are in the works",
      comingSoonDesc:
        "You’ve explored all current case studies. More mobile and multiplatform applications are currently being designed and built.",
      imageUnavailable: "Image unavailable",
      impactLabel: "Impact & Outcome",
    },
  },
  id: {
    nav: {
      work: "Karya",
      skills: "Keahlian",
      about: "Tentang",
      experience: "Pengalaman",
      contact: "Kontak",
      getInTouch: "Hubungi saya",
      back: "Kembali",
      toggleAria: "Ganti bahasa ke Bahasa Inggris",
    },
    hero: {
      available: "Tersedia untuk proyek baru",
      headline: "Membangun aplikasi mobile yang andal, disukai, dan nyaman digunakan setiap hari.",
      viewWork: "Lihat karya saya",
    },
    projects: {
      eyebrow: "Karya Unggulan",
      title: "Aplikasi yang saya kembangkan",
      description:
        "Pilihan produk multiplatform yang dibangun menggunakan Flutter dan Compose Multiplatform.",
      viewCaseStudy: "Lihat studi kasus →",
    },
    skills: {
      eyebrow: "Keahlian & Teknologi",
      title: "Perangkat & teknologi andalan",
      description:
        "Toolkit multiplatform teruji yang diasah melalui pengembangan aplikasi produksi Flutter, sistem desktop Kotlin/Compose, dan aplikasi native mobile.",
      categories: {
        "Frameworks & Platforms": "Framework & Platform",
        "Programming Languages": "Bahasa Pemrograman",
        "Architecture & State": "Arsitektur & State",
        "Networking & Protocols": "Jaringan & Protokol",
        "Data & Persistence": "Data & Penyimpanan",
        "Tooling & Ecosystem": "Perangkat & Ekosistem",
      },
    },
    about: {
      eyebrow: "Tentang",
      title: "Penyelesai akar masalah, pendidik berdedikasi",
      p1: (name: string, location: string) =>
        `Saya ${name}, seorang mobile app developer dan edukator yang berbasis di ${location}. Meskipun saya membangun aplikasi intuitif dari awal menggunakan Kotlin, Dart, dan Java, keahlian terdalam saya terletak pada troubleshooting. Di lubuk hati, saya adalah seorang root-cause solver—andal dalam mendiagnosis bug kompleks, menyingkirkan technical debt, dan menstabilkan sistem yang rumit.`,
      p2: "Saya bekerja dengan fokus satu konteks tanpa henti, mendalami suatu permasalahan hingga tuntas secara permanen dan codebase menjadi lebih bersih dari sebelumnya. Berbekal pengalaman membimbing tim siswa dalam merilis aplikasi siap produksi, saya memadukan naluri diagnostik ini dengan komitmen teguh terhadap clean architecture dan pembangunan perangkat lunak yang berdaya tahan lama.",
      stats: {
        years: "Tahun di mobile dev & edukasi teknologi",
        bugs: "Bug produksi terdiagnosis & terselesaikan",
        apps: "Aplikasi produksi dibimbing hingga rilis",
      },
    },
    experience: {
      eyebrow: "Pengalaman Kerja",
      title: "Jejak karier & kontribusi",
      subtitle:
        "Rekam jejak dalam menstabilkan codebase kompleks, memimpin rekayasa multiplatform, dan membimbing calon developer.",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Mari bangun sesuatu yang luar biasa",
      description:
        "Punya ide aplikasi atau peluang kerja sama? Kirim pesan atau hubungi langsung — saya biasanya membalas dalam 1 hari kerja.",
      emailLabel: "Email",
      elsewhereLabel: "Tautan Lain",
      nameLabel: "Nama Lengkap",
      namePlaceholder: "Nama Anda",
      emailFieldLabel: "Alamat Email",
      emailPlaceholder: "nama@perusahaan.com",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan tentang proyek atau kebutuhan Anda...",
      sendIdle: "Kirim pesan",
      sendSending: "Mengirim...",
      sendSent: "Pesan terkirim — terima kasih!",
      sentNote: "Saya akan segera menghubungi Anda melalui email yang Anda cantumkan.",
    },
    footer: {
      builtWith: "Dibangun menggunakan React & Next.js.",
    },
    detail: {
      deepDive: "Ulasan Mendalam",
      contributionsTitle: "Kontribusi & Cerita Teknis",
      contributionsSubtitle:
        "Fitur utama yang saya rancang dan bangun, masalah yang saya selesaikan, serta keputusan teknis di baliknya.",
      nextProject: "Proyek Selanjutnya",
      jumpTo: "Lompat ke:",
      allWork: "Semua karya →",
      backToAllWork: "Kembali ke semua karya",
      comingSoonBadge: "Segera Hadir",
      comingSoonTitle: "Proyek lainnya sedang dalam proses",
      comingSoonDesc:
        "Anda telah menjelajahi seluruh studi kasus saat ini. Aplikasi mobile dan multiplatform baru sedang aktif dirancang dan dibangun.",
      imageUnavailable: "Gambar tidak tersedia",
      impactLabel: "Dampak & Hasil",
    },
  },
} as const
