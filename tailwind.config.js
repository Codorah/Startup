/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        codorah: {
          white: '#FFFFFF',
          light: '#F8F7FF',     // Fond principal clair légèrement teinté
          soft: '#F0EDF9',      // Fond secondaire (sections alternées)
          ink: '#0F0A1E',       // Texte principal (quasi noir)
          muted: '#6B7280',     // Texte secondaire
          neonViolet: '#7C3AED', // Violet principal (légèrement foncé pour contraste sur blanc)
          violet: '#8B5CF6',     // Violet secondaire
          gold: '#D97706',       // Or ambré pour CTAs (meilleur contraste sur blanc)
          goldLight: '#FDE68A',  // Or clair pour badges/accents
        }
      },
      backgroundImage: {
        'violet-gradient': 'linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #7C3AED 100%)',
        'soft-gradient': 'linear-gradient(135deg, #F8F7FF 0%, #EDE9FE 100%)',
      },
    },
  },
  plugins: [],
};
