import { ServiceCard } from "./ServiceCard";

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

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 flex items-center">
            <span className="text-gold mr-2">✂</span> 
            Serviços Básicos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BASIC_SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-8 flex items-center">
            <span className="text-gold mr-2">⭐</span>
            Combos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMBO_SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};