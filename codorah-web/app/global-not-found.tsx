import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Page introuvable | Codorah',
};

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="absolute inset-0 bg-grid-dots opacity-50 pointer-events-none" />
          <p className="section-label relative">Erreur 404</p>
          <h1 className="display-md relative mt-4">Cette page est introuvable.</h1>
          <p className="relative mt-4 max-w-md text-slate-500">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link href="/fr" className="btn-violet relative mt-8">
            Retour à l&apos;accueil
          </Link>
        </main>
      </body>
    </html>
  );
}
