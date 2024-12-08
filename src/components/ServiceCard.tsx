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
  return (
    <div className={`${
      isPremium 
        ? "bg-gradient-to-b from-card to-card/95 border-gold shadow-xl shadow-gold/10 hover:shadow-gold/20" 
        : "bg-card hover:bg-card-hover border-gold/20 hover:border-gold/40"
    } p-6 rounded-lg border transition-all duration-300 ${
      isPremium ? "lg:scale-110" : ""
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className={`${
          isPremium 
            ? "text-lg font-bold text-gold bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent" 
            : "text-lg font-semibold text-white"
        }`}>
          {title}
        </h3>
        <span className="text-gold font-semibold">R$ {price.toFixed(2)}</span>
      </div>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-400 mb-4">
        <Clock className="w-4 h-4 mr-2" />
        {duration}
      </div>
      {isPremium ? (
        <Button 
          className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-bold shadow-lg hover:shadow-gold/20 transition-all duration-300"
        >
          <Crown className="w-4 h-4 mr-2" />
          Torne-se Premium
        </Button>
      ) : (
        <BookingDialog />
      )}
    </div>
  );
};