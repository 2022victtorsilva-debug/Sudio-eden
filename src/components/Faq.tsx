import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/salonData';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[var(--theme-page)] border-b border-[var(--theme-border)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--theme-text)] tracking-tight">
            Perguntas Frequentes sobre o Studio
          </h2>
          <p className="mt-2 text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-sm">
            Transparência total sobre nosso atendimento, valores e comodidades em Maringá.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[#DED3C1] dark:bg-[#30382B]/80 border border-[var(--theme-border)] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-[var(--theme-text)] hover:text-[#46513A] dark:hover:text-[#89947A] transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-semibold pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg bg-[#DED3C1] dark:bg-[#394334] text-[#30342C]/60 dark:text-[#F2EBDD]/65 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#46513A] bg-[#DED3C1] dark:bg-[#46513A]/20' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#30342C]/75 dark:text-[#F2EBDD]/80 leading-relaxed border-t border-[var(--theme-border)] animate-fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-[#30342C]/45">
                      <span>Categoria: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support contact link */}
        <div className="mt-10 p-6 rounded-2xl bg-[var(--theme-card)] border border-[var(--theme-border)] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-base font-bold text-[var(--theme-text)]">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65 mt-0.5">
              Nossa equipe está disponível no WhatsApp para te atender com carinho.
            </p>
          </div>

          <a
            href={createGeneralInquiryWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] font-semibold text-xs rounded-xl transition-all whitespace-nowrap active:scale-95 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-[#46513A]" />
            Falar com o Studio no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
