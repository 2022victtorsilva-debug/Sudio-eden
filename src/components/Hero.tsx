import React from 'react';
import { Sparkles, Star, ShieldCheck, Clock, MapPin, ArrowRight } from 'lucide-react';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';
import heroPhoto from '../assets/images/portfolio_11.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="theme-hero-background relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[var(--theme-border)]">
      {/* Subtle background ambient gradients using brand colors */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#46513A]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#46513A]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#30342C]/75 dark:text-[#F2EBDD]/65">
              <span className="flex items-center gap-1.5 text-[#46513A] dark:text-[#89947A]">
                <Sparkles className="w-4 h-4 text-[#46513A] dark:text-[#89947A]" />
                Salão de Beleza Renomado & VIP
              </span>
              <span aria-hidden="true" className="text-[#30342C]/35 dark:text-[#30342C]/75">·</span>
              <span className="flex items-center gap-1 text-[#30342C]/75 dark:text-[#F2EBDD]/80">
                <MapPin className="w-3.5 h-3.5 text-[#46513A]" />
                Maringá - PR
              </span>
            </div>

            <h1 data-entrance="title" className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--theme-text)] leading-[1.15] text-balance">
              Studio Éden Concept: A arte da alta beleza e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46513A] via-[#89947A] to-[#46513A]">
                experiência VIP
              </span>
            </h1>

            <p data-entrance="text" className="text-base sm:text-lg text-[#30342C]/75 dark:text-[#F2EBDD]/80 max-w-2xl leading-relaxed">
              Cortes visagistas, escovas com modelagem lisa ou cacheada sem taxa extra,
              penteados para noivas, maquiagem de alta fixação e nosso exclusivo{' '}
              <strong className="text-[var(--theme-text)] font-semibold">Serviço Noturno até às 23h</strong> em um lounge privativo e acolhedor na Av. Colombo.
            </p>

            {/* Micro highlights bulletless */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-[#30342C]/85 dark:text-[#F2EBDD]/80">
              <div className="flex items-center gap-2 bg-[#F2EBDD]/90 dark:bg-[#30382B]/70 border border-[var(--theme-border)] shadow-xs px-3.5 py-2.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#46513A] dark:text-[#89947A] shrink-0" />
                <span>Escova cacheada/lisa Sem custo extra</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F2EBDD]/90 dark:bg-[#30382B]/70 border border-[var(--theme-border)] shadow-xs px-3.5 py-2.5 rounded-xl">
                <Clock className="w-4 h-4 text-[#46513A] shrink-0" />
                <span>Serviço Noturno com hora marcada</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F2EBDD]/90 dark:bg-[#30382B]/70 border border-[var(--theme-border)] shadow-xs px-3.5 py-2.5 rounded-xl">
                <Sparkles className="w-4 h-4 text-[#46513A] dark:text-[#89947A] shrink-0" />
                <span>Salão de Beleza VIP com Lounge</span>
              </div>
            </div>

            {/* CTAs */}
            <div data-entrance="actions" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={createGeneralInquiryWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] font-semibold rounded-xl text-base shadow-xl shadow-[#46513A]/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Pedir Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-[var(--theme-card)] hover:bg-[#F2EBDD] dark:hover:bg-[#30382B] text-[#30342C] dark:text-[#F2EBDD]/90 border border-[#DED3C1] dark:border-[#89947A]/35 hover:border-[#46513A] font-medium rounded-xl text-base transition-all shadow-xs cursor-pointer"
              >
                Solicitar Orçamento no Site
              </button>

              <a
                href="#servicos"
                className="flex items-center justify-center text-sm font-semibold text-[#46513A] dark:text-[#89947A] hover:text-[#252D22] dark:hover:text-[#DED3C1] hover:underline underline-offset-4 py-2 px-3 transition-colors cursor-pointer"
              >
                Ver Serviços ↓
              </a>
            </div>

            {/* Social proof metric */}
            <div className="flex items-center gap-4 pt-4 border-t border-[var(--theme-border)] text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#89947A] text-[#89947A]" />
                ))}
              </div>
              <div>
                <span className="font-semibold text-[var(--theme-text)]">5,0 Estrelas</span>
                <span className="mx-1.5">·</span>
                <span>10 avaliações no Google · Referência VIP em Maringá</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div data-entrance="image" className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main photo card */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--theme-border)] shadow-2xl bg-[var(--theme-card)] group">
                <img
                  src={heroPhoto}
                  alt="Produção de cabelo e maquiagem do Studio Éden Concept"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating secondary card: The VIP Salon Space on Av. Colombo */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 w-44 sm:w-52 bg-[#F2EBDD]/95 dark:bg-[#30382B]/95 backdrop-blur-md border border-[#DED3C1] dark:border-[#89947A]/35 rounded-2xl p-2.5 shadow-2xl hidden sm:block">
                <div
                  className="h-28 rounded-xl overflow-hidden mb-2 bg-[var(--theme-card)] border border-[var(--theme-border)]"
                  aria-label="Espaço reservado para uma nova foto do local"
                />
                <p className="text-xs font-semibold text-[var(--theme-text)] leading-snug">
                  Av. Colombo, 7720 - Zona 06, Maringá - PR, 87080-190
                </p>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-[#F2EBDD]/95 dark:bg-[#252D22]/90 border border-[#89947A] dark:border-[#46513A] rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#46513A] dark:bg-[#89947A] animate-pulse" />
                <span className="text-xs font-semibold text-[#30342C] dark:text-[#F2EBDD]/90">
                  Agenda Aberta 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
