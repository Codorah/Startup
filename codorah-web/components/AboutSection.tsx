import Image from 'next/image';
import { Clock, Users, BarChart3, type LucideIcon } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const ICON_MAP: Record<string, LucideIcon> = { Clock, Users, BarChart3 };

interface AboutSectionProps {
  dict: Dictionary['about'];
}

export default function AboutSection({ dict }: AboutSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Image */}
        <div data-reveal="left" className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-900/10">
            <div data-parallax="8" className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src="/images/hero-african-tech-team.jpg"
                alt={dict.imageAlt}
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-violet-950/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-[2rem] bg-violet-100 -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full border-2 border-dashed border-violet-200 -z-10" />
        </div>

        {/* Copy */}
        <div className="space-y-10">
          <div className="space-y-4">
            <span data-reveal className="section-label">{dict.badge}</span>
            <h2 data-reveal className="display-md text-slate-900">{dict.title}</h2>
            <p data-reveal className="text-lg text-slate-600 leading-relaxed">{dict.subtitle}</p>
          </div>

          <ul className="space-y-4">
            {dict.items.map((item) => {
              const Icon = ICON_MAP[item.icon] ?? Clock;
              return (
                <li
                  key={item.title}
                  data-reveal
                  className="card-hover flex gap-5 rounded-2xl p-5 sm:p-6"
                >
                  <span className="w-12 h-12 rounded-xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-violet-600/25">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
