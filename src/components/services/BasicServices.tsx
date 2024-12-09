import { Scissors } from "lucide-react";
import { ServiceCard } from "../ServiceCard";

interface ServiceType {
  title: string;
  description: string;
  price: number;
  duration: string;
}

interface BasicServicesProps {
  services: ServiceType[];
}

export const BasicServices = ({ services }: BasicServicesProps) => {
  return (
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-8 flex items-center justify-center">
        <Scissors className="w-6 h-6 text-gold mr-2" />
        <span className="text-gold">Serviços Básicos</span>
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};