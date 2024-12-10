import { Crown } from "lucide-react";
import { PremiumBenefits } from "./PremiumBenefits";
import { PremiumCard } from "./PremiumCard";
import { type PlanType } from "./types";

interface PremiumContentProps {
  plans: PlanType[];
  onPremiumClick: () => void;
}

export const PremiumContent = ({ plans, onPremiumClick }: PremiumContentProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 animate-fade-in">
      <div className="relative group h-auto lg:h-[450px] rounded-l-xl overflow-hidden bg-card/80 border border-gold/20 hover:border-gold/40 transition-all duration-500 lg:col-span-7">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/90 z-10" />
        
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/9f29484c-dde6-4997-a2d1-a2c61cbea676.png"
            alt="Experiência Premium"
            className="w-full h-full object-cover opacity-95 transition-all duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
          />
        </div>
        
        <div className="relative z-20 p-12 h-full flex flex-col justify-end">
          <div className="max-w-md space-y-4">
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30">
              <Crown className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Premium</span>
            </div>
            <h4 className="text-4xl font-serif text-white leading-tight">
              Experiência Exclusiva
            </h4>
            <p className="text-lg text-gray-200/90 leading-relaxed">
              Um novo padrão de cuidado personalizado
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col justify-between bg-gradient-to-l from-card via-card to-black/95 p-12 rounded-r-xl border-r border-t border-b border-gold/20 lg:col-span-5">
        <PremiumBenefits />
        <div className="mt-10">
          {plans.map((service) => (
            <PremiumCard 
              key={service.title}
              service={service}
              onPremiumClick={onPremiumClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};