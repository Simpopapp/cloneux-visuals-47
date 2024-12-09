import { Crown } from "lucide-react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../ui/button";
import { BookingDialog } from "../BookingDialog";

interface PlanType {
  title: string;
  description: string;
  price: number;
  duration: string;
  isPremium?: boolean;
}

interface PremiumSectionProps {
  plans: PlanType[];
}

export const PremiumSection = ({ plans }: PremiumSectionProps) => {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
        <Crown className="w-6 h-6 text-gold mr-2" />
        <span className="text-gold">Sr. Oliveira PREMIUM</span>
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="relative group h-auto lg:h-[400px] rounded-l-xl overflow-hidden bg-card/80 border border-gold/20 hover:border-gold/40 transition-all duration-500 lg:col-span-7">
          {/* Multiple layered gradients for sophisticated darkening effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/90 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/90 to-black z-10" />
          
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/9f29484c-dde6-4997-a2d1-a2c61cbea676.png"
              alt="Experiência Premium"
              className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
            />
          </div>
          
          <div className="relative z-20 p-8 h-full flex flex-col justify-between">
            <div>
              <span className="inline-block bg-gold/90 px-4 py-1.5 rounded-full text-black text-sm font-medium shadow-lg">
                Mais Vendido
              </span>
              <h4 className="text-2xl font-serif text-white mt-4 mb-2">
                Elegância e Sofisticação
              </h4>
              <p className="text-gray-200 text-sm leading-relaxed max-w-md">
                Uma experiência única de cuidado masculino, com produtos premium e atendimento exclusivo.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center space-y-8 bg-gradient-to-l from-card via-card to-black/95 p-8 rounded-r-xl border-r border-t border-b border-gold/20 lg:col-span-5">
          <div>
            <h4 className="text-2xl font-serif text-gold mb-6">
              Benefícios Exclusivos
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300 group">
                <Crown className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                <span>Corte personalizado com acabamento premium</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group">
                <Crown className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                <span>Barba alinhada com produtos exclusivos</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group">
                <Crown className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                <span>Hidratação facial profunda</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group">
                <Crown className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                <span>Atendimento prioritário</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            {plans.map((service) => (
              <div key={service.title} 
                className="bg-black/20 p-6 rounded-xl border border-gold/30 hover:border-gold/50 transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h5 className="text-xl font-semibold text-gold">{service.title}</h5>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-gold">R$ {service.price}</span>
                </div>
                <BookingDialog defaultService="premium">
                  <Button 
                    className="w-full bg-gold hover:bg-gold-light text-black font-bold py-4 text-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    ASSINAR PREMIUM
                  </Button>
                </BookingDialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};