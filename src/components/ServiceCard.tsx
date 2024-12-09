import { Button } from "./ui/button";
import { Clock, Crown } from "lucide-react";
import { BookingDialog } from "./BookingDialog";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  isPremium?: boolean;
}

export const ServiceCard = ({ title, description, price, duration, isPremium }: ServiceCardProps) => {
  const getServiceValue = (title: string) => {
    const serviceMap: { [key: string]: string } = {
      "Corte": "corte",
      "Barba (Barboterapia com Ozônio)": "barba",
      "Sobrancelha": "sobrancelha",
      "Pezinho": "pezinho",
      "Corte + Barba": "corte-barba",
      "Corte, Barba e Sobrancelha": "corte-barba-sobrancelha",
      "Barba + Pezinho": "barba-pezinho",
      "Luzes": "luzes",
      "Platinado Global": "platinado",
      "Relaxamento": "relaxamento",
      "Selagem": "selagem",
      "Pigmento para Barba": "pigmento-barba"
    };
    return serviceMap[title] || "";
  };

  return (
    <div className={`${
      isPremium 
        ? "bg-gradient-to-b from-card to-card/95 border-gold shadow-xl shadow-gold/10 hover:shadow-gold/20" 
        : "bg-card hover:bg-card-hover"
    } p-6 rounded-lg border border-gold/20 transition-all duration-300`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`${
            isPremium 
              ? "text-xl font-bold text-gold" 
              : "text-lg font-medium text-white"
          }`}>
            {title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
        <span className="text-gold font-bold">R$ {price.toFixed(2)}</span>
      </div>
      
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <Clock className="w-4 h-4 mr-2" />
        {duration}
      </div>
      
      {isPremium ? (
        <Button 
          className="w-full bg-gold hover:bg-gold-light text-black font-bold py-3"
        >
          <Crown className="w-4 h-4 mr-2" />
          TORNE-SE PREMIUM
        </Button>
      ) : (
        <BookingDialog defaultService={getServiceValue(title)}>
          <Button 
            className="w-full bg-gold hover:bg-gold-light text-black font-bold py-3"
          >
            AGENDAR HORÁRIO
          </Button>
        </BookingDialog>
      )}
    </div>
  );
};