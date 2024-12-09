import { Star } from "lucide-react";
import { ServiceCard } from "../ServiceCard";
import { useInView } from "react-intersection-observer";

interface ServiceType {
  title: string;
  description: string;
  price: number;
  duration: string;
}

interface ComboServicesProps {
  services: ServiceType[];
}

export const ComboServices = ({ services }: ComboServicesProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`mb-16 transition-all duration-1000 transform ${
        inView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
    >
      <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
        <Star className="w-6 h-6 text-gold mr-2" />
        <span className="text-gold">Combos</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};