'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface TestimonialsSectionProps {
  dict: Dictionary['testimonials'];
}

export default function TestimonialsSection({ dict }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
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

        {/* Swiper Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 28 },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-16"
          >
            {dict.items.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="h-full rounded-2xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between shadow-2xs hover:shadow-xl hover:border-violet-300 transition-all duration-300 group">
                  <div className="space-y-6">
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: item.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-violet-200 group-hover:text-violet-500 transition-colors" />
                    </div>

                    {/* Quote text */}
                    <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed font-normal">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-violet-200 shrink-0">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-violet-700 transition-colors">
                          {item.name}
                        </h4>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.role}
                      </p>
                      <p className="text-[11px] font-semibold text-violet-700">
                        {item.company}
                      </p>
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
