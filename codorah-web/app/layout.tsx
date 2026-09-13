import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Codorah | Ingénierie Logicielle, Solutions IA & Académie du Numérique',
  description:
    'Codorah propulse les entreprises et talents avec des solutions logicielles sur-mesure, de l\'IA de pointe et des formations technologiques d\'élite.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
