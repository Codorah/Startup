# CODORAH — African Tech Startup Platform v2.1

<div align="center">

![Codorah Banner](https://img.shields.io/badge/CODORAH-African%20Tech%20Startup-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=for-the-badge&logo=framer)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel)

**Made with ❤️ in Lomé, Togo 🇹🇬**

[Live Demo](https://codorah-v2.vercel.app) · [LinkedIn](https://www.linkedin.com/in/codorah) · [GitHub](https://github.com/Codorah)

</div>

---

## 🚀 Overview

**Codorah** is a pan-African tech startup based in Lomé, Togo. This repository contains the official company platform — a fully multilingual, high-performance Next.js web application showcasing Codorah's services, team, vision, and projects.

The platform is designed to convey **professionalism, innovation, and African identity** through a premium visual experience powered by 3D, animations, and a clean design system.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🌍 **Multilingual** | Full support for 🇫🇷 French, 🇬🇧 English, 🇪🇸 Spanish, 🇨🇳 Chinese |
| 💬 **WhatsApp Booking** | Each service card triggers a pre-filled WhatsApp message for instant appointment booking |
| 🎨 **Premium Design** | Glassmorphism, gradient accents, micro-animations, custom cursor |
| 🌐 **3D Hero Scene** | Three.js powered interactive 3D background in the hero section |
| 📱 **Fully Responsive** | Mobile-first design with adaptive layouts |
| ⚡ **Scroll Animations** | Framer Motion scroll-linked timeline animations |
| 🔒 **Privacy & Terms Modals** | GDPR-compliant modal dialogs directly in the footer |
| 🧭 **Side Navigation** | Fixed dot-based side navigation for quick section jumping |

---

## 🛠 Tech Stack

```
Framework    →  Next.js 16 (App Router) + Turbopack
Styling      →  Tailwind CSS v3
Animations   →  Framer Motion
3D           →  Three.js (via dynamic import, SSR disabled)
Icons        →  Lucide React
Language     →  JavaScript (JSX) + TypeScript (UI primitives)
Deployment   →  Vercel
```

---

## 📁 Project Structure

```
codorah-v2/
├── public/
│   └── assets/
│       ├── team/           # Team member photos (elodie.png, joel.png, etc.)
│       └── logo-removebg-preview.png
│
├── src/
│   ├── app/
│   │   ├── layout.js       # Root layout with fonts, metadata, Navbar, Footer
│   │   ├── page.js         # Main homepage — assembles all sections
│   │   ├── globals.css     # Global styles, CSS variables, font imports
│   │   ├── equipe/         # /equipe standalone route
│   │   ├── projets/        # /projets standalone route
│   │   └── services/       # /services standalone route
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav with scroll progress bar + language switcher
│   │   ├── Footer.jsx          # Footer with social links + Privacy/Terms modals
│   │   ├── AboutSection.jsx    # "Our Story" — mission, vision, stats
│   │   ├── VisionSection.jsx   # Founder quote section with AI analogy
│   │   ├── ServicesGrid.jsx    # Service cards with WhatsApp booking modal
│   │   ├── ProcessSection.jsx  # "Why Us" + scroll-linked timeline methodology
│   │   ├── TeamSection.jsx     # Founder profile card (Elodie Atana)
│   │   ├── ContactSection.jsx  # Contact form section
│   │   ├── TechMarquee.jsx     # Animated tech stack marquee (purple bar)
│   │   ├── ThreeScene.jsx      # Three.js 3D background (SSR disabled)
│   │   ├── ScrambleText.jsx    # Text scramble animation effect
│   │   ├── SideNav.jsx         # Fixed dot navigation on right side
│   │   ├── Magnetic.jsx        # Magnetic hover effect wrapper
│   │   ├── CustomCursor.jsx    # Custom cursor component
│   │   ├── ProjectCard.jsx     # Individual project card component
│   │   ├── ProjectsSection.jsx # Projects showcase grid
│   │   └── ui/                 # Base UI primitives (Button, Input, Textarea, etc.)
│   │
│   ├── context/
│   │   └── LanguageContext.jsx # Global language state (FR/EN/ES/ZH)
│   │
│   └── data/
│       ├── codorah.js          # All multilingual content (translations object)
│       ├── projects.js         # Projects data with live links
│       └── team.js             # Team members data (deprecated — now in codorah.js)
│
├── vercel.json             # Vercel deployment configuration
├── tailwind.config.js      # Tailwind theme (fonts, colors, animations)
└── next.config.mjs         # Next.js configuration
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js ≥ 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Codorah/Startup.git
cd Startup

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic deployments on every push to the `main` branch.

**Live URL:** [codorah-v2.vercel.app](https://codorah-v2.vercel.app)

The `vercel.json` at the root configures:
- Framework: Next.js
- Build command: `npm run build`
- Install command: `npm install`

---

## 📋 Environment Variables

No environment variables are required for the base deployment. The WhatsApp number is configured directly in `ServicesGrid.jsx`:

```js
// src/components/ServicesGrid.jsx
const WHATSAPP_NUMBER = "22871672565"; // International format without '+'
```

---

## 🗂 Content Management

All textual content is centralized in **`src/data/codorah.js`** as a translations object. To update content:

```js
export const CODORAH_TRANSLATIONS = {
  FR: {
    hero: { title, subtitle, description, ... },
    about: { title, description, vision, stats },
    services: [ { id, icon, title, desc, features } ],
    team: [ { name, role, bio, image, specialty, cv, linkedin } ],
    // ...
  },
  EN: { /* same structure */ },
  ES: { /* same structure */ },
  ZH: { /* same structure */ },
};
```

---

## 📞 Contact & Social

| Platform | Link |
|---|---|
| 🔗 LinkedIn | [linkedin.com/in/codorah](https://www.linkedin.com/in/codorah) |
| 💻 GitHub | [github.com/Codorah](https://github.com/Codorah) |
| 🌐 Portfolio | [portfolio-js-elodie.vercel.app](https://portfolio-js-elodie.vercel.app) |
| 💬 WhatsApp | +228 71 67 25 65 |

---

## 📄 License

© 2025 Codorah. All rights reserved.

This project is proprietary software. Unauthorized copying, distribution, or modification without explicit written permission from Codorah is strictly prohibited.

---

<div align="center">

**CODORAH · African Tech Startup · Lomé, Togo 🇹🇬**

*"A small code, a big change."*

</div>
