import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      <div className="relative group">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md border-y border-gold/10 py-8 transition-all duration-500 group-hover:border-gold/20"
        >
          <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center">
                <ChevronDown 
                  className={`w-6 h-6 text-gold transition-all duration-700 ${
                    isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                  }`}
                />
              </div>
              <div className="text-left">
                <h3 className="font-serif text-2xl text-gold/90 group-hover:text-gold transition-colors">
                  Experiência Premium
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-1">
                  Descubra benefícios exclusivos
                </p>
              </div>
            </div>
            <span className="hidden md:block text-sm text-gold/80 group-hover:text-gold transition-colors">
              {isExpanded ? "Clique para recolher" : "Clique para expandir"}
            </span>
          </div>
        </button>

        <div 
          className={`transform-gpu transition-all duration-700 ease-out overflow-hidden ${
            isExpanded 
              ? "max-h-[1000px] opacity-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-12 bg-gradient-to-b from-black/40 to-transparent">
            <div className="max-w-6xl mx-auto px-4">
              <PremiumContent 
                plans={plans}
                onPremiumClick={() => setShowPremiumModal(true)}
              />
            </div>
          </div>
        </div>
      </div>

      <PremiumModal plans={plans} />
    </div>
  );
};