import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Scissors, Clock } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(11, "Telefone deve ter pelo menos 11 dígitos"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecione um serviço"),
});

type FormData = z.infer<typeof formSchema>;

interface ServiceSelectProps {
  form: UseFormReturn<FormData>;
}

const services = [
  { value: "corte", label: "Corte", price: "R$ 60", duration: "30 min" },
  { value: "barba", label: "Barba", price: "R$ 50", duration: "30 min" },
  { value: "sobrancelha", label: "Sobrancelha", price: "R$ 10", duration: "15 min" },
  { value: "pezinho", label: "Pezinho", price: "R$ 25", duration: "15 min" },
  { value: "corte-barba", label: "Corte + Barba", price: "R$ 90", duration: "60 min" },
  { value: "corte-barba-sobrancelha", label: "Corte + Barba + Sobrancelha", price: "R$ 99", duration: "90 min" },
  { value: "barba-pezinho", label: "Barba + Pezinho", price: "R$ 60", duration: "45 min" },
  { value: "luzes", label: "Luzes", price: "A partir de R$ 80", duration: "120 min" },
  { value: "platinado", label: "Platinado Global", price: "R$ 180", duration: "180 min" },
  { value: "relaxamento", label: "Relaxamento", price: "R$ 50", duration: "45 min" },
  { value: "selagem", label: "Selagem", price: "A partir de R$ 80", duration: "60 min" },
  { value: "pigmento-barba", label: "Pigmento para Barba", price: "R$ 28", duration: "30 min" },
];

export const ServiceSelect = ({ form }: ServiceSelectProps) => {
  return (
    <FormField
      control={form.control}
      name="service"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-transparent"
            >
              {services.map((service) => (
                <label
                  key={service.value}
                  className={cn(
                    "flex items-center justify-between space-x-3 rounded-lg border border-gold/20 p-4 cursor-pointer transition-all duration-300",
                    field.value === service.value 
                      ? "bg-gold/10 border-gold" 
                      : "hover:bg-gold/5 hover:border-gold/40"
                  )}
                >
                  <RadioGroupItem 
                    value={service.value} 
                    id={service.value}
                    className="sr-only"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center">
                      <Scissors className={cn(
                        "w-4 h-4 mr-2",
                        field.value === service.value ? "text-gold" : "text-muted-foreground"
                      )} />
                      <span className={cn(
                        "font-medium",
                        field.value === service.value ? "text-gold" : ""
                      )}>
                        {service.label}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                  <span className={cn(
                    "font-medium",
                    field.value === service.value ? "text-gold" : ""
                  )}>
                    {service.price}
                  </span>
                </label>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};