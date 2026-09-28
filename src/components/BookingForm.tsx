import React, { useState } from 'react';
import { Sparkles, Calendar, Clock, Phone, User, MessageSquare, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES_LIST, SALON_INFO } from '../data/salonData';
import { BookingFormData } from '../types';
import { createFormBookingWhatsAppLink } from '../utils/whatsapp';

interface BookingFormProps {
  initialService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialService = '',
  isModal = false,
  onClose,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    service: initialService || SERVICES_LIST[0].title,
    date: '',
    shift: 'tarde',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Generate the whatsapp link and open in new tab
    const url = createFormBookingWhatsAppLink(formData);
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      service: SERVICES_LIST[0].title,
      date: '',
      shift: 'tarde',
      notes: '',
    });
  };

  const content = (
    <div className={`p-6 sm:p-8 rounded-2xl bg-[var(--theme-card)] border border-[var(--theme-border)] shadow-xl relative ${isModal ? 'max-w-xl w-full' : ''}`}>
      {/* Kicker */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A]">
          <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
          <span>Solicitação de Orçamento VIP</span>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="text-[#30342C]/60 dark:text-[#F2EBDD]/80 hover:text-[#30342C] dark:hover:text-[#F2EBDD] text-xs px-2.5 py-1 rounded-md bg-[#DED3C1] dark:bg-[#394334] border border-[#DED3C1] dark:border-[#89947A]/35 cursor-pointer"
          >
            Fechar
          </button>
        )}
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--theme-text)] mb-2">
        Solicite seu Orçamento & Horário
      </h3>
      <p className="text-xs sm:text-sm text-[#30342C]/75 dark:text-[#F2EBDD]/80 mb-6">
        Preencha os dados abaixo. Você será encaminhada diretamente ao nosso WhatsApp com a mensagem formatada para atendimento rápido e personalizado no Studio Éden Concept.
      </p>

      {submitted ? (
        <div className="py-8 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 bg-[#DED3C1] dark:bg-[#46513A]/20 text-[#46513A] dark:text-[#89947A] rounded-full flex items-center justify-center mx-auto border border-[#89947A] dark:border-[#46513A]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-serif text-xl font-bold text-[var(--theme-text)]">
            Solicitação Encaminhada!
          </h4>
          <p className="text-xs text-[#30342C]/75 dark:text-[#F2EBDD]/80 max-w-md mx-auto">
            Abrimos a conversa no WhatsApp para você. Se a janela não abriu automaticamente, clique no botão abaixo para concluir o envio da mensagem.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={createFormBookingWhatsAppLink(formData)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] font-semibold text-xs rounded-xl shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Abrir WhatsApp do Studio</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleReset}
              className="py-3 px-6 bg-[#DED3C1] dark:bg-[#394334] hover:bg-[#DED3C1] dark:hover:bg-[#46513A] text-[#30342C] dark:text-[#F2EBDD]/90 font-medium text-xs rounded-xl border border-[#DED3C1] dark:border-[#89947A]/35 cursor-pointer"
            >
              Fazer outra solicitação
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#30342C]/85 dark:text-[#F2EBDD]/80 mb-1.5">
                Seu Nome Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#30342C]/45 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Ex: Amanda Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[var(--theme-page)] border border-[var(--theme-border)] focus:border-[#46513A] focus:bg-[#DED3C1] dark:focus:bg-[#252D22] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[var(--theme-text)] placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#30342C]/85 dark:text-[#F2EBDD]/80 mb-1.5">
                Telefone / WhatsApp *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#30342C]/45 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="(44) 8852-5656"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[var(--theme-page)] border border-[var(--theme-border)] focus:border-[#46513A] focus:bg-[#DED3C1] dark:focus:bg-[#252D22] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[var(--theme-text)] placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Service Select */}
          <div>
            <label className="block text-xs font-medium text-[#30342C]/85 dark:text-[#F2EBDD]/80 mb-1.5">
              Serviço Desejado *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-[var(--theme-page)] border border-[var(--theme-border)] focus:border-[#46513A] focus:bg-[#DED3C1] dark:focus:bg-[#252D22] rounded-xl px-4 py-2.5 text-xs text-[var(--theme-text)] outline-none transition-colors cursor-pointer"
            >
              {SERVICES_LIST.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title} ({s.price})
                </option>
              ))}
              <option value="Pacote com Múltiplos Serviços">
                Pacote com Múltiplos Serviços
              </option>
            </select>
          </div>

          {/* Date & Shift */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#30342C]/85 dark:text-[#F2EBDD]/80 mb-1.5">
                Data Preferencial
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#30342C]/45 absolute left-3.5 top-3" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[var(--theme-page)] border border-[var(--theme-border)] focus:border-[#46513A] focus:bg-[#DED3C1] dark:focus:bg-[#252D22] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[var(--theme-text)] outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#30342C]/85 dark:text-[#F2EBDD]/80 mb-1.5">
                Período Preferencial
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-[#30342C]/45 absolute left-3.5 top-3" />
                <select
                  value={formData.shift}
                  onChange={(e) =>
                    setFormData({ ...formData, shift: e.target.value as 'manha' | 'tarde' | 'noturno' })
                  }
                  className="w-full bg-[var(--theme-page)] border border-[var(--theme-border)] focus:border-[#46513A] focus:bg-[#DED3C1] dark:focus:bg-[#252D22] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[var(--theme-text)] outline-none transition-colors cursor-pointer"
                >
                  <option value="manha">Manhã (09:00 às 12:00)</option>
                  <option value="tarde">Tarde (12:00 às 18:00)</option>
                  <option value="noturno">Serviço Noturno VIP (Após 18:00 sob agendamento)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-medium text-[#30342C]/85 dark:text-[#F2EBDD]/80 mb-1.5">
              Observações (opcional)
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-[#30342C]/45 absolute left-3.5 top-3" />
              <textarea
                rows={3}
                placeholder="Ex: Gostaria de escova cacheada, é para um evento especial..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[var(--theme-page)] border border-[var(--theme-border)] focus:border-[#46513A] focus:bg-[#DED3C1] dark:focus:bg-[#252D22] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[var(--theme-text)] placeholder-neutral-400 dark:placeholder-neutral-500 outline-none transition-colors resize-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-[#46513A] hover:bg-[#252D22] text-[#F2EBDD] font-semibold text-xs rounded-xl shadow-md shadow-[#46513A]/25 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Pedir Orçamento no WhatsApp</span>
          </button>

          <p className="text-[11px] text-center text-[#30342C]/60 dark:text-[#F2EBDD]/65">
            Ao clicar, você será direcionada ao WhatsApp oficial ({SALON_INFO.phone}) com a mensagem pronta.
          </p>
        </form>
      )}
    </div>
  );

  if (isModal) {
    return (
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252D22]/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      >
        <div onClick={(e) => e.stopPropagation()}>{content}</div>
      </div>
    );
  }

  return (
    <section id="contato" className="py-20 bg-[var(--theme-page)] relative transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
};
