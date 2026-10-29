import Image from 'next/image';
import {
  Globe,
  Smartphone,
  LayoutDashboard,
  Bot,
  Palette,
  ShieldCheck,
  Check,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  LayoutDashboard,
  Bot,
  Palette,
  ShieldCheck,
};

interface ServicesAlternatingProps {
  dict: Dictionary['services'];
}

export default function ServicesAlternating({ dict }: ServicesAlternatingProps) {
  return (
    <section id="services" className="py-24 lg:py-32 bg-violet-subtle">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
          <span data-reveal className="section-label">{dict.badge}</span>
          <h2 data-reveal className="display-md text-slate-900">{dict.title}</h2>
          <p data-reveal className="text-lg text-slate-600 leading-relaxed">{dict.subtitle}</p>
        </div>

        <div className="flex flex-col gap-10 lg:gap-16">
          {dict.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const Icon = ICON_MAP[item.icon] ?? Globe;

            return (
              <article
                key={item.id}
                className={`group flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-violet-900/5 transition-shadow duration-500`}
              >
                <div
                  data-reveal={isEven ? 'left' : 'right'}
                  className="md:w-[45%] relative min-h-[260px] md:min-h-[400px] overflow-hidden"
                >
                  <div data-parallax="8" className="absolute -inset-y-[12%] inset-x-0">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute top-5 left-5 font-[family-name:var(--font-jakarta)] text-sm font-extrabold text-white bg-violet-950/40 backdrop-blur-md rounded-full px-3 py-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div
                  data-reveal={isEven ? 'right' : 'left'}
                  className="md:w-[55%] flex flex-col justify-center gap-6 p-8 md:p-12 lg:p-16"
                >
                  <span className="w-14 h-14 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-violet-600 group-hover:border-violet-600">
                    <Icon className="w-6 h-6 text-violet-700 transition-colors duration-300 group-hover:text-white" />
                  </span>

                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed">{item.description}</p>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {item.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        <Check className="w-3.5 h-3.5 text-violet-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    data-service={item.id}
                    className="group/link inline-flex items-center gap-2 self-start text-violet-700 font-bold text-sm hover:text-violet-900 transition-colors"
                  >
                    <span className="underline decoration-violet-300 group-hover/link:decoration-violet-700 underline-offset-4">
                      {dict.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
