import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface ProjectsSectionProps {
  dict: Dictionary['projects'];
}

export default function ProjectsSection({ dict }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 space-y-4">
          <span data-reveal className="section-label">{dict.badge}</span>
          <h2 data-reveal className="display-md text-slate-900">{dict.title}</h2>
          <p data-reveal className="text-lg text-slate-600 leading-relaxed">{dict.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.items.map((project) => (
            <article
              key={project.id}
              data-reveal
              className="group flex flex-col rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl hover:shadow-violet-900/10 hover:border-violet-200 transition-[box-shadow,border-color] duration-500"
            >
              {/* Browser-framed preview */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden
                className="block px-5 pt-5 bg-gradient-to-b from-violet-50 to-white"
              >
                <div className="rounded-t-xl border border-b-0 border-slate-200 bg-white shadow-lg shadow-violet-900/5 overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100 bg-slate-50">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-300" />
                      <span className="w-2 h-2 rounded-full bg-amber-300" />
                      <span className="w-2 h-2 rounded-full bg-emerald-300" />
                    </span>
                    <span className="flex-1 truncate rounded-md bg-white border border-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                      {project.domain}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                    {project.screenshot ? (
                      <Image
                        src={project.screenshot}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-grid-dots">
                        <div className="relative w-3/5 h-3/5 transition-transform duration-700 ease-out group-hover:scale-105">
                          <Image src={project.logo} alt="" fill sizes="240px" className="object-contain" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </a>

              <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative h-9 w-28 shrink-0">
                    <Image
                      src={project.logo}
                      alt={project.name}
                      fill
                      sizes="112px"
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-violet-600 text-right">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{project.name}</h3>
                  <p className="text-sm font-semibold text-slate-500 italic">{project.tagline}</p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>

                <ul className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700"
                    >
                      <Check className="w-3 h-3 text-violet-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link mt-auto pt-2 inline-flex items-center gap-1.5 self-start text-sm font-bold text-violet-700 hover:text-violet-900 transition-colors"
                >
                  <span className="underline decoration-violet-300 group-hover/link:decoration-violet-700 underline-offset-4">
                    {dict.visit}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  <span className="sr-only">({project.name})</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
