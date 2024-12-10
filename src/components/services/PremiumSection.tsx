import { useState } from "react";
import { ChevronDown, Crown } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PremiumContent } from "./premium/PremiumContent";
import { PremiumModal } from "./premium/PremiumModal";
import { type PlanType } from "./premium/types";

interface PremiumSectionProps {
  plans: PlanType[];
}

export const PremiumSection = ({ plans }: PremiumSectionProps) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-16">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group w-full py-6 px-4 transition-all duration-500 relative"
      >
        {/* Permanent decorative elements */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        
        <div className="relative flex items-center justify-center gap-3 group-hover:-translate-y-0.5 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/0 to-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          
          <span className="font-serif text-xl text-gold/90 group-hover:text-gold transition-colors relative">
            Descubra a Experiência Premium
          </span>
          
          <ChevronDown 
            className={`w-5 h-5 text-gold/80 group-hover:text-gold transition-all duration-500 ${
              isExpanded 
                ? "rotate-180" 
                : "animate-pulse group-hover:animate-none group-hover:translate-y-0.5"
            }`}
          />
          
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </div>
      </button>

      <div 
        className={`transform-gpu transition-all duration-700 ease-out ${
          isExpanded 
            ? "max-h-[1000px] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="pt-8">
          <PremiumContent 
            plans={plans}
            onPremiumClick={() => setShowPremiumModal(true)}
          />
        </div>
      </div>

      <Dialog open={showPremiumModal} onOpenChange={setShowPremiumModal}>
        <DialogContent className="bg-black/95 border border-gold/20 max-w-4xl p-0 gap-0">
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
                  <span className="text-gold">✨</span>
                  Benefícios Exclusivos
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-200">
                    <span className="text-gold">✓</span>
                    Agendamento prioritário
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <span className="text-gold">✓</span>
                    Produtos importados exclusivos
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <span className="text-gold">✓</span>
                    Serviços ilimitados
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <span className="text-gold">✓</span>
                    Descontos especiais
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gold flex items-center gap-2">
                  <span className="text-gold">🛡️</span>
                  Garantias
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-200">
                    <span className="text-gold">⏰</span>
                    7 dias de garantia
                  </li>
                  <li className="flex items-center gap-2 text-gray-200">
                    <span className="text-gold">🎁</span>
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

              <button 
                onClick={() => setShowPremiumModal(false)}
                className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black text-lg font-bold py-6 rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Crown className="w-5 h-5" />
                Assinar Premium
              </button>

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