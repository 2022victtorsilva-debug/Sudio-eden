import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'noivas', label: 'Noivas & Penteados' },
    { id: 'cabelos', label: 'Cabelos & Escova' },
    { id: 'unhas', label: 'Unhas & Spa' },
    { id: 'espaco', label: 'O Espaço VIP (Local)' },
  ];

  const displayOrder = [
    'portfolio-11',
    'portfolio-02',
    'portfolio-03',
    'portfolio-06',
    'portfolio-10',
    'portfolio-07',
    'portfolio-04',
    'portfolio-08',
    'portfolio-01',
    'portfolio-05',
    'gal-noiva-perolas',
    'gal-unhas-spa',
  ];

  const filteredItems = [...GALLERY_ITEMS]
    .filter((item) => selectedCategory === 'todos' || item.category === selectedCategory)
    .sort((a, b) => displayOrder.indexOf(a.id) - displayOrder.indexOf(b.id));

  return (
    <section id="portfolio" className="py-20 bg-[#DED3C1] dark:bg-[#252D22] border-b border-[var(--theme-border)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#46513A] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#46513A] dark:text-[#89947A]" />
              <span>Portfólio & Espaço Studio Éden Concept</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--theme-text)] tracking-tight">
              Galeria de Transformações & Detalhes
            </h2>
            <p className="mt-3 text-[#30342C]/75 dark:text-[#F2EBDD]/80 text-sm sm:text-base">
              Explore o resultado dos nossos penteados de noiva, escovas, cortes, maquiagens e conheça
              o ambiente acolhedor onde cada detalhe é planejado para o seu conforto.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#DED3C1]/80 dark:bg-[#30382B] border border-[var(--theme-border)] rounded-xl overflow-x-auto scrollbar-none self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#46513A] text-[#F2EBDD] shadow-xs'
                    : 'text-[#30342C]/75 dark:text-[#F2EBDD]/65 hover:text-[#30342C] dark:hover:text-[#F2EBDD] hover:bg-[#DED3C1] dark:hover:bg-[#30382B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery with natural image proportions */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5">
          {filteredItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                aria-label={`Abrir foto: ${item.categoryLabel}`}
                className="group relative block w-full break-inside-avoid mb-4 sm:mb-5 rounded-xl overflow-hidden bg-[#252D22] border border-[var(--theme-border)] cursor-pointer shadow-md hover:border-[#46513A] transition-all duration-300 text-left"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="block w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold text-[#F2EBDD] bg-[#252D22]/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                    {item.categoryLabel}
                  </span>
                </div>
              </button>
          ))}
        </div>
      </div>
    </section>
  );
};
