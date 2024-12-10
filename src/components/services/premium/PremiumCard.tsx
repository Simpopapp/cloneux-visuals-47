import { Crown } from "lucide-react";
import { Button } from "../../ui/button";
import { type PlanType } from "./types";

interface PremiumCardProps {
  service: PlanType;
  onPremiumClick: () => void;
}

export const PremiumCard = ({ service, onPremiumClick }: PremiumCardProps) => {
  return (
    <div 
      className="bg-black/30 p-8 rounded-xl border border-gold/30 hover:border-gold/50 transition-all duration-300 hover:scale-[1.01] backdrop-blur-sm"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h5 className="text-2xl font-serif text-gold">{service.title}</h5>
          <p className="text-gray-400 mt-1">{service.description}</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-gold">R$ {service.price}</span>
          <p className="text-sm text-gray-400 mt-1">por mês</p>
        </div>
      </div>
      <Button 
        onClick={onPremiumClick}
        className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-bold py-4 text-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
      >
        <Crown className="w-5 h-5" />
        Começar Agora
      </Button>
    </div>
  );
};