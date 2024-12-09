import { PremiumSection } from "./services/PremiumSection";
import { BasicServices } from "./services/BasicServices";
import { ComboServices } from "./services/ComboServices";
import { SpecialTreatments } from "./services/SpecialTreatments";

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
        <PremiumSection plans={PLANS} />
        <BasicServices services={BASIC_SERVICES} />
        <ComboServices services={COMBO_SERVICES} />
        <SpecialTreatments services={SPECIAL_TREATMENTS} />
      </div>
    </section>
  );
};
