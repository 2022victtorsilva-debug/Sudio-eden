import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'navbar' | 'floating' | 'mobile';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'navbar', className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  if (variant === 'floating') {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? 'Mudar para fundo clean' : 'Mudar para fundo preto'}
        title={isDark ? 'Ativar versão fundo clean' : 'Ativar versão anterior com fundo preto'}
        className={`fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full backdrop-blur-md shadow-xl border transition-all duration-300 cursor-pointer active:scale-95 group ${
          isDark
            ? 'bg-[#30382B]/95 hover:bg-[#46513A] text-[#F2EBDD] border-[#89947A]/60 hover:border-[#89947A]'
            : 'bg-[#F2EBDD]/95 hover:bg-[#DED3C1] text-[#30342C] border-[#DED3C1] hover:border-[#46513A] shadow-[#252D22]/10'
        } ${className}`}
      >
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            isDark ? 'bg-[#46513A] text-[#F2EBDD]' : 'bg-[#DED3C1] text-[#46513A]'
          }`}
        >
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </div>
        <span className="text-xs font-semibold whitespace-nowrap">
          {isDark ? 'Fundo Clean' : 'Fundo Preto'}
        </span>
        <span
          className={`text-[10px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider hidden sm:inline-block ${
            isDark ? 'bg-[#46513A] text-[#F2EBDD]' : 'bg-[#DED3C1] text-[#46513A]'
          }`}
        >
          {isDark ? 'Modo Claro' : 'Versão Antiga'}
        </span>
      </button>
    );
  }

  if (variant === 'mobile') {
    return (
      <button
        onClick={toggleTheme}
        className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
          isDark
            ? 'bg-[#30382B] border-[#89947A]/60 text-[#F2EBDD] hover:bg-[#46513A] hover:border-[#89947A]'
            : 'bg-[#DED3C1]/80 border-[#DED3C1] text-[#30342C] hover:border-[#46513A]'
        } ${className}`}
      >
        <span className="flex items-center gap-2">
          {isDark ? (
            <Sun className="w-4 h-4 text-[#89947A]" />
          ) : (
            <Moon className="w-4 h-4 text-[#46513A]" />
          )}
          <span>{isDark ? 'Mudar para Fundo Clean (Bege)' : 'Mudar para Fundo Preto (Versão Anterior)'}</span>
        </span>
        <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${isDark ? 'bg-[#46513A] text-[#F2EBDD]' : 'bg-[#DED3C1] text-[#46513A]'}`}>
          {isDark ? 'Ativo: Preto' : 'Ativo: Clean'}
        </span>
      </button>
    );
  }

  // Default: navbar desktop button
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Mudar para fundo clean' : 'Mudar para fundo preto'}
      title={isDark ? 'Mudar para fundo clean' : 'Mudar para fundo preto (versão anterior)'}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer active:scale-95 ${
        isDark
          ? 'bg-[#30382B] hover:bg-[#46513A] text-[#F2EBDD] border-[#89947A]/60 hover:border-[#89947A]'
          : 'bg-[#DED3C1] hover:bg-[#DED3C1] text-[#30342C]/85 hover:text-[#30342C] border-[#DED3C1] hover:border-[#46513A]'
      } ${className}`}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-[#89947A]" />
          <span>Fundo Clean</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-[#46513A]" />
          <span>Fundo Preto</span>
        </>
      )}
    </button>
  );
};
