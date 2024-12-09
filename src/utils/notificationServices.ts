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

    // Envia e-mail para o cliente (usando o novo template que você vai criar)
    await emailjs.send(
      'service_wef6lur',  // Use o mesmo Service ID
      'template_909kvnt', // Coloque aqui o ID do novo template que você vai criar para o cliente
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

export const downloadCalendarEvent = (bookingData: BookingData) => {
  // Converter data e hora para formato adequado
  const [day, month, year] = bookingData.date.split('/');
  const [hour, minute] = bookingData.time.split(':');
  const startDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // Adiciona 1 hora

  // Criar conteúdo do arquivo .ics
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:Agendamento: ${bookingData.service}
DESCRIPTION:Cliente: ${bookingData.name}\\nTelefone: ${bookingData.phone}\\nEmail: ${bookingData.email}
LOCATION:Sr. Oliveira Barbearia
END:VEVENT
END:VCALENDAR`;

  // Criar e fazer download do arquivo
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', 'agendamento.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Função auxiliar para formatar data no padrão ICS
function formatDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}
