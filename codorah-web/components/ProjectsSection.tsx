'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ExternalLink, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import ContactModal from './ContactModal';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ProjectsSectionProps {
  dict: Dictionary['projects'];
  modalDict: Dictionary['modal'];
}

export default function ProjectsSection({ dict, modalDict }: ProjectsSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="py-24 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              {dict.badge}
            </div>
            <h2 className="display-md text-slate-900 tracking-tight">
              {dict.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {dict.subtitle}
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              id="project-prev-btn"
              className="w-11 h-11 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-violet-700 hover:border-violet-300 hover:bg-violet-50/50 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="project-next-btn"
              className="w-11 h-11 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-violet-700 hover:border-violet-300 hover:bg-violet-50/50 flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              aria-label="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Projects Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            navigation={{
              prevEl: '#project-prev-btn',
              nextEl: '#project-next-btn',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            className="pb-14"
          >
            {dict.items.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-7 flex flex-col justify-between shadow-2xs hover:shadow-xl hover:border-violet-300 transition-all duration-300 group">
                  <div className="space-y-6">
                    {/* Top Logo Container & Sector Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="h-14 w-32 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center relative overflow-hidden group-hover:border-violet-200 transition-colors">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain p-1.5"
                          unoptimized
                        />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-[11px] font-bold text-right border border-violet-100">
                        {project.category}
                      </span>
                    </div>

                    {/* Impact Metric Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.impact}</span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full py-2.5 px-4 rounded-xl bg-violet-50 hover:bg-violet-600 text-violet-700 hover:text-white font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <span>{dict.viewProject}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        dict={modalDict}
        defaultService="webMobile"
      />
    </section>
  );
}
