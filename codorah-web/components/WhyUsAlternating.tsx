import Image from 'next/image';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface WhyUsAlternatingProps {
  dict: Dictionary['whyUs'];
}

export default function WhyUsAlternating({ dict }: WhyUsAlternatingProps) {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20">
        {/* Sticky heading on desktop */}
        <div className="lg:sticky lg:top-32 self-start space-y-4">
          <span data-reveal className="section-label">{dict.badge}</span>
          <h2 data-reveal className="display-md text-slate-900">{dict.title}</h2>
          <div data-reveal className="h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 to-violet-300" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dict.items.map((item, i) => (
            <article
              key={item.id}
              data-reveal
              className={`group relative overflow-hidden rounded-3xl bg-slate-900 min-h-[340px] flex flex-col justify-end ${
                i % 2 === 1 ? 'sm:translate-y-12' : ''
              }`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950 via-violet-950/70 to-violet-950/10 transition-opacity duration-500" />
              <div className="relative p-7 space-y-3">
                <span className="font-[family-name:var(--font-jakarta)] text-sm font-extrabold text-violet-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold text-white leading-snug">{item.title}</h3>
                <p className="text-sm text-violet-100/90 leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
