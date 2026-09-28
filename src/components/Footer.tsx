import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Heart, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252D22] border-t border-[#30382B] text-[#D9DDCF] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold text-[#F2EBDD] tracking-tight">
                Studio Éden Concept
              </span>
              <p className="text-[11px] leading-snug tracking-wide text-[#C4CCB8] font-semibold mt-0.5">
                Especialistas em noivas e debutantes • Mechas loiras e morena iluminada
              </p>
            </div>
            <p className="text-[#D9DDCF] leading-relaxed text-xs">
              Excelência e sofisticação em beleza feminina. Especialistas em penteados para noivas,
              escovas com modelagem lisa ou cacheada sem taxa extra, cortes, maquiagem de alta durabilidade e serviço noturno exclusivo.
            </p>
            <div className="flex items-center gap-1.5 text-[#D9DDCF]">
              <Sparkles className="w-3.5 h-3.5 text-[#C4CCB8]" />
              <span>Ambiente exclusivo com lounge privativo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#F2EBDD] tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="hover:text-[#F2EBDD] transition-colors">
                  Serviços do Salão
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-[#F2EBDD] transition-colors">
                  Nosso Espaço VIP (Av. Colombo)
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#F2EBDD] transition-colors">
                  Galeria de Fotos & Portfólio
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-[#F2EBDD] transition-colors">
                  Diferenciais & Serviço Noturno
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#F2EBDD] transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F2EBDD] transition-colors">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#F2EBDD] tracking-wide uppercase">
              Localização & Contato
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C4CCB8] shrink-0 mt-0.5" />
                <span className="text-[#D9DDCF]">
                  {SALON_INFO.address.street} - {SALON_INFO.address.neighborhood}
                  <br />
                  {SALON_INFO.address.city} - {SALON_INFO.address.state}, {SALON_INFO.address.zip}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C4CCB8] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phoneRaw}`}
                  className="text-[#F2EBDD] hover:text-[#D9DDCF] transition-colors"
                >
                  {SALON_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#C4CCB8] shrink-0" />
                <a
                  href={createGeneralInquiryWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F2EBDD] hover:text-[#D9DDCF] hover:underline transition-colors"
                >
                  Solicitar Orçamento no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold text-[#F2EBDD] tracking-wide uppercase">
              Horário de Atendimento
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="block text-[#F2EBDD] font-medium">Segunda a Sábado:</span>
                <span className="text-[#D9DDCF]">09:00 às 18:00</span>
              </div>
              <div>
                <span className="block text-[#F2EBDD]/80 font-medium">Domingo:</span>
                <span className="text-[#D9DDCF]">Fechado</span>
              </div>
              <div>
                <span className="block text-[#F2EBDD] font-medium">Serviço Noturno VIP:</span>
                <span className="text-[#D9DDCF]">Atendimento exclusivo sob agendamento</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#89947A]/25 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#D9DDCF]">
          <p>© {new Date().getFullYear()} Studio Éden Concept. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Salão de Beleza Renomado e VIP em Maringá - PR
          </p>
        </div>
      </div>
    </footer>
  );
};
