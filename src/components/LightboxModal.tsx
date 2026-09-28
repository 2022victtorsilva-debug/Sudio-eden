import React from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';
import { createServiceBookingWhatsAppLink } from '../utils/whatsapp';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252D22]/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[var(--theme-card)] border border-[var(--theme-border)] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 z-20 p-2 text-[#30342C]/45 hover:text-[#F2EBDD] bg-[#252D22]/60 hover:bg-[#252D22]/80 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image side */}
        <div className="md:w-3/5 bg-[#252D22] flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 left-3 bg-[#252D22]/70 backdrop-blur-sm px-3 py-1 rounded text-xs text-[#30342C]/35 font-medium">
            {item.categoryLabel}
          </div>
        </div>

        {/* Content side */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-[var(--theme-card)]">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-[#46513A] dark:text-[#89947A]">
                <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
                Portfólio Studio Éden Concept
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[var(--theme-text)] mb-3">
              {item.title}
            </h3>

            <p className="text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-sm leading-relaxed mb-6">
              {item.caption}
            </p>

            <div className="mb-6">
              <p className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65 uppercase tracking-wider mb-2 font-medium">
                Destaques do serviço:
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#DED3C1] dark:bg-[#394334] text-[#30342C]/85 dark:text-[#F2EBDD]/80 border border-[#DED3C1] dark:border-[#89947A]/35"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[var(--theme-border)]">
            <a
              href={createServiceBookingWhatsAppLink(item.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] font-semibold rounded-xl text-xs transition-all shadow-md shadow-[#46513A]/20 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Pedir Orçamento deste Estilo no WhatsApp
            </a>
            <p className="text-[11px] text-center text-[#30342C]/60 dark:text-[#F2EBDD]/65">
              Atendimento VIP exclusivo com hora marcada • Maringá - PR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
