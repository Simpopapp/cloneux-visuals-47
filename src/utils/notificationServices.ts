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
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Substitua pelo seu Service ID do EmailJS
      'YOUR_TEMPLATE_ID', // Substitua pelo seu Template ID do EmailJS
      {
        to_name: "Barbeiro",
        client_name: bookingData.name,
        client_phone: bookingData.phone,
        client_email: bookingData.email,
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time
      },
      'YOUR_PUBLIC_KEY' // Substitua pela sua Public Key do EmailJS
    );
    
    console.log('Email enviado com sucesso:', response);
    return response;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
}

export const addToGoogleCalendar = async (bookingData: BookingData) => {
  // Função para converter o formato da data
  const formatDateTime = (date: string, time: string) => {
    const [day, month, year] = date.split('/');
    const [hour, minute] = time.split(':');
    return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
  };

  const startTime = formatDateTime(bookingData.date, bookingData.time);
  const endTime = new Date(startTime.getTime() + 60 * 60 * 1000); // Adiciona 1 hora

  const event = {
    'summary': `Agendamento: ${bookingData.service}`,
    'description': `Cliente: ${bookingData.name}\nTelefone: ${bookingData.phone}\nEmail: ${bookingData.email}`,
    'start': {
      'dateTime': startTime.toISOString(),
      'timeZone': 'America/Sao_Paulo'
    },
    'end': {
      'dateTime': endTime.toISOString(),
      'timeZone': 'America/Sao_Paulo'
    }
  };

  // Aqui você precisará implementar a lógica de autenticação do Google Calendar
  // e a chamada para criar o evento
  console.log('Evento a ser criado:', event);
  
  // Exemplo de como seria a chamada (você precisará implementar a autenticação):
  /*
  const response = await gapi.client.calendar.events.insert({
    'calendarId': 'primary',
    'resource': event
  });
  */
}