import React, { useState } from 'react';
import { Sparkles, Check, MessageCircle, RefreshCw, HeartHandshake } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp';

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  timeEstimate: string;
}

export const PackageCalculator: React.FC = () => {
  // Only the user's official services
  const options: ServiceOption[] = [
    { id: 'escova', name: 'Escova', category: 'Cabelos', timeEstimate: '~40 min' },
    { id: 'escova-cacheada-lisa-sem-custo', name: 'Escova cacheada/lisa Sem custo', category: 'Cabelos', timeEstimate: '~45 min' },
    { id: 'corte-de-cabelo', name: 'Corte de cabelo', category: 'Cabelos', timeEstimate: '~50 min' },
    { id: 'penteados', name: 'Penteados', category: 'Penteados', timeEstimate: '~1h a 2h' },
    { id: 'maquiagem', name: 'Maquiagem', category: 'Maquiagem', timeEstimate: '~50 min' },
    { id: 'servico-de-maquiagem', name: 'Serviço de maquiagem', category: 'Maquiagem', timeEstimate: '~1h 15 min' },
    { id: 'servico-noturno', name: 'Serviço noturno (19:30 às 23:00)', category: 'VIP', timeEstimate: 'Horário especial' },
    { id: 'shampoo-e-condicionador', name: 'Shampoo e condicionador', category: 'Tratamento', timeEstimate: '~40 min' },
    { id: 'salao-de-beleza-vip', name: 'Salão de beleza VIP', category: 'Experiência VIP', timeEstimate: 'Exclusivo' },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>([
    'escova-cacheada-lisa-sem-custo',
    'corte-de-cabelo',
  ]);

  const toggleOption = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectedItems = options.filter((opt) => selectedIds.includes(opt.id));

  const handleSendWhatsApp = () => {
    if (selectedItems.length === 0) return;
    const itemsList = selectedItems.map((s) => `• ${s.name}`).join('\n');
    const msg = `Olá, Studio Éden Concept! Gostaria de solicitar um orçamento para os seguintes serviços:\n\n${itemsList}\n\nValor: Orçamento sob consulta\nPoderiam me enviar o orçamento e a disponibilidade de datas e horários?`;
    window.open(createWhatsAppLink(msg), '_blank');
  };

  return (
    <section className="py-20 bg-[var(--theme-page)] border-b border-[var(--theme-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Info & checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A] mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
                <span>Simulador de Orçamento</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--theme-text)] tracking-tight">
                Selecione os Serviços Desejados para seu Orçamento
              </h2>
              <p className="mt-2 text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-sm sm:text-base">
                Marque os serviços que você deseja realizar no Studio Éden Concept. Enviamos seu orçamento
                detalhado e personalizado diretamente pelo WhatsApp em poucos minutos.
              </p>
            </div>

            {/* Checklist options */}
            <div className="space-y-2.5">
              {options.map((opt) => {
                const isSelected = selectedIds.includes(opt.id);
                return (
                  <div
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[var(--theme-card)] border-[#46513A] shadow-sm shadow-[#46513A]/10'
                        : 'bg-[#F2EBDD]/80 dark:bg-[#30382B]/60 border-[var(--theme-border)] hover:border-[#46513A] dark:hover:border-[#89947A]/35 hover:bg-[#DED3C1] dark:hover:bg-[#252D22]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected
                            ? 'bg-[#46513A] border-[#46513A] text-[#F2EBDD]'
                            : 'border-[#DED3C1] dark:border-[#89947A]/45 bg-[#DED3C1] dark:bg-[#394334]'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-[var(--theme-text)]">
                          {opt.name}
                        </p>
                        <p className="text-[11px] text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                          {opt.category} • {opt.timeEstimate}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#46513A]">
                        Orçamento
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--theme-card)] border border-[var(--theme-border)] shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--theme-border)]">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[var(--theme-text)]">
                    Resumo do Pedido de Orçamento
                  </h3>
                  <span className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                    {selectedItems.length} {selectedItems.length === 1 ? 'serviço selecionado' : 'serviços selecionados'}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedIds([])}
                  className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65 hover:text-[#30342C] dark:hover:text-[#F2EBDD] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  Limpar
                </button>
              </div>

              {selectedItems.length === 0 ? (
                <p className="text-xs text-[#30342C]/60 dark:text-[#F2EBDD]/65 py-6 text-center">
                  Nenhum serviço selecionado no momento. Clique nos itens ao lado para compor sua lista.
                </p>
              ) : (
                <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-xs py-1.5 border-b border-[var(--theme-border)]">
                      <span className="text-[#30342C] dark:text-[#F2EBDD]/90 font-medium">{item.name}</span>
                      <span className="text-[#46513A] font-semibold">Orçamento</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Metrics */}
              <div className="pt-4 border-t border-[var(--theme-border)] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#30342C]/75 dark:text-[#F2EBDD]/65 font-medium">Preço dos Serviços:</span>
                  <div className="text-right">
                    <span className="text-xl font-bold font-serif text-[#46513A]">
                      Orçamento Sob Consulta
                    </span>
                    <span className="block text-[10px] text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                      Personalizado de acordo com o comprimento e necessidade
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                disabled={selectedItems.length === 0}
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 px-4 bg-[#46513A] hover:bg-[#252D22] disabled:opacity-40 disabled:pointer-events-none text-[#F2EBDD] font-semibold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#46513A]" />
                Pedir Orçamento dos Selecionados no WhatsApp
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#30342C]/60 dark:text-[#F2EBDD]/65">
                <HeartHandshake className="w-3.5 h-3.5 text-[#46513A]" />
                <span>Atendimento atencioso • Av. Colombo, 7720 - Zona 06, Maringá - PR, 87080-190</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
