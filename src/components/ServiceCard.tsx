import { Button } from "./ui/button";
import { Clock, Crown } from "lucide-react";
import { BookingDialog } from "./BookingDialog";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  isPremium?: boolean;
}

export const ServiceCard = ({ title, description, price, duration, isPremium }: ServiceCardProps) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);

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

  const handlePremiumClick = () => {
    setShowPremiumModal(true);
  };

  return (
    <>
      <div className={`group ${
        isPremium 
          ? "bg-gradient-to-b from-card to-card/95 border-gold shadow-xl shadow-gold/10 hover:shadow-gold/20" 
          : "bg-card hover:bg-card-hover"
      } p-6 rounded-lg border border-gold/20 transition-all duration-300 hover:scale-[1.02]`}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className={`${
              isPremium 
                ? "text-xl font-bold text-gold" 
                : "text-lg font-medium text-white group-hover:text-gold transition-colors"
            }`}>
              {title}
            </h3>
            <p className="text-sm text-gray-400 mt-1 group-hover:text-gray-300 transition-colors">{description}</p>
          </div>
          <span className="text-gold font-bold text-lg animate-fade-in">
            R$ {price.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
          <Clock className="w-4 h-4 mr-2" />
          {duration}
        </div>
        
        {isPremium ? (
          <Button 
            onClick={handlePremiumClick}
            className="w-full bg-gold hover:bg-gold-light text-black font-bold py-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <Crown className="w-4 h-4 mr-2" />
            TORNE-SE PREMIUM
          </Button>
        ) : (
          <BookingDialog defaultService={getServiceValue(title)}>
            <Button 
              className="w-full bg-gold hover:bg-gold-light text-black font-bold py-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              AGENDAR HORÁRIO
            </Button>
          </BookingDialog>
        )}
      </div>

      <Dialog open={showPremiumModal} onOpenChange={setShowPremiumModal}>
        <DialogContent className="bg-card border border-gold/20 max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gold flex items-center gap-2">
              <Crown className="w-6 h-6" />
              Benefícios Premium
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gold">Vantagens Exclusivas</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-300">
                  • Acesso a todos os serviços com desconto
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  • Agendamento prioritário
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  • Produtos exclusivos
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  • Atendimento VIP
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gold mb-2">Preço Premium</h4>
                <p className="text-3xl font-bold text-gold">R$ 249,90<span className="text-sm text-gray-400">/mês</span></p>
              </div>
            </div>
            
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/54640f51-cf29-4750-9008-f481803b60ed.png"
                alt="Premium Experience"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
          </div>

          <Button 
            onClick={() => setShowPremiumModal(false)}
            className="w-full mt-4 bg-gold hover:bg-gold-light text-black font-bold py-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <Crown className="w-4 h-4 mr-2" />
            ASSINAR PREMIUM
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};