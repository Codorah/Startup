'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface TrustBarProps {
  dict: Dictionary['trust'];
}

export default function TrustBar({ dict }: TrustBarProps) {
  const partnerLogos = [
    { name: 'CFA Express', sector: 'Fintech', src: '/projects/cfa-express.png' },
    { name: 'Agro-Capital', sector: 'Agritech', src: '/projects/agro-capital.png' },
    { name: 'PharmaLink', sector: 'HealthTech', src: '/projects/pharmalink.webp' },
    { name: 'EduFast Academy', sector: 'EdTech', src: '/projects/edufast academy.webp' },
    { name: 'Eganye', sector: 'Enterprise SaaS', src: '/projects/eganye.png' },
    { name: 'Miklpanu', sector: 'E-Commerce', src: '/projects/miklpanu.png' },
    { name: 'HeriToGo', sector: 'Mobility Tech', src: '/projects/heritogo.avif' },
  ];

  const stats = [
    { value: dict.stat1.value, label: dict.stat1.label },
    { value: dict.stat2.value, label: dict.stat2.label },
    { value: dict.stat3.value, label: dict.stat3.label },
    { value: dict.stat4.value, label: dict.stat4.label },
  ];

  return (
    <section className="bg-slate-50/70 border-y border-slate-200/80 py-16 relative overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 space-y-12">

        {/* 4 Corporate KPI Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-200/80">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center lg:text-left space-y-1.5"
            >
              <div className="flex items-baseline justify-center lg:justify-start gap-1">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </p>
                <span className="w-2 h-2 rounded-full bg-violet-600 inline-block mb-1" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-snug max-w-[150px] mx-auto lg:mx-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Marquee Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-slate-200" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 text-center">
              {dict.badge}
            </p>
            <div className="h-px w-12 bg-slate-200" />
          </div>

          {/* Partner logos carousel */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 24 },
              768: { slidesPerView: 4, spaceBetween: 28 },
              1024: { slidesPerView: 6, spaceBetween: 32 },
            }}
            loop={true}
            autoplay={{ delay: 2400, disableOnInteraction: false }}
            className="w-full py-2"
          >
            {partnerLogos.map((partner, idx) => (
              <SwiperSlide key={`${partner.name}-${idx}`}>
                <div className="flex items-center justify-center">
                  <div className="w-full h-16 rounded-xl bg-white border border-slate-200/80 px-4 py-2 flex items-center justify-center gap-3 shadow-2xs hover:border-violet-300 hover:shadow-md transition-all duration-300 group cursor-default">
                    <div className="relative w-24 h-9">
                      <Image
                        src={partner.src}
                        alt={partner.name}
                        fill
                        className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
