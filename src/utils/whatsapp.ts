import { SALON_INFO } from '../data/salonData';
import { BookingFormData } from '../types';

export function createWhatsAppLink(message: string): string {
  const cleanPhone = SALON_INFO.phoneRaw;
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function createServiceBookingWhatsAppLink(serviceTitle: string): string {
  const message = `Olá, Studio Éden Concept! 🌸\n\nGostaria de consultar os horários disponíveis para agendar:\n✨ *${serviceTitle}*\n\nPoderiam me enviar os próximos horários livres?`;
  return createWhatsAppLink(message);
}

export function createFormBookingWhatsAppLink(data: BookingFormData): string {
  const shiftMap: Record<string, string> = {
    manha: 'Manhã (09:00 às 12:00)',
    tarde: 'Tarde (12:00 às 18:00)',
    noturno: 'Serviço Noturno VIP (Após 18:00 sob agendamento)'
  };

  const shiftLabel = shiftMap[data.shift] || data.shift;

  let msg = `Olá, equipe do Studio Éden Concept! 🌸\n\nGostaria de solicitar um agendamento VIP:\n\n`;
  msg += `👤 *Nome:* ${data.name || 'Cliente'}\n`;
  if (data.phone) msg += `📱 *Telefone:* ${data.phone}\n`;
  msg += `✨ *Serviço desejado:* ${data.service}\n`;
  if (data.date) msg += `📅 *Data preferencial:* ${data.date}\n`;
  msg += `⏰ *Período preferido:* ${shiftLabel}\n`;
  if (data.notes) msg += `📝 *Observações / Detalhes:* ${data.notes}\n`;
  msg += `\nAguardando confirmação de horário. Muito obrigada! ✨`;

  return createWhatsAppLink(msg);
}

export function createGeneralInquiryWhatsAppLink(): string {
  const message = `Olá, Studio Éden Concept! Gostaria de tirar dúvidas sobre os serviços e agendamentos VIP na Av. Colombo, 7720 - Zona 06, Maringá - PR, 87080-190.`;
  return createWhatsAppLink(message);
}
