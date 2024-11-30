import { Phone, Instagram } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
        
        <div className="flex justify-center space-x-8">
          <a href="tel:+1234567890" className="flex items-center text-gold hover:text-gold-light transition-colors">
            <Phone className="w-6 h-6 mr-2" />
            (123) 456-7890
          </a>
          
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-gold hover:text-gold-light transition-colors">
            <Instagram className="w-6 h-6 mr-2" />
            Follow us
          </a>
        </div>
      </div>
    </section>
  );
};