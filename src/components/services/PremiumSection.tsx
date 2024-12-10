import { useState } from "react";
import { ChevronDown, Crown, Check, Sparkles } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PremiumContent } from "./premium/PremiumContent";
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
        <DialogContent className="bg-gradient-to-b from-black/95 to-black/98 border border-gold/20 max-w-4xl overflow-hidden">
          <DialogHeader className="p-8 border-b border-gold/10">
            <DialogTitle className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold flex items-center gap-3">
              <Crown className="w-8 h-8 text-gold" />
              Experiência Premium
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-medium text-gold flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  Benefícios Exclusivos
                </h3>
                <ul className="space-y-4">
                  {[
                    "Agendamento prioritário",
                    "Produtos importados exclusivos",
                    "Serviços ilimitados",
                    "Descontos especiais em todos os serviços"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-200 group">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 group-hover:from-gold/30 group-hover:to-gold/20 transition-all duration-300">
                        <Check className="w-3.5 h-3.5 text-gold" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative p-8 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
                <div className="relative">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gold">R$ 249,90</span>
                    <span className="text-sm text-gray-400">/mês</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-300">
                    Cancele quando quiser, sem compromisso
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative h-[300px] rounded-2xl overflow-hidden group">
                <img 
                  src="/lovable-uploads/54640f51-cf29-4750-9008-f481803b60ed.png"
                  alt="Premium Experience"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold mb-4">
                    Eleve seu Estilo
                  </h3>
                  <p className="text-lg text-gray-100 leading-relaxed max-w-md">
                    Desfrute de uma experiência exclusiva com produtos premium e atendimento personalizado
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                  <button
                    onClick={() => setShowPremiumModal(false)}
                    className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black text-lg font-bold py-4 rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <Crown className="w-5 h-5" />
                    <span className="relative">Começar Agora</span>
                  </button>

                <p className="text-center text-sm text-gray-400">
                  Cancele quando quiser, sem compromisso
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
