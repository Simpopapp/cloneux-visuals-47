import emailjs from '@emailjs/browser';

interface BookingData {
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
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        to_name: "Barbeiro",
        client_name: bookingData.name,
        client_phone: bookingData.phone,
        client_email: bookingData.email,
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    );
    
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export const addToGoogleCalendar = async (bookingData: BookingData) => {
  // Note: This is a placeholder for Google Calendar integration
  // You'll need to set up OAuth2 credentials and handle the calendar API
  console.log('Adding to Google Calendar:', bookingData);
}