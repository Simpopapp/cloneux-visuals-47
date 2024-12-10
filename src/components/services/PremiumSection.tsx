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
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm border border-gold/10 hover:border-gold/30 py-6 px-4 transition-all duration-500 hover:shadow-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-center justify-center gap-3">
          <span className="font-serif text-xl text-gold/90 group-hover:text-gold transition-colors">
            Descubra a Experiência Premium
          </span>
          <ChevronDown 
            className={`w-5 h-5 text-gold/80 group-hover:text-gold transition-all duration-500 ${
              isExpanded ? "rotate-180" : "animate-bounce"
            }`}
          />
        </div>
      </button>

      <div 
        className={`transform-gpu transition-all duration-700 ease-out ${
          isExpanded 
            ? "max-h-[1000px] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <div className="pt-6">
          <PremiumContent 
            plans={plans}
            onPremiumClick={() => setShowPremiumModal(true)}
          />
        </div>
      </div>

      <PremiumModal plans={plans} />
    </div>
  );
};