import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ProcessSectionProps {
  dict: Dictionary['process'];
}

export default function ProcessSection({ dict }: ProcessSectionProps) {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span data-reveal className="section-label">{dict.badge}</span>
          <h2 data-reveal className="display-md text-slate-900">{dict.title}</h2>
          <p data-reveal className="text-lg text-slate-600 leading-relaxed">{dict.subtitle}</p>
        </div>

        <div className="relative">
          {/* Progress track: horizontal on desktop, vertical on mobile */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-slate-100">
            <div data-line="x" className="h-full w-full origin-left bg-gradient-to-r from-violet-600 to-violet-400" />
          </div>
          <div className="lg:hidden absolute top-0 bottom-0 left-7 w-0.5 bg-slate-100">
            <div data-line="y" className="h-full w-full origin-top bg-gradient-to-b from-violet-600 to-violet-400" />
          </div>

          <ol className="relative grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
            {dict.steps.map((step, i) => (
              <li key={step.title} data-reveal className="flex lg:flex-col lg:items-center lg:text-center gap-6">
                <span className="relative z-10 w-14 h-14 shrink-0 rounded-2xl bg-white border-2 border-violet-200 flex items-center justify-center font-[family-name:var(--font-jakarta)] text-lg font-extrabold text-violet-700 shadow-lg shadow-violet-600/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2 pt-2 lg:pt-0">
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
