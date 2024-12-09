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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative group">
          <div className="h-[500px] rounded-xl overflow-hidden">
            <img 
              src="/lovable-uploads/6020cf09-2b24-487d-945a-9124c2be10fb.png"
              alt="Experiência Premium"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-gold px-6 py-2 rounded-full text-black text-sm font-semibold shadow-lg">
              Mais Vendido
            </span>
          </div>
        </div>
        
        <div className="flex flex-col justify-center lg:pl-8 space-y-8">
          <div>
            <h4 className="text-3xl font-serif text-gold mb-6">
              Elegância e Cuidado Exclusivo
            </h4>
            <p className="text-gray-300 leading-relaxed text-lg">
              Experimente o mais alto padrão em cuidados masculinos. Nosso pacote premium inclui:
            </p>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-gold" />
                <span className="text-lg">Corte personalizado com acabamento premium</span>
              </li>
              <li className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-gold" />
                <span className="text-lg">Barba alinhada com produtos exclusivos</span>
              </li>
              <li className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-gold" />
                <span className="text-lg">Hidratação facial profunda</span>
              </li>
              <li className="flex items-center gap-3">
                <Crown className="w-5 h-5 text-gold" />
                <span className="text-lg">Atendimento prioritário</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            {plans.map((service) => (
              <div key={service.title} className="bg-card/50 p-6 rounded-xl border border-gold/30 hover:border-gold/50 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h5 className="text-xl font-semibold text-gold">{service.title}</h5>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                  <span className="text-2xl font-bold text-gold">R$ {service.price}</span>
                </div>
                <BookingDialog defaultService="premium">
                  <Button className="w-full bg-gold hover:bg-gold-light text-black font-bold py-6 text-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
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