export const CODORAH_TRANSLATIONS = {
  FR: {
    hero: {
      title: "CODORAH",
      subtitle: "with codorah, code the change you dream of",
      description: "Solutions numériques à fort impact adaptées aux réalités africaines. Transformez vos idées en produits digitaux fonctionnels.",
      tagline: "a small code, a big change",
      badge: "African Tech Startup",
      cta1: "Démarrer un Projet",
      cta2: "Nos Services",
      codeSnippet: "const codorah = {\n  mission: \"Transform Africa\",\n  tools: [\"IA\", \"No-Code\"],\n  impact: ∞\n}\nawait codorah.build(\"your_dream\")"
    },
    about: {
      title: "Innovation technologique Made in Africa",
      description: "Fondée au Togo par une entrepreneure visionnaire, Codorah développe des solutions numériques adaptées aux réalités locales. Nous accompagnons les organisations dans la conception et réalisation de projets digitaux concrets via l'IA et des outils créatifs accessibles.",
      vision: "Construire un écosystème où l'innovation technologique africaine est accessible, efficace et centrée sur les besoins locaux.",
      audience: "Entrepreneurs africains, porteurs de projets, PME, créateurs de contenu, organisations éducatives et startups.",
      stats: [
        { prefix: "🇹🇬", title: "Fondée au Togo" },
        { prefix: "100%", title: "Orienté Résultats" },
        { prefix: "🌍", title: "Vision Panafricaine" }
      ]
    },
    vision: {
      quote: "L'IA est une Ferrari, mais as-tu le permis ? As-tu l'essence ?",
      author: "Elodie Atana",
      role: "Founding Architect // Codorah Group"
    },
    services: [
      { id: 'dev-web', icon: 'Globe', title: "Sites Web No-Code & Pro", desc: "Sites vitrine responsive, landing pages business, e-commerce et optimisation de votre présence en ligne. Livraison rapide, design premium.", features: ["Sites Vitrine & Landing Pages", "E-Commerce", "Optimisation SEO", "Responsive Mobile"] },
      { id: 'dev-app', icon: 'Smartphone', title: "Applications Mobiles & Web", desc: "Développement d'applications web SaaS, mobiles (iOS & Android) et PWA adaptées à vos besoins métier africains.", features: ["React / Next.js / Flutter", "API & Backend", "Base de données", "PWA & App Stores"] },
      { id: 'ia-automatisation', icon: 'Cpu', title: "IA & Automatisation", desc: "Optimisation de vos flux de travail via l'IA : prompts personnalisés, automatisation des tâches digitales et intégration d'outils intelligents.", features: ["Prompts Personnalisés", "Automatisation de Tâches", "Intégration LLM", "Gain de Temps"] },
      { id: 'creative-ai', icon: 'Palette', title: "Outils Créatifs IA", desc: "Génération d'images, création de contenus marketing et design assisté par IA pour booster votre communication visuelle.", features: ["Génération d'Images IA", "Contenus Marketing", "Design Assisté IA", "Branding Canva"] },
      { id: 'ia-formation', icon: 'GraduationCap', title: "Formations IA & No-Code", desc: "Formations certifiantes en Intelligence Artificielle, Prompt Engineering et outils No-Code pour individus et entreprises.", features: ["Attestations Certifiées", "Ateliers Pratiques", "Prompt Engineering", "Support Post-Formation"] },
      { id: 'google', icon: 'Search', title: "Présence Google & SEO", desc: "Configuration Google Business, SEO local et optimisation de votre profil pour dominer les résultats de recherche dans votre zone.", features: ["Google Business Profile", "SEO Local", "Référencement Technique", "Trafic Organique"] }
    ],
    process: {
      title: "Notre Méthodologie",
      steps: [
        { id: "1", title: "Découverte", subtitle: "Analyse", desc: "Analyse profonde de vos besoins, objectifs et contexte pour définir la meilleure approche." },
        { id: "2", title: "Conception", subtitle: "Design", desc: "Maquettes, prototypes et planification stratégique pour cadrer votre vision." },
        { id: "3", title: "Développement", subtitle: "Engineering", desc: "Réalisation agile avec les meilleures technologies, itération rapide et ajustements continus." },
        { id: "4", title: "Lancement", subtitle: "Déploiement", desc: "Mise en ligne, support à long terme et monitoring pour un succès durable." }
      ]
    },
    whyUs: {
      title: "Pourquoi choisir Codorah ?",
      points: [
        { icon: 'MapPin', title: "Contexte Africain", desc: "Solutions conçues et adaptées aux réalités du continent africain." },
        { icon: 'Zap', title: "Action & Résultats", desc: "Approche pragmatique axée sur l'impact immédiat et mesurable." },
        { icon: 'Heart', title: "Tech + Humain", desc: "Alliance de la technologie et d'un accompagnement personnalisé." },
        { icon: 'Box', title: "Modulaire", desc: "Architectures évolutives, du MVP à l'entreprise." },
        { icon: 'Globe', title: "Vision Panafricaine", desc: "Expertise internationale avec un cœur résolument africain." }
      ]
    },
    projects: [
      { id: "saygoo", title: "SAYGOO Platform", category: "SaaS / Plateforme", description: "Plateforme digitale complète. Architecture technique et Backend.", tags: ["Next.js", "Supabase", "React"] },
      { id: "clinic-plus", title: "Clinic+", category: "Santé / Mobile App", description: "Application mobile médicale innovante avec IA.", tags: ["Flutter", "Firebase", "IA"] },
      { id: "barsafe", title: "BarSafe", category: "SaaS / Sécurité", description: "Sécurisation de la gestion des établissements de nuit.", tags: ["React", "Supabase RLS", "Tailwind"] },
      { id: "vortex", title: "Vortex", category: "Expérimental / 3D", description: "Interface expérimentale 3D futuriste.", tags: ["Three.js", "R3F", "Motion"] },
      { id: "linkedin", title: "LinkedIn Trans", category: "IA Générative", description: "Transformation de posts LinkedIn par IA.", tags: ["Prompt Eng", "OpenAI"] },
      { id: "mange-quoi", title: "Ce Soir On Mange Quoi ?", category: "PWA", description: "Suggestions de recettes locales offline.", tags: ["PWA", "IndexedDB"] }
    ],
    team: [
      { name: "ATANA ELODIE H.", role: "Founder & AI Architect", bio: "Serial entrepreneure et architecte de l'innovation.", image: "/assets/team/elodie.png", specialty: "AI | Architecture", cv: "#", linkedin: "#" },
      { name: "TÉBIÉ JOËL", role: "Co-Founder & Tech Director", bio: "Le métronome technologique de Codorah.", image: "/assets/team/joel.png", specialty: "FullStack", cv: "#", linkedin: "#" },
      { name: "ADJESSO ELVIS", role: "Head of Cybersecurity", bio: "Gardien de l'intégrité numérique.", image: "/assets/team/elvis.png", specialty: "Security | Pentest", cv: "#", linkedin: "#" },
      { name: "TOUGLO MAXIME", role: "Senior Backend Engineer", bio: "Maître des infrastructures robustes.", image: "/assets/team/maxime.png", specialty: "API | Database", cv: "#", linkedin: "#" },
      { name: "ERIC K.", role: "Junior Innovation Dev", bio: "La nouvelle garde de l'informatique.", image: "/assets/team/eric.png", specialty: "Frontend | Agile", cv: "#", linkedin: "#" }
    ],
    contact: { title: "Prêt à transformer votre idée ?", desc: "Contactez-nous pour discuter de votre projet." }
  },
  EN: {
    hero: {
      title: "CODORAH",
      subtitle: "with codorah, code the change you dream of",
      description: "High-impact digital solutions adapted to African realities. Transform your ideas into functional digital products.",
      tagline: "a small code, a big change",
      badge: "African Tech Startup",
      cta1: "Start a Project",
      cta2: "Our Services",
      codeSnippet: "const codorah = {\n  mission: \"Transform Africa\",\n  tools: [\"AI\", \"No-Code\"],\n  impact: ∞\n}\nawait codorah.build(\"your_dream\")"
    },
    about: {
      title: "Tech Innovation Made in Africa",
      description: "Founded in Togo by a visionary entrepreneur, Codorah develops digital solutions adapted to local realities. We support organizations in the conception and delivery of concrete digital projects through AI and accessible creative tools.",
      vision: "To build an ecosystem where African tech innovation is accessible, effective and centered on local needs.",
      audience: "African entrepreneurs, project owners, SMEs, content creators, educational organizations and startups.",
      stats: [
        { prefix: "🇹🇬", title: "Founded in Togo" },
        { prefix: "100%", title: "Results Oriented" },
        { prefix: "🌍", title: "Pan-African Vision" }
      ]
    },
    vision: {
      quote: "AI is a Ferrari, but do you have the license? Do you have the fuel?",
      author: "Elodie Atana",
      role: "Founding Architect // Codorah Group"
    },
    services: [
      { id: 'dev-web', icon: 'Globe', title: "No-Code & Pro Websites", desc: "Responsive showcase sites, business landing pages, e-commerce and online presence optimization. Fast delivery, premium design.", features: ["Showcase Sites & Landing Pages", "E-Commerce", "SEO Optimization", "Mobile Responsive"] },
      { id: 'dev-app', icon: 'Smartphone', title: "Mobile & Web Apps", desc: "Development of SaaS web apps, mobile apps (iOS & Android) and PWAs tailored to your African business needs.", features: ["React / Next.js / Flutter", "API & Backend", "Database", "PWA & App Stores"] },
      { id: 'ia-automatisation', icon: 'Cpu', title: "AI & Automation", desc: "Optimize your workflows with AI: custom prompts, digital task automation and intelligent tool integration.", features: ["Custom Prompts", "Task Automation", "LLM Integration", "Time Savings"] },
      { id: 'creative-ai', icon: 'Palette', title: "AI Creative Tools", desc: "Image generation, marketing content creation and AI-assisted design to boost your visual communication.", features: ["AI Image Generation", "Marketing Content", "AI-Assisted Design", "Canva Branding"] },
      { id: 'ia-formation', icon: 'GraduationCap', title: "AI & No-Code Training", desc: "Certifying training in Artificial Intelligence, Prompt Engineering and No-Code tools for individuals and businesses.", features: ["Certified Attestations", "Practical Workshops", "Prompt Engineering", "Post-Training Support"] },
      { id: 'google', icon: 'Search', title: "Google & SEO Presence", desc: "Google Business configuration, local SEO and profile optimization to dominate search results in your area.", features: ["Google Business Profile", "Local SEO", "Technical SEO", "Organic Traffic"] }
    ],
    process: {
      title: "Our Methodology",
      steps: [
        { id: "1", title: "Discovery", subtitle: "Analysis", desc: "Deep analysis of your needs, goals and context to define the best approach." },
        { id: "2", title: "Design", subtitle: "Conception", desc: "Wireframes, prototypes and strategic planning to frame your vision." },
        { id: "3", title: "Build", subtitle: "Engineering", desc: "Agile development with the best technologies, fast iterations and continuous adjustments." },
        { id: "4", title: "Launch", subtitle: "Deployment", desc: "Go-live, long-term support and monitoring for sustainable success." }
      ]
    },
    whyUs: {
      title: "Why choose Codorah?",
      points: [
        { icon: 'MapPin', title: "African Context", desc: "Solutions designed and adapted to the realities of the African continent." },
        { icon: 'Zap', title: "Action & Results", desc: "Pragmatic approach focused on immediate, measurable impact." },
        { icon: 'Heart', title: "Tech + Human", desc: "Alliance of technology and personalized, hands-on support." },
        { icon: 'Box', title: "Modular", desc: "Scalable architectures, from MVP to enterprise." },
        { icon: 'Globe', title: "Pan-African Vision", desc: "International expertise with a resolute African heart." }
      ]
    },
    projects: [
      { id: "saygoo", title: "SAYGOO Platform", category: "SaaS / Platform", description: "Complete digital platform. Tech architecture and Backend.", tags: ["Next.js", "Supabase", "React"] },
      { id: "clinic-plus", title: "Clinic+", category: "Health / Mobile App", description: "Innovative medical mobile app with AI.", tags: ["Flutter", "Firebase", "AI"] },
      { id: "barsafe", title: "BarSafe", category: "SaaS / Security", description: "Night establishment management and security.", tags: ["React", "Supabase RLS", "Tailwind"] },
      { id: "vortex", title: "Vortex", category: "Experimental / 3D", description: "Futuristic experimental 3D interface.", tags: ["Three.js", "R3F", "Motion"] },
      { id: "linkedin", title: "LinkedIn Trans", category: "Generative AI", description: "LinkedIn post transformation using AI.", tags: ["Prompt Eng", "OpenAI"] },
      { id: "mange-quoi", title: "What's For Dinner?", category: "PWA", description: "Local recipe suggestions offline.", tags: ["PWA", "IndexedDB"] }
    ],
    team: [
      { name: "ATANA ELODIE H.", role: "Founder & AI Architect", bio: "Serial entrepreneur and innovation architect.", image: "/assets/team/elodie.png", specialty: "AI | Architecture", cv: "#", linkedin: "#" },
      { name: "TÉBIÉ JOËL", role: "Co-Founder & Tech Director", bio: "The technological metronome of Codorah.", image: "/assets/team/joel.png", specialty: "FullStack", cv: "#", linkedin: "#" },
      { name: "ADJESSO ELVIS", role: "Head of Cybersecurity", bio: "Guardian of digital integrity.", image: "/assets/team/elvis.png", specialty: "Security | Pentest", cv: "#", linkedin: "#" },
      { name: "TOUGLO MAXIME", role: "Senior Backend Engineer", bio: "Master of robust infrastructures.", image: "/assets/team/maxime.png", specialty: "API | Database", cv: "#", linkedin: "#" },
      { name: "ERIC K.", role: "Junior Innovation Dev", bio: "The new guard of IT.", image: "/assets/team/eric.png", specialty: "Frontend | Agile", cv: "#", linkedin: "#" }
    ],
    contact: { title: "Ready to transform your idea?", desc: "Contact us to discuss your project." }
  },
  ES: {
    hero: {
      title: "CODORAH",
      subtitle: "Forjando el futuro con IA",
      description: "Soluciones digitales de alto impacto adaptadas a la realidad africana.",
      tagline: "un pequeño código, un gran cambio",
      codeSnippet: "const codorah = {\n  misión: \"Transformar África\",\n  herramientas: [\"IA\", \"No-Code\"],\n  impacto: ∞\n}"
    },
    about: { title: "Innovación Hecha en África", vision: "Construir un ecosistema donde la innovación resuelva los desafíos diarios.", stats: [
      { prefix: "🇹🇬", title: "Fundada en Togo" }, { prefix: "100%", title: "Orientada al Impacto" }, { prefix: "🌍", title: "Visión Panafricana" }
    ] },
    vision: { quote: "¿La IA es un Ferrari, pero tienes carné? ¿Tienes gasolina?", author: "Elodie Atana", role: "Arquitecta Fundadora" },
    services: [
      { id: 'dev-web', icon: 'Globe', title: "Creación de Sitios Web", desc: "Sitios vitrina, landing pages y plataformas web a medida. Diseño premium, rápido y optimizado para SEO.", features: ["Diseño Personalizado", "Optimización SEO", "Rendimiento", "Móvil Responsivo"] },
      { id: 'dev-app', icon: 'Smartphone', title: "Apps Móviles & Web", desc: "Desarrollo de aplicaciones web SaaS, móviles (iOS & Android) y PWA adaptadas al contexto africano.", features: ["React / Next.js / Flutter", "API & Backend", "Base de datos", "PWA & Tiendas"] },
      { id: 'ia-formation', icon: 'GraduationCap', title: "Formación en IA & No-Code", desc: "Formación certificada en Inteligencia Artificial, Prompt Engineering y herramientas No-Code.", features: ["Certificaciones", "Talleres Prácticos", "Prompt Engineering", "Soporte Post-Formación"] }
    ],
    process: { title: "Nuestra Metodología", steps: [
      { id: "1", title: "Análisis", subtitle: "Inmersión", desc: "Comprensión profunda de necesidades." },
      { id: "2", title: "Diseño", subtitle: "Arquitectura", desc: "Soluciones robustas centradas en el usuario." },
      { id: "3", title: "Build", subtitle: "Ingeniería", desc: "Desarrollo iterativo con últimas tecnologías." },
      { id: "4", title: "Pulse", subtitle: "Despliegue", desc: "Lanzamiento y monitoreo para el éxito." }
    ] },
    whyUs: { title: "¿Por qué Codorah?", points: [
      { icon: 'Zap', title: "Velocidad", desc: "Entrega rápida vía IA/No-Code." },
      { icon: 'Shield', title: "Seguridad", desc: "Protección de datos sensibles." },
      { icon: 'Users', title: "Local", desc: "Soluciones para el contexto africano." },
      { icon: 'Box', title: "Modular", desc: "Arquitecturas escalables." },
      { icon: 'Globe', title: "Visión", desc: "Expertise internacional, corazón africano." }
    ] },
    projects: [
      { id: "saygoo", title: "SAYGOO Platform", category: "SaaS / Plataforma", description: "Plataforma digital completa.", tags: ["Next.js", "Supabase"] },
      { id: "clinic-plus", title: "Clinic+", category: "Salud / App", description: "App médica con IA.", tags: ["Flutter", "Firebase"] },
      { id: "barsafe", title: "BarSafe", category: "SaaS / Seguridad", description: "Gestión de establecimientos nocturnos.", tags: ["React", "Tailwind"] }
    ],
    team: [
      { name: "ATANA ELODIE H.", role: "Fundadora & Arquitecta IA", bio: "Empresaria serial y arquitecta de innovación.", image: "/assets/team/elodie.png", specialty: "AI | Arquitectura", cv: "#", linkedin: "#" },
      { name: "TÉBIÉ JOËL", role: "Co-Fundador & Director Técnico", bio: "El metrónomo tecnológico de Codorah.", image: "/assets/team/joel.png", specialty: "FullStack", cv: "#", linkedin: "#" },
      { name: "ADJESSO ELVIS", role: "Jefe de Ciberseguridad", bio: "Guardián de la integridad digital.", image: "/assets/team/elvis.png", specialty: "Security", cv: "#", linkedin: "#" }
    ],
    contact: { title: "¿Listo para transformar tu idea?", desc: "Contáctanos para hablar de tu proyecto." }
  },
  ZH: {
    hero: {
      title: "CODORAH",
      subtitle: "利用人工智能共创未来",
      description: "适应非洲现实的高影响力数字解决方案。",
      tagline: "小代码，大变革",
      codeSnippet: "const codorah = {\n  使命: \"改变非洲\",\n  工具: [\"人工智能\", \"无代码\"],\n  影响: ∞\n}"
    },
    about: { title: "源自非洲的创新", vision: "建立一个技术创新解决日常挑战的生态系统。", stats: [
      { prefix: "🇹🇬", title: "创立于多哥" }, { prefix: "100%", title: "以影响力为导向" }, { prefix: "🌍", title: "非洲愿景" }
    ] },
    vision: { quote: "人工智能是一辆法拉利，但你有驾照吗？你有汽油吗？", author: "Elodie Atana", role: "创始架构师" },
    services: [
      { id: 'dev-web', icon: 'Globe', title: "网站创建", desc: "定制展示网站、落地页和网络平台。高端设计、高性能且经过SEO优化。", features: ["定制设计", "SEO优化", "高性能", "移动响应"] },
      { id: 'dev-app', icon: 'Smartphone', title: "移动与网页应用", desc: "开发SaaS网页应用、移动应用（iOS & Android）和PWA，适应非洲业务需求。", features: ["React / Next.js / Flutter", "API & 后端", "数据库", "PWA & 应用商店"] },
      { id: 'ia-formation', icon: 'GraduationCap', title: "AI与无代码培训", desc: "面向个人和企业的人工智能、提示词工程和无代码工具认证培训。", features: ["专业认证", "实践工作坊", "提示词工程", "后期支持"] }
    ],
    process: { title: "我们的方法论", steps: [
      { id: "1", title: "分析", subtitle: "深度调研", desc: "深入了解用户需求和挑战。" },
      { id: "2", title: "设计", subtitle: "架构", desc: "以用户为中心的解决方案。" },
      { id: "3", title: "构建", subtitle: "工程", desc: "使用最新技术进行迭代开发。" },
      { id: "4", title: "上线", subtitle: "部署", desc: "发布和监控以确保持续成功。" }
    ] },
    whyUs: { title: "为什么选择 Codorah？", points: [
      { icon: 'Zap', title: "速度", desc: "通过AI/无代码工具快速交付。" },
      { icon: 'Shield', title: "安全", desc: "敏感数据的审计与保护。" },
      { icon: 'Users', title: "本地化", desc: "专为非洲情境设计的解决方案。" },
      { icon: 'Box', title: "模块化", desc: "可扩展和可维护的架构。" },
      { icon: 'Globe', title: "愿景", desc: "国际专业知识，非洲之心。" }
    ] },
    projects: [
      { id: "saygoo", title: "SAYGOO 平台", category: "SaaS / 平台", description: "完整数字平台架构。", tags: ["Next.js", "Supabase"] },
      { id: "clinic-plus", title: "Clinic+", category: "医疗 / 应用", description: "带AI的创新医疗应用。", tags: ["Flutter", "Firebase"] },
      { id: "barsafe", title: "BarSafe", category: "SaaS / 安全", description: "夜间场所管理安全系统。", tags: ["React", "Tailwind"] }
    ],
    team: [
      { name: "ATANA ELODIE H.", role: "创始人 & AI架构师", bio: "连续创业者和创新架构师。", image: "/assets/team/elodie.png", specialty: "AI | 架构", cv: "#", linkedin: "#" },
      { name: "TÉBIÉ JOËL", role: "联合创始人 & 技术总监", bio: "Codorah的技术节拍器。", image: "/assets/team/joel.png", specialty: "全栈", cv: "#", linkedin: "#" },
      { name: "ADJESSO ELVIS", role: "网络安全主管", bio: "数字完整性的守护者。", image: "/assets/team/elvis.png", specialty: "安全", cv: "#", linkedin: "#" }
    ],
    contact: { title: "准备好转化你的想法了吗？", desc: "联系我们讨论您的项目。" }
  }
};
