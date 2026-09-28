import React, { useState } from 'react';
import { Clock, Check, Sparkles, MessageCircle, Calendar, Moon } from 'lucide-react';
import { SERVICES_LIST } from '../data/salonData';
import { ServiceItem } from '../types';
import { createServiceBookingWhatsAppLink } from '../utils/whatsapp';

interface ServicesMenuProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'cabelos', label: 'Cabelos & Escovas' },
    { id: 'penteados', label: 'Penteados' },
    { id: 'maquiagem', label: 'Maquiagem' },
    { id: 'vip', label: 'VIP & Noturno' },
  ];

  const filteredServices = SERVICES_LIST.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="servicos" className="py-20 bg-[#DED3C1] dark:bg-[#252D22] border-b border-[var(--theme-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
            <span>Cardápio de Serviços Studio Éden Concept</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--theme-text)] tracking-tight text-balance">
            Serviços exclusivos para realçar sua beleza com sofisticação
          </h2>
          <p className="mt-3 text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-base">
            Atendimento atencioso com valores sob orçamento personalizado.
            Destaque para a nossa <strong className="text-[var(--theme-text)]">escova cacheada/lisa sem custo</strong> adicional e o <strong className="text-[var(--theme-text)]">serviço noturno VIP</strong> com horário marcado até às 23h.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Functional Category Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#DED3C1]/80 dark:bg-[#30382B] border border-[var(--theme-border)] rounded-xl overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#46513A] text-[#F2EBDD] shadow-sm'
                    : 'text-[#30342C]/75 dark:text-[#F2EBDD]/65 hover:text-[#30342C] dark:hover:text-[#F2EBDD] hover:bg-[#DED3C1] dark:hover:bg-[#30382B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick search input */}
          <div className="relative min-w-[260px]">
            <input
              type="text"
              placeholder="Buscar serviço..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F2EBDD] dark:bg-[#30382B] border border-[#DED3C1] dark:border-[#89947A]/35 focus:border-[#46513A] focus:bg-[#DED3C1] dark:focus:bg-[#252D22] rounded-xl px-4 py-2.5 text-xs text-[var(--theme-text)] placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/70 hover:text-[#30342C] dark:hover:text-[#F2EBDD] cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const isNight = service.id === 'servico-noturno';
            const isSpecialBrush = service.id === 'escova-cacheada-lisa-sem-custo';

            return (
              <div
                key={service.id}
                className="relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#FCFAF5] dark:bg-[#30382B] border border-[#89947A]/30 dark:border-[#89947A]/35 shadow-sm hover:border-[#89947A]/65 dark:hover:border-[#89947A]/60 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Top line indicator */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                      <Clock className="w-3.5 h-3.5 text-[#30342C]/45" />
                      <span>{service.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{service.category}</span>
                    </div>

                    {service.isVip && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#46513A]">
                        <Sparkles className="w-3 h-3" />
                        Exclusivo VIP
                      </span>
                    )}

                    {isNight && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#46513A] dark:text-[#89947A]">
                        <Moon className="w-3 h-3" />
                        Noturno até 23h
                      </span>
                    )}

                    {isSpecialBrush && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-[#46513A] dark:text-[#89947A]">
                        <Check className="w-3 h-3" />
                        Sem custo extra
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--theme-text)] mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#46513A] font-medium mb-3">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#30342C]/75 dark:text-[#F2EBDD]/80 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Included benefits */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[var(--theme-border)]">
                    <p className="text-[11px] uppercase tracking-wider text-[#30342C]/60 dark:text-[#F2EBDD]/65 font-semibold">
                      O que está incluso:
                    </p>
                    <ul className="space-y-1.5">
                      {service.includes.map((inc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#30342C]/85 dark:text-[#F2EBDD]/80">
                          <Check className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Price and CTA actions */}
                <div className="pt-4 border-t border-[var(--theme-border)]">
                  <div className="mb-4 flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-[#30342C]/60 dark:text-[#F2EBDD]/65 font-medium block">Preço:</span>
                      <div className="font-serif text-2xl font-bold text-[#46513A]">
                        {service.price}
                      </div>
                    </div>
                    {service.priceDetail && (
                      <div className="text-[11px] text-[#30342C]/60 dark:text-[#F2EBDD]/65 text-right max-w-[170px] leading-tight">
                        {service.priceDetail}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={createServiceBookingWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#46513A] dark:bg-[#89947A] hover:bg-[#252D22] dark:hover:bg-[#F2EBDD] text-[#F2EBDD] dark:text-[#252D22] text-xs font-semibold rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="truncate">Pedir no WhatsApp</span>
                    </a>

                    <button
                      onClick={() => onSelectServiceForBooking(service.title)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#DED3C1] dark:bg-[#252D22] hover:bg-[#F2EBDD] dark:hover:bg-[#46513A] text-[#46513A] dark:text-[#F2EBDD] border border-[#89947A] dark:border-[#89947A]/60 text-xs font-medium rounded-xl transition-all cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
                      <span className="truncate">Orçamento</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[var(--theme-card)] rounded-2xl border border-[var(--theme-border)]">
            <p className="text-[#30342C]/60 dark:text-[#F2EBDD]/65 text-sm">
              Nenhum serviço encontrado para &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#46513A] font-semibold hover:underline cursor-pointer"
            >
              Ver todos os serviços
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
