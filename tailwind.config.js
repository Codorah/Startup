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
          black: '#050508', // Fond principal
          darkViolet: '#1A0B2E', // Backgrounds secondaires
          neonViolet: '#8B5CF6', // Glow effects et hover
          gold: '#FFD700', // Call to actions et typographie accentuée
        }
      },
      backgroundImage: {
        'violet-gradient': 'linear-gradient(to right bottom, #1A0B2E, #050508)',
      },
    },
  },
  plugins: [],
};
