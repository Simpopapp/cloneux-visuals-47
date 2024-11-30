import { Button } from "./ui/button";
import { Clock } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
}

export const ServiceCard = ({ title, description, price, duration }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-gold">R$ {price.toFixed(2)}</span>
      </div>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-400 mb-4">
        <Clock className="w-4 h-4 mr-2" />
        {duration}
      </div>
      <Button className="w-full btn-gold">Agendar</Button>
    </div>
  );
};