import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesMenu } from './components/ServicesMenu';
import { SalonLocation } from './components/SalonLocation';
import { Gallery } from './components/Gallery';
import { VipExperience } from './components/VipExperience';
import { PackageCalculator } from './components/PackageCalculator';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LightboxModal } from './components/LightboxModal';
import { GalleryItem } from './types';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');

  const handleOpenBookingModal = (serviceTitle: string = '') => {
    setSelectedServiceForModal(serviceTitle);
    setIsBookingModalOpen(true);
  };

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    root.classList.add('entrance-ready');
    let secondFrame = 0;
    const frame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => root.classList.add('entrance-active'));
    });
    const timeout = window.setTimeout(() => root.classList.remove('entrance-ready', 'entrance-active'), 1250);
    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(timeout);
      root.classList.remove('entrance-ready', 'entrance-active');
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main > section:not(:first-child)'));
    const targets = sections.flatMap((section) => {
      const container = section.querySelector<HTMLElement>(':scope > div');
      if (!container) return [];
      const groups = Array.from(container.children).filter((child): child is HTMLElement => child instanceof HTMLElement);
      const cards = Array.from(section.querySelectorAll<HTMLElement>('.grid.gap-6 > *'));
      return [...groups, ...cards];
    });

    targets.forEach((element) => {
      element.classList.add('scroll-reveal');
      const siblings = Array.from(element.parentElement?.children ?? []);
      element.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(element) % 4, 3) * 100}ms`);
    });
    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    targets.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
      targets.forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-visible');
        element.style.removeProperty('--reveal-delay');
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--theme-page)] text-[var(--theme-text)] flex flex-col selection:bg-[#46513A] selection:text-[#F2EBDD] transition-colors duration-300">
      {/* Navigation Top Bar Contract */}
      <Navbar onOpenBooking={() => handleOpenBookingModal()} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBookingModal()} />

        {/* Cardápio de Serviços Completo */}
        <ServicesMenu
          onSelectServiceForBooking={(serviceTitle) => handleOpenBookingModal(serviceTitle)}
        />

        {/* Nosso Espaço VIP na Av. Colombo (Foto do Local) */}
        <SalonLocation />

        {/* Galeria de Fotos / Portfólio das Clientes & Trabalhos */}
        <Gallery onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* Experiência VIP e Diferenciais Exclusivos (Serviço Noturno, Visagismo, etc.) */}
        <VipExperience />

        {/* Simulador Interativo de Orçamento */}
        <PackageCalculator />

        {/* Depoimentos de Clientes Reais em Maringá */}
        <Testimonials />

        {/* Perguntas Frequentes (FAQ) */}
        <Faq />

        {/* Formulário Institucional de Agendamento */}
        <BookingForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Lightbox Modal for Gallery Images */}
      {lightboxItem && (
        <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}

      {/* Booking Form Modal Triggered by Buttons */}
      {isBookingModalOpen && (
        <BookingForm
          initialService={selectedServiceForModal}
          isModal={true}
          onClose={() => setIsBookingModalOpen(false)}
        />
      )}
    </div>
  );
}
