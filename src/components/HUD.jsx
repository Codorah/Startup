import Link from 'next/link';

export default function HUD() {
  return (
    <div className="fixed top-0 left-0 w-full px-8 py-4 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-8 py-3 pointer-events-auto">
        <Link href="/" className="text-white font-black tracking-widest text-xl hover:text-codorah-gold transition-colors">
          CODORAH <span className="text-codorah-gold">HUB</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm font-mono tracking-widest text-gray-400">
          <Link href="/services" className="hover:text-white transition-colors">SERVICES</Link>
          <Link href="/projets" className="hover:text-white transition-colors">PROJETS</Link>
          <Link href="/equipe" className="hover:text-white transition-colors">ÉQUIPE</Link>
          <div className="h-[15px] w-[1px] bg-white/10 ml-2"></div>
          <a href="#contact" className="ml-2 px-6 py-2 bg-codorah-gold text-codorah-black font-bold rounded-full hover:bg-white hover:text-codorah-black transition-all">
            DÉMARRER UN PROJET
          </a>
        </nav>
      </div>
    </div>
  );
}
