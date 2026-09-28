import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F2EBDD]/95 dark:bg-[#252D22]/95 backdrop-blur-md border-b border-[var(--theme-border)] shadow-xs transition-colors duration-300">
      {/* Main Top Bar Contract: Brand — Links — Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand wordmark */}
        <a href="#" className="flex min-w-0 flex-col group">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[var(--theme-text)] group-hover:text-[#46513A] dark:group-hover:text-[#89947A] transition-colors">
            Studio Éden Concept
          </span>
          <span className="max-w-[220px] sm:max-w-[300px] lg:max-w-none text-[9px] sm:text-[10px] leading-tight tracking-[0.06em] sm:tracking-[0.1em] text-[#46513A] font-semibold mt-0.5">
            Especialistas em noivas e debutantes • Mechas loiras e morena iluminada
          </span>
        </a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#30342C]/85 dark:text-[#F2EBDD]/80">
          <a
            href="#servicos"
            className="hover:text-[#46513A] dark:hover:text-[#89947A] hover:underline underline-offset-8 decoration-[#46513A] dark:decoration-[#89947A] decoration-2 transition-all"
          >
            Serviços
          </a>
          <a
            href="#espaco"
            className="hover:text-[#46513A] dark:hover:text-[#89947A] hover:underline underline-offset-8 decoration-[#46513A] dark:decoration-[#89947A] decoration-2 transition-all"
          >
            Nosso Espaço VIP
          </a>
          <a
            href="#portfolio"
            className="hover:text-[#46513A] dark:hover:text-[#89947A] hover:underline underline-offset-8 decoration-[#46513A] dark:decoration-[#89947A] decoration-2 transition-all"
          >
            Galeria & Portfólio
          </a>
          <a
            href="#diferenciais"
            className="hover:text-[#46513A] dark:hover:text-[#89947A] hover:underline underline-offset-8 decoration-[#46513A] dark:decoration-[#89947A] decoration-2 transition-all"
          >
            Diferenciais
          </a>
          <a
            href="#depoimentos"
            className="hover:text-[#46513A] dark:hover:text-[#89947A] hover:underline underline-offset-8 decoration-[#46513A] dark:decoration-[#89947A] decoration-2 transition-all"
          >
            Depoimentos
          </a>
          <a
            href="#faq"
            className="hover:text-[#46513A] dark:hover:text-[#89947A] hover:underline underline-offset-8 decoration-[#46513A] dark:decoration-[#89947A] decoration-2 transition-all"
          >
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: Primary action controls with Theme Toggle Button */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <ThemeToggle variant="navbar" />

          <a
            href={createGeneralInquiryWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#46513A] dark:text-[#F2EBDD] bg-[#46513A]/10 dark:bg-[#46513A] border border-[#89947A] dark:border-[#89947A]/70 hover:border-[#46513A] hover:bg-[#46513A]/15 dark:hover:bg-[#89947A] dark:hover:text-[#252D22] transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-[#46513A] dark:text-current" />
            WhatsApp
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#F2EBDD] dark:text-[#252D22] bg-[#46513A] dark:bg-[#89947A] hover:bg-[#252D22] dark:hover:bg-[#F2EBDD] shadow-md shadow-[#46513A]/20 transition-all whitespace-nowrap active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Solicitar Orçamento
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle variant="navbar" className="text-[11px] py-1 px-2.5" />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            className="p-2 text-[#30342C]/85 dark:text-[#F2EBDD]/90 hover:text-[#30342C] dark:hover:text-[#F2EBDD] rounded-lg hover:bg-[#DED3C1] dark:hover:bg-[#46513A] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#DED3C1] dark:bg-[#252D22] border-b border-[var(--theme-border)] px-5 py-6 space-y-4 animate-fade-in shadow-lg">
          {/* Theme button in mobile drawer */}
          <div className="pb-2">
            <ThemeToggle variant="mobile" />
          </div>

          <nav className="flex flex-col space-y-3 text-base font-medium text-[#30342C] dark:text-[#F2EBDD]/90">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#46513A] dark:hover:text-[#89947A] transition-colors"
            >
              Serviços & Orçamentos
            </a>
            <a
              href="#espaco"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#46513A] dark:hover:text-[#89947A] transition-colors"
            >
              O Espaço VIP (Av. Colombo)
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#46513A] dark:hover:text-[#89947A] transition-colors"
            >
              Galeria de Fotos
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#46513A] dark:hover:text-[#89947A] transition-colors"
            >
              Diferenciais & Noturno
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#46513A] dark:hover:text-[#89947A] transition-colors"
            >
              Depoimentos de Clientes
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#46513A] dark:hover:text-[#89947A] transition-colors"
            >
              Perguntas Frequentes
            </a>
          </nav>

          <div className="pt-4 border-t border-[var(--theme-border)] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 bg-[#46513A] dark:bg-[#89947A] text-[#F2EBDD] dark:text-[#252D22] text-center font-semibold rounded-xl text-sm shadow-md cursor-pointer"
            >
              Solicitar Orçamento VIP
            </button>
            <a
              href={createGeneralInquiryWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-[#DED3C1] dark:bg-[#46513A] border border-[#89947A] dark:border-[#89947A]/70 text-[#46513A] dark:text-[#F2EBDD] text-center font-semibold rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#46513A] dark:text-current" />
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
