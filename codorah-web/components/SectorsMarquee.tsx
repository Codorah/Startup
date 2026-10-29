import type { Dictionary } from '@/lib/i18n/dictionaries';

interface SectorsMarqueeProps {
  dict: Dictionary['sectors'];
}

export default function SectorsMarquee({ dict }: SectorsMarqueeProps) {
  // Duplicated once so the track can loop seamlessly at -50%
  const items = [...dict.items, ...dict.items];

  return (
    <section className="relative py-12 border-y border-slate-100 bg-slate-50/60">
      <p data-reveal="fade" className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500 mb-8 px-6">
        {dict.title}
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee-track gap-4" aria-label={dict.title}>
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= dict.items.length}
              className="flex items-center gap-3 whitespace-nowrap rounded-full bg-white border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
