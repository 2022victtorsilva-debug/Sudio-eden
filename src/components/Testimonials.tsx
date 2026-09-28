import React from 'react';
import { Star, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { SALON_INFO, TESTIMONIALS } from '../data/salonData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#DED3C1] dark:bg-[#252D22] border-b border-[var(--theme-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
              <span>Avaliações Reais de Clientes</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--theme-text)] tracking-tight">
              O que dizem as clientes do Studio Éden Concept
            </h2>
            <p className="mt-2 text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-sm">
              Mais de 10 anos transformando e realçando a beleza de mulheres em Maringá e região.
            </p>
          </div>

          {/* Aggregate Rating Pill-less Box */}
          <div className="p-4 rounded-xl bg-[#DED3C1]/80 dark:bg-[#30382B] border border-[var(--theme-border)] flex items-center gap-4 self-start md:self-auto shadow-2xs">
            <div className="text-3xl font-bold font-serif text-[var(--theme-text)] tabular-nums">{SALON_INFO.rating.score}</div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#89947A] text-[#89947A]" />
                ))}
              </div>
              <p className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65 mt-0.5">
                {SALON_INFO.rating.label}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#DED3C1] dark:bg-[#30382B]/90 border border-[var(--theme-border)] hover:border-[#46513A] dark:hover:border-[#89947A]/35 hover:shadow-md transition-all flex flex-col justify-between relative group shadow-2xs"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#DED3C1] dark:text-[#30342C] group-hover:text-[#46513A]/20 transition-colors pointer-events-none" />

              <div>
                {/* Rating & Service */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#89947A] text-[#89947A]" />
                    ))}
                  </div>

                  {t.serviceUsed && (
                    <span className="text-xs text-[#46513A] dark:text-[#89947A] font-semibold">
                      {t.serviceUsed}
                    </span>
                  )}
                </div>

                {/* Comment */}
                <p className="whitespace-pre-line text-[#30342C]/85 dark:text-[#F2EBDD]/80 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {t.comment}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[var(--theme-border)] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[var(--theme-text)] text-sm">
                      {t.name}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
                  </div>
                  {(t.role || t.location) && (
                    <p className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                      {[t.role, t.location].filter(Boolean).join(' • ')}
                    </p>
                  )}
                </div>

                <span className="text-[11px] text-[#30342C]/45 dark:text-[#F2EBDD]/50 tabular-nums">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
