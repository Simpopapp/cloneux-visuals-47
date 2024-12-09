import { ServiceCard } from "./ServiceCard";
import { Scissors, Star, Sparkles, Crown } from "lucide-react";

const BASIC_SERVICES = [
  {
    title: "Corte",
    description: "Corte tradicional",
    price: 60,
    duration: "30 min"
  },
  {
    title: "Barba (Barboterapia com Ozônio)",
    description: "Tratamento completo com ozônio",
    price: 50,
    duration: "30 min"
  },
  {
    title: "Sobrancelha",
    description: "Design e acabamento perfeito",
    price: 10,
    duration: "15 min"
  },
  {
    title: "Pezinho",
    description: "Acabamento na nuca",
    price: 25,
    duration: "15 min"
  }
];

const COMBO_SERVICES = [
  {
    title: "Corte + Barba",
    description: "Combo completo",
    price: 90,
    duration: "60 min"
  },
  {
    title: "Corte, Barba e Sobrancelha",
    description: "Pacote completo de cuidados",
    price: 99,
    duration: "90 min"
  },
  {
    title: "Barba + Pezinho",
    description: "Acabamento completo",
    price: 60,
    duration: "45 min"
  }
];

const SPECIAL_TREATMENTS = [
  {
    title: "Luzes",
    description: "A partir de",
    price: 80,
    duration: "120 min"
  },
  {
    title: "Platinado Global",
    description: "Descoloração completa",
    price: 180,
    duration: "180 min"
  },
  {
    title: "Relaxamento",
    description: "Tratamento para cabelos",
    price: 50,
    duration: "45 min"
  },
  {
    title: "Selagem",
    description: "A partir de",
    price: 80,
    duration: "60 min"
  },
  {
    title: "Pigmento para Barba",
    description: "Coloração e acabamento",
    price: 28,
    duration: "30 min"
  }
];

const PLANS = [
  {
    title: "Sr. Oliveira PREMIUM",
    description: "Acesso exclusivo e ilimitado a todos os serviços premium",
    price: 249,
    duration: "30 dias",
    isPremium: true
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
            <Crown className="w-6 h-6 text-gold mr-2" />
            <span className="text-gold">Sr. Oliveira PREMIUM</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {PLANS.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
            <Scissors className="w-6 h-6 text-gold mr-2" />
            <span className="text-gold">Serviços Básicos</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BASIC_SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
            <Star className="w-6 h-6 text-gold mr-2" />
            <span className="text-gold">Combos</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMBO_SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-gold mr-2" />
            <span className="text-gold">Tratamentos Especiais</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIAL_TREATMENTS.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
