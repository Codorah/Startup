import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata = {
  title: "Codorah - African Tech Startup",
  description: "Solutions numériques à fort impact adaptées aux réalités africaines.",
};

import { LanguageProvider } from '../context/LanguageContext';

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${syne.variable} ${plusJakartaSans.variable} ${jetBrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#050508] text-white selection:bg-[#8B5CF6]/30 relative font-sans">
        <LanguageProvider>
          {/* Grain Texture Overlay */}
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
          
          {/* Animated Background Global Glow */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-96 bg-codorah-neonViolet/20 blur-[150px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
          <Navbar />
          <main className="flex-grow z-10">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
