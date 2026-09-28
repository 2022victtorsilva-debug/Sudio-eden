import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-end flex-col gap-2">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#252D22]/95 text-[#F2EBDD] text-xs px-3.5 py-2 rounded-xl shadow-xl border border-[#89947A]/35 animate-fade-in backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-[#46513A] animate-ping" />
          <span>Dúvidas ou agendamento? Fale no WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#30342C]/45 hover:text-[#F2EBDD] p-0.5 ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={createGeneralInquiryWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp para agendamento no Studio Éden Concept"
        className="flex items-center justify-center w-14 h-14 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <MessageCircle className="w-7 h-7 stroke-[2.2] text-[#F2EBDD]" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46513A] opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#46513A]" />
        </span>
      </a>
    </aside>
  );
};
