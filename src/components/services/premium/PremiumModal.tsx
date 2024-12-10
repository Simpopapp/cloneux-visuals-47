import { Crown, Check, Sparkles, Clock, Shield, Gift } from "lucide-react";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";

interface PlanType {
  title: string;
  description: string;
  price: number;
  duration: string;
  isPremium?: boolean;
}

interface PremiumModalProps {
  plans: PlanType[];
}

export const PremiumModal = ({ plans }: PremiumModalProps) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  return (
    <div className="mb-16">
      <Dialog open={showPremiumModal} onOpenChange={setShowPremiumModal}>
        <DialogContent className="bg-gradient-to-b from-card to-black/95 border-gold/20 max-w-4xl p-0 gap-0">
          <DialogHeader className="p-6 border-b border-gold/10">
            <DialogTitle className="text-3xl font-serif text-gold flex items-center gap-2">
              <Crown className="w-6 h-6" />
              Plano Premium
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 p-6 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gold flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Benefícios Exclusivos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-gold" />
                    Agendamento prioritário
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-gold" />
                    Produtos importados exclusivos
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-gold" />
                    Serviços ilimitados
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <Check className="w-5 h-5 text-gold" />
                    Descontos especiais
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gold flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Garantias
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-200">
                    <Clock className="w-5 h-5 text-gold" />
                    7 dias de garantia
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <Gift className="w-5 h-5 text-gold" />
                    Primeiro mês com 50% de desconto
                  </li>
                </ul>
              </div>

              <div className="bg-black/30 p-6 rounded-xl border border-gold/20">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-gold">R$ 249,90</span>
                  <span className="text-sm text-gray-400 mb-1.5">/mês</span>
                </div>
                <p className="text-sm text-gray-300">Cancele quando quiser, sem compromisso.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/54640f51-cf29-4750-9008-f481803b60ed.png"
                  alt="Premium Experience"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif text-white mb-2">Experiência Premium</h3>
                  <p className="text-gray-200">Eleve seu estilo ao próximo nível</p>
                </div>
              </div>

              <Button 
                onClick={() => setShowPremiumModal(false)}
                className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black text-lg font-bold py-6 rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Crown className="w-5 h-5" />
                Assinar Premium
              </Button>

              <p className="text-center text-sm text-gray-400">
                Ao assinar, você concorda com nossos termos de serviço e política de privacidade
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
