import { ServiceCard } from "./ServiceCard";
import { Scissors, Star, Sparkles, Crown } from "lucide-react";
import { useInView } from "react-intersection-observer";

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
  const [comboRef, comboInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [specialRef, specialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
            <Crown className="w-6 h-6 text-gold mr-2" />
            <span className="text-gold">Sr. Oliveira PREMIUM</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/6020cf09-2b24-487d-945a-9124c2be10fb.png"
                alt="Experiência Premium"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-gold px-4 py-1 rounded-full text-black text-sm font-semibold">
                  Mais Vendido
                </span>
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h4 className="text-2xl font-serif text-gold mb-4">
                  Elegância e Cuidado Exclusivo
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Experimente o mais alto padrão em cuidados masculinos. Nosso pacote premium inclui:
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-gold" />
                    Corte personalizado com acabamento premium
                  </li>
                  <li className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-gold" />
                    Barba alinhada com produtos exclusivos
                  </li>
                  <li className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-gold" />
                    Hidratação facial profunda
                  </li>
                  <li className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-gold" />
                    Atendimento prioritário
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PLANS.map((service) => (
                  <ServiceCard key={service.title} {...service} />
                ))}
              </div>
            </div>
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

        <div 
          ref={comboRef}
          className={`mb-16 transition-all duration-1000 transform ${
            comboInView 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
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

        <div 
          ref={specialRef}
          className={`transition-all duration-1000 transform ${
            specialInView 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
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