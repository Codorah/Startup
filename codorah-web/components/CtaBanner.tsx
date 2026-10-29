import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { CONTACT } from '@/lib/site';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface CtaBannerProps {
  dict: Dictionary['ctaBanner'];
}

export default function CtaBanner({ dict }: CtaBannerProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          data-reveal="scale"
          className="relative rounded-[2rem] bg-gradient-to-br from-violet-700 via-violet-600 to-indigo-800 text-white overflow-hidden shadow-2xl shadow-violet-900/20 p-8 sm:p-12 lg:p-16"
        >
          <div className="absolute inset-0 bg-grid-dots opacity-[0.08] pointer-events-none" />
          <div
            data-parallax="20"
            className="absolute -right-24 -bottom-24 w-[28rem] h-[28rem] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-violet-50 text-xs font-bold tracking-wider uppercase border border-white/20">
                {dict.tagline}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {dict.title}
              </h2>
              <p className="text-lg text-violet-100 leading-relaxed max-w-xl">{dict.subtitle}</p>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-violet-900 hover:bg-violet-50 font-bold text-sm shadow-lg transition-colors"
              >
                {dict.primaryCta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-6 text-sm font-medium text-violet-100 border-t border-white/15">
                {dict.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-7 sm:p-8 space-y-5">
                <span className="w-12 h-12 rounded-2xl bg-emerald-400 text-emerald-950 flex items-center justify-center shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold">{dict.whatsappTitle}</h3>
                  <p className="text-violet-100">{dict.whatsappText}</p>
                  <p className="font-[family-name:var(--font-jakarta)] text-2xl font-extrabold tracking-tight pt-1">
                    {CONTACT.whatsappDisplay}
                  </p>
                </div>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-400 hover:bg-emerald-300 text-emerald-950 px-5 py-3.5 text-sm font-bold transition-colors"
                >
                  {dict.whatsappCta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
