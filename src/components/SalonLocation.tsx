import React from 'react';
import { MapPin, Navigation, Phone, Clock, Sparkles, Coffee, Wifi, Shield } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const SalonLocation: React.FC = () => {
  return (
    <section id="espaco" className="py-20 bg-[var(--theme-page)] border-b border-[var(--theme-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
            <span>Nosso Espaço Físico em Maringá</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--theme-text)] tracking-tight">
            Venha viver uma experiência no Studio Éden Concept
          </h2>
          <p className="mt-3 text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-base">
            Ambiente exclusivo, climatizado e planejado nos mínimos detalhes para garantir seu relaxamento e conforto total na Zona 06.
          </p>
        </div>

        {/* 2-Column layout: Photo of the space on the left, address & amenities on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Prominent photo of the salon location as requested */}
          <div className="lg:col-span-6 relative">
            <div
              className="h-[480px] sm:h-[540px] rounded-2xl overflow-hidden border border-[var(--theme-border)] shadow-xl bg-[var(--theme-card)]"
              aria-label="Espaço reservado para uma nova foto do local"
            />

            {/* Micro trust marker without parking */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#30342C]/75 dark:text-[#F2EBDD]/65 px-1">
              <span>Ambiente climatizado e privativo</span>
              <span className="text-[#46513A] dark:text-[#89947A] font-semibold">Localização nobre e fácil acesso</span>
            </div>
          </div>

          {/* Right: Address details, hours, route button, and amenities */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--theme-card)] border border-[var(--theme-border)] shadow-sm space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#DED3C1] dark:bg-[#394334] border border-[#DED3C1] dark:border-[#89947A]/35 rounded-xl text-[#46513A] shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#30342C]/60 dark:text-[#F2EBDD]/65 uppercase tracking-wider">
                    Endereço Oficial
                  </h4>
                  <p className="text-lg font-bold text-[var(--theme-text)] mt-0.5 leading-snug">
                    {SALON_INFO.address.full}
                  </p>
                  <p className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65 mt-1">
                    Em frente à via arterial com fácil retorno
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--theme-border)] flex flex-col sm:flex-row gap-3">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] font-semibold text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-[#46513A]" />
                  Abrir no Google Maps / Traçar Rota
                </a>

                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 bg-[var(--theme-card)] hover:bg-[#F2EBDD] dark:hover:bg-[#30382B] text-[#30342C] dark:text-[#F2EBDD]/90 font-medium text-xs rounded-xl border border-[#DED3C1] dark:border-[#89947A]/35 transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#46513A]" />
                  Ligar: {SALON_INFO.phone}
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--theme-card)] border border-[var(--theme-border)] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-[var(--theme-text)] uppercase tracking-wider mb-3">
                <Clock className="w-4 h-4 text-[#46513A]" />
                <span>Horários de Funcionamento</span>
              </div>
              <div className="space-y-2 text-xs">
                {SALON_INFO.hours.map((h, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-2 border-b border-[var(--theme-border)] last:border-b-0">
                    <span className="text-[#30342C]/75 dark:text-[#F2EBDD]/65">{h.days}</span>
                    <span className="font-semibold text-[var(--theme-text)]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Grid without parking */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs shadow-2xs">
                <Sparkles className="w-4 h-4 text-[#46513A] shrink-0" />
                <span className="text-[#30342C] dark:text-[#F2EBDD]/90">Fácil acesso na Av. Colombo</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs shadow-2xs">
                <Coffee className="w-4 h-4 text-[#46513A] dark:text-[#89947A] shrink-0" />
                <span className="text-[#30342C] dark:text-[#F2EBDD]/90">Café gourmet & espumante</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs shadow-2xs">
                <Wifi className="w-4 h-4 text-[#46513A] dark:text-[#89947A] shrink-0" />
                <span className="text-[#30342C] dark:text-[#F2EBDD]/90">Wi-Fi de alta velocidade</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--theme-card)] border border-[var(--theme-border)] text-xs shadow-2xs">
                <Shield className="w-4 h-4 text-[#46513A] shrink-0" />
                <span className="text-[#30342C] dark:text-[#F2EBDD]/90">Privacidade VIP absoluta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
