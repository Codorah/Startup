/**
 * @file Footer.jsx
 * @description Site footer with:
 *  - Codorah brand logo + anchor navigation links
 *  - Social icons linking to LinkedIn (codorah), GitHub (Codorah), and personal portfolio
 *  - Privacy Policy modal (GDPR-compliant content)
 *  - Terms of Use modal
 * Modals are rendered inline using React state — no router navigation required.
 */
"use client";
import { Link as LinkIcon, GitBranch, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';


// Modal Component
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-bold text-gray-900 font-heading">{title}</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1 text-sm text-gray-600 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="pt-16 pb-10 px-8 border-t border-gray-100 bg-white relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Logo */}
          <div className="text-xl font-black tracking-tighter text-[#7C3AED] italic font-heading uppercase">CODORAH</div>

          {/* Nav links */}
          <div className="flex gap-8 text-[10px] font-mono tracking-widest text-[#6B7280] uppercase">
            <a href="#about" className="hover:text-[#7C3AED] transition-colors">À Propos</a>
            <a href="#services" className="hover:text-[#7C3AED] transition-colors">Services</a>
            <a href="#equipe" className="hover:text-[#7C3AED] transition-colors">Équipe</a>
            <a href="#contact" className="hover:text-[#7C3AED] transition-colors">Contact</a>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/codorah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-[#6B7280] hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all"
              title="LinkedIn"
            >
              <LinkIcon size={16} />
            </a>
            <a
              href="https://github.com/Codorah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-[#6B7280] hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all"
              title="GitHub"
            >
              <GitBranch size={16} />
            </a>
            <a
              href="https://portfolio-js-elodie.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-[#6B7280] hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all"
              title="Portfolio"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase pt-8 border-t border-gray-100 gap-4">
          <p>© 2025 Codorah. African Tech Startup. Made with ❤️ in Lomé 🇹🇬</p>
          <div className="flex gap-6">
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-[#7C3AED] transition-colors uppercase tracking-widest">Privacy</button>
            <button onClick={() => setIsTermsOpen(true)} className="hover:text-[#7C3AED] transition-colors uppercase tracking-widest">Terms</button>
          </div>
        </div>
      </footer>

      {/* Privacy Modal */}
      <Modal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} title="Politique de Confidentialité">
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900">1. Collecte des données</h3>
          <p>Nous collectons les informations que vous nous fournissez directement lorsque vous utilisez nos services, notamment lors de la prise de contact via nos formulaires.</p>
          <h3 className="font-bold text-gray-900">2. Utilisation des données</h3>
          <p>Les informations recueillies sont utilisées uniquement pour répondre à vos demandes, améliorer nos services et communiquer avec vous concernant nos offres (si vous y avez consenti).</p>
          <h3 className="font-bold text-gray-900">3. Protection des données</h3>
          <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.</p>
          <h3 className="font-bold text-gray-900">4. Vos droits</h3>
          <p>Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer ces droits en nous contactant directement.</p>
          <p className="pt-4 text-xs text-gray-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </Modal>

      {/* Terms Modal */}
      <Modal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} title="Conditions Générales d'Utilisation">
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900">1. Acceptation des conditions</h3>
          <p>En accédant et en utilisant le site web de Codorah, vous acceptez d'être lié par les présentes conditions générales d'utilisation.</p>
          <h3 className="font-bold text-gray-900">2. Propriété intellectuelle</h3>
          <p>L'ensemble du contenu présent sur ce site (textes, images, logos, code) est la propriété exclusive de Codorah ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle.</p>
          <h3 className="font-bold text-gray-900">3. Utilisation des services</h3>
          <p>Vous vous engagez à n'utiliser nos services qu'à des fins licites et conformément aux présentes conditions. Toute utilisation abusive ou frauduleuse pourra entraîner la suspension de votre accès.</p>
          <h3 className="font-bold text-gray-900">4. Limitation de responsabilité</h3>
          <p>Codorah s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut garantir l'absence d'erreurs. Notre responsabilité ne saurait être engagée pour tout dommage direct ou indirect lié à l'utilisation du site.</p>
          <p className="pt-4 text-xs text-gray-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </Modal>
    </>
  );
}
