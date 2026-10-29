import Image from 'next/image';
import { Clock, BarChart, MapPin, ArrowRight } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface FormationsGridProps {
  dict: Dictionary['trainings'];
}

export default function FormationsGrid({ dict }: FormationsGridProps) {
  return (
    <section id="trainings" className="py-24 lg:py-32 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-4">
            <span data-reveal className="section-label">{dict.badge}</span>
            <h2 data-reveal className="display-md text-slate-900">{dict.title}</h2>
            <p data-reveal className="text-lg text-slate-600 leading-relaxed">{dict.subtitle}</p>
          </div>
          <span
            data-reveal="fade"
            className="inline-flex items-center gap-2 self-start lg:self-auto rounded-full bg-white border border-violet-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600 animate-pulse" />
            {dict.upcoming}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items.map((item) => (
            <article
              key={item.id}
              data-reveal
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-violet-900/5 hover:-translate-y-1.5 hover:border-violet-200 transition-[box-shadow,translate,border-color] duration-300 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-violet-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>

                <ul className="mt-auto space-y-1.5 text-xs font-medium text-slate-500">
                  <li className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-violet-500" /> {item.duration}
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart className="w-3.5 h-3.5 text-violet-500" /> {item.level}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-violet-500" /> {item.format}
                  </li>
                </ul>

                <a
                  href="#contact"
                  data-service="training"
                  className="group/link mt-2 inline-flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 group-hover:bg-violet-600 group-hover:text-white transition-colors"
                >
                  {dict.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
