'use client';

import Image from 'next/image';

interface MarqueePartnersProps {
  title?: string;
}

const PARTNER_LOGOS = [
  { name: 'CFA Express', sector: 'Fintech', src: '/projects/cfa-express.png' },
  { name: 'Agro-Capital', sector: 'Agritech', src: '/projects/agro-capital.png' },
  { name: 'PharmaLink', sector: 'HealthTech', src: '/projects/pharmalink.webp' },
  { name: 'EduFast Academy', sector: 'EdTech', src: '/projects/edufast academy.webp' },
  { name: 'Eganye', sector: 'Enterprise SaaS', src: '/projects/eganye.png' },
  { name: 'Miklpanu', sector: 'E-Commerce', src: '/projects/miklpanu.png' },
  { name: 'HeriToGo', sector: 'Mobility Tech', src: '/projects/heritogo.png' },
];

export default function MarqueePartners({ title }: MarqueePartnersProps) {
  // Duplicate array for seamless infinite marquee loop
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="py-14 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
          {title || 'Ils nous font confiance pour leur ingénierie et leurs talents'}
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee space-x-8 hover:[animation-play-state:paused]">
          {logos.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50/40 transition-all duration-300 group shrink-0"
            >
              <div className="relative w-22 h-22">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain filter  group-hover:grayscale-0  transition-all duration-300"
                  unoptimized
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
