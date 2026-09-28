import React from 'react';
import { Sparkles, Moon, Award, Scissors, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export const VipExperience: React.FC = () => {
  const pillars = [
    {
      icon: Moon,
      color: '#46513A',
      title: 'Serviço Noturno Exclusivo VIP',
      description:
        'Pensado para a mulher contemporânea que não dispõe de tempo em horário comercial. Atendemos com hora marcada com lounge privativo e total serenidade.',
      tag: 'Sob agendamento'
    },
    {
      icon: Scissors,
      color: '#46513A',
      title: 'Escova Cacheada ou Lisa Sem Custo Extra',
      description:
        'Transparência inegociável: você escolhe se prefere o caimento liso polido ou cachos com movimento sem acréscimos adicionais de finalização.',
      tag: 'Sem custo extra'
    },
    {
      icon: Award,
      color: '#46513A',
      title: 'Visagismo & Corte de Cabelo',
      description:
        'Antes da tesoura tocar nos fios, realizamos uma leitura da sua geometria facial, tom de pele e rotina para propor cortes que valorizem a sua expressão única.',
      tag: 'Personalizado'
    },
    {
      icon: Heart,
      color: '#46513A',
      title: 'Penteados & Salão VIP',
      description:
        'Espaço dedicado com iluminação natural para momentos especiais. Penteados icônicos com pérolas e véu, maquiagem blindada e acompanhamento de equipe especializada.',
      tag: 'Experiência VIP'
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-[var(--theme-page)] border-b border-[var(--theme-border)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
            <span>O Padrão Studio Éden Concept</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--theme-text)] tracking-tight text-balance">
            Por que somos o salão de beleza VIP de referência em Maringá
          </h2>
          <p className="mt-3 text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-sm sm:text-base">
            Combinamos a precisão técnica das maiores escolas de beleza do mundo com a hospitalidade
            e o carinho que transformam cada visita em um momento de autocuidado pleno.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[var(--theme-card)] border border-[var(--theme-border)] shadow-sm hover:shadow-md hover:border-[#46513A] dark:hover:border-[#89947A]/35 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="p-3 rounded-xl"
                      style={{ backgroundColor: `${item.color}18`, color: item.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--theme-text)] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#30342C]/75 dark:text-[#F2EBDD]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[var(--theme-border)] flex items-center justify-between text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                  <span className="text-[#46513A] dark:text-[#89947A] flex items-center gap-1 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Garantia Studio VIP
                  </span>
                  <span className="text-[#30342C]/35 dark:text-[#30342C]/75">·</span>
                  <span>Maringá - PR</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="theme-banner-background mt-12 p-8 rounded-2xl border border-[var(--theme-border)] flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="font-serif text-2xl font-bold text-[var(--theme-text)]">
              Precisa de atendimento em horário diferenciado hoje?
            </h4>
            <p className="text-xs sm:text-sm text-[#30342C]/75 dark:text-[#F2EBDD]/80">
              Consulte a disponibilidade para o Serviço Noturno VIP ou solicite seu orçamento personalizado.
            </p>
          </div>

          <a
            href={createGeneralInquiryWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] font-semibold text-xs rounded-xl shadow-md transition-all whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <span>Consultar Horários Noturnos no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
