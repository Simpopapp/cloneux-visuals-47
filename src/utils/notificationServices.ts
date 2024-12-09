import emailjs from '@emailjs/browser';

export interface BookingData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
}

export const sendBookingNotification = async (bookingData: BookingData) => {
  try {
    // Envia e-mail para o barbeiro (usando o template que você já configurou)
    await emailjs.send(
      'service_wef6lur',  // Mantenha o Service ID que você já está usando
      'template_9yobi0j', // Mantenha o Template ID que você já está usando
      {
        to_name: "Barbeiro",
        client_name: bookingData.name,
        client_phone: bookingData.phone,
        client_email: bookingData.email,
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time
      },
      'UgkVEtqBQyHsR8DDF'  // Mantenha a Public Key que você já está usando
    );

    // Envia e-mail para o cliente (usando o novo template que você criou)
    await emailjs.send(
      'service_wef6lur',  // Use o mesmo Service ID
      'template_909kvnt', // Coloque aqui o ID do novo template que você criou para o cliente
      {
        to_name: bookingData.name,
        client_name: bookingData.name,
        client_phone: bookingData.phone,
        client_email: bookingData.email,
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time
      },
      'UgkVEtqBQyHsR8DDF'  // Use a mesma Public Key
    );
    
    console.log('Emails enviados com sucesso');
    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
}

export const shareOnWhatsApp = (bookingData: BookingData) => {
  const serviceNames: { [key: string]: string } = {
    'corte': 'Corte de Cabelo',
    'barba': 'Barba',
    'sobrancelha': 'Design de Sobrancelha',
    'pezinho': 'Pezinho',
    'corte-barba': 'Corte + Barba',
    'corte-barba-sobrancelha': 'Corte + Barba + Sobrancelha',
    'barba-pezinho': 'Barba + Pezinho',
    'luzes': 'Luzes',
    'platinado': 'Platinado Global',
    'relaxamento': 'Relaxamento',
    'selagem': 'Selagem',
    'pigmento-barba': 'Pigmentação de Barba'
  };

  const serviceName = serviceNames[bookingData.service] || bookingData.service;
  const BARBER_PHONE = '5519994108544'; // Substitua pelo seu número real
  const BARBER_ADDRESS = 'Rua Exemplo, 123 - Centro, Cidade'; // Substitua pelo endereço real

  // Mensagem única contendo ambos os contatos
  const message = encodeURIComponent(
    `*Confirmação de Agendamento - Sr. Oliveira Barbearia*\n\n` +
    `Olá ${bookingData.name}! Aqui estão os detalhes do seu agendamento:\n\n` +
    `📅 Data: ${bookingData.date}\n` +
    `⏰ Horário: ${bookingData.time}\n` +
    `✂️ Serviço: ${serviceName}\n\n` +
    `📍 Endereço: ${BARBER_ADDRESS}\n` +
    `📞 Contatos:\n` +
    `- Barbearia: ${BARBER_PHONE}\n` +
    `- Cliente: ${bookingData.phone}\n\n` +
    `Em caso de imprevisto, favor entrar em contato para remarcar.\n\n` +
    `Dados adicionais do agendamento:\n` +
    `Nome: ${bookingData.name}\n` +
    `Email: ${bookingData.email}`
  );

  // Formata o número do barbeiro para o padrão internacional
  const formattedBarberPhone = BARBER_PHONE
    .replace(/\D/g, '')
    .replace(/^0/, '')
    .replace(/^(\d{2})/, '55$1');

  // Abre WhatsApp para o barbeiro
  window.open(`https://wa.me/${formattedBarberPhone}?text=${message}`, '_blank');
}

export const downloadCalendarEvent = (bookingData: BookingData) => {
  // Converter data e hora para formato adequado
  const [day, month, year] = bookingData.date.split('/');
  const [hour, minute] = bookingData.time.split(':');
  const startDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Adiciona 1 hora

  // Formatar o nome do serviço para o título
  const serviceNames: { [key: string]: string } = {
    'corte': 'Corte de Cabelo',
    'barba': 'Barba',
    'sobrancelha': 'Design de Sobrancelha',
    'pezinho': 'Pezinho',
    'corte-barba': 'Corte + Barba',
    'corte-barba-sobrancelha': 'Corte + Barba + Sobrancelha',
    'barba-pezinho': 'Barba + Pezinho',
    'luzes': 'Luzes',
    'platinado': 'Platinado Global',
    'relaxamento': 'Relaxamento',
    'selagem': 'Selagem',
    'pigmento-barba': 'Pigmentação de Barba'
  };

  const serviceName = serviceNames[bookingData.service] || bookingData.service;

  // Criar conteúdo do arquivo .ics
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${serviceName} - Sr. Oliveira Barbearia
DESCRIPTION:Seu agendamento na Sr. Oliveira Barbearia\\n\\nServiço: ${serviceName}\\nData: ${bookingData.date}\\nHorário: ${bookingData.time}\\n\\nEndereço: Rua Exemplo\\, 123\\nTelefone: (19) 994108544\\n\\nEm caso de imprevisto\\, favor entrar em contato para remarcar.
LOCATION:Sr. Oliveira Barbearia - Rua Exemplo\\, 123
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT1H
ACTION:DISPLAY
DESCRIPTION:Lembrete: ${serviceName} na Sr. Oliveira Barbearia
END:VALARM
END:VEVENT
END:VCALENDAR`;

  // Criar e fazer download do arquivo
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  
  // Nome do arquivo mais descritivo
  const fileName = `Agendamento_SrOliveira_${bookingData.date.replace(/\//g, '-')}_${bookingData.time.replace(':', 'h')}.ics`;
  link.setAttribute('download', fileName);
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Função auxiliar para formatar data no padrão ICS
function formatDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}
