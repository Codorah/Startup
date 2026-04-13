"use client";
import { Link as LinkIcon, SendHorizontal, MessageSquare, Shield, Globe, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 px-8 border-t border-white/5 bg-[#050508] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="text-2xl font-bold tracking-tighter text-[#FFD700] italic font-heading uppercase">CODORAH</div>
        
        <div className="flex gap-6">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-codorah-gold hover:text-codorah-gold transition-all">
            <LinkIcon size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-codorah-gold hover:text-codorah-gold transition-all">
            <SendHorizontal size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:border-codorah-gold hover:text-codorah-gold transition-all">
            <MessageSquare size={18} />
          </a>
        </div>
        
        <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase flex flex-col items-center md:items-end">
          <span>Status: Production Ready v2.1</span>
          <span className="mt-1">Lomé, Togo • 🇹🇬</span>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-gray-600 uppercase pt-8 border-t border-white/[0.03]">
        <p>© 2024 Codorah. African Tech Startup. Made with ❤️</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
        </div>
      </div>
    </footer>
  );
}
