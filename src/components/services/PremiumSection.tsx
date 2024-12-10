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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="relative group h-auto lg:h-[450px] rounded-l-xl overflow-hidden bg-card/80 border border-gold/20 hover:border-gold/40 transition-all duration-500 lg:col-span-7">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/95 z-10" />
          
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/9f29484c-dde6-4997-a2d1-a2c61cbea676.png"
              alt="Experiência Premium"
              className="w-full h-full object-cover opacity-95 transition-all duration-500 group-hover:opacity-100 scale-105 group-hover:scale-100"
            />
          </div>
          
          <div className="relative z-20 p-12 h-full flex flex-col justify-end">
            <div className="max-w-md transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="inline-block bg-gradient-to-r from-gold to-gold-light px-4 py-1.5 rounded-full text-black text-sm font-medium mb-6 shadow-lg">
                Experiência Premium
              </span>
              <h4 className="text-4xl font-serif text-white mb-4 leading-tight">
                Eleve seu estilo ao próximo nível
              </h4>
              <p className="text-gray-200 text-lg leading-relaxed opacity-90">
                Descubra o cuidado personalizado que você merece
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-between bg-gradient-to-l from-card via-card to-black/95 p-12 rounded-r-xl border-r border-t border-b border-gold/20 lg:col-span-5">
          <div>
            <h4 className="text-3xl font-serif text-gold mb-8">
              Benefícios Exclusivos
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 group">
                <Crown className="w-6 h-6 text-gold transition-all duration-300 group-hover:scale-110 mt-1" />
                <div>
                  <h5 className="font-medium text-white mb-1">Atendimento VIP</h5>
                  <p className="text-sm text-gray-400">Prioridade no agendamento e serviço personalizado</p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-300 group">
                <Crown className="w-6 h-6 text-gold transition-all duration-300 group-hover:scale-110 mt-1" />
                <div>
                  <h5 className="font-medium text-white mb-1">Produtos Premium</h5>
                  <p className="text-sm text-gray-400">Acesso a linha exclusiva de produtos importados</p>
                </div>
              </li>
              <li className="flex items-start gap-4 text-gray-300 group">
                <Crown className="w-6 h-6 text-gold transition-all duration-300 group-hover:scale-110 mt-1" />
                <div>
                  <h5 className="font-medium text-white mb-1">Serviços Ilimitados</h5>
                  <p className="text-sm text-gray-400">Aproveite todos os serviços sem restrições</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-10">
            {plans.map((service) => (
              <div key={service.title} 
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
                <BookingDialog defaultService="premium">
                  <Button 
                    className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-bold py-4 text-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    Começar Agora
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