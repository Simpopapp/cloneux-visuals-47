import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Scissors } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

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

export const ServiceSelect = ({ form }: ServiceSelectProps) => {
  return (
    <div className="bg-card rounded-lg p-4 border border-gold/10">
      <div className="flex items-center gap-2 mb-4 text-gold">
        <Scissors className="w-5 h-5" />
        <span className="font-medium">Serviço Desejado</span>
      </div>
      <FormField
        control={form.control}
        name="service"
        render={({ field }) => (
          <FormItem>
            <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
              value={field.value}
            >
              <FormControl>
                <SelectTrigger className="border-gold/20">
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="bg-background border border-gold/20">
                <SelectItem value="corte" className="focus:bg-gold/20 hover:bg-gold/10">Corte - R$ 60</SelectItem>
                <SelectItem value="barba" className="focus:bg-gold/20 hover:bg-gold/10">Barba - R$ 50</SelectItem>
                <SelectItem value="sobrancelha" className="focus:bg-gold/20 hover:bg-gold/10">Sobrancelha - R$ 10</SelectItem>
                <SelectItem value="pezinho" className="focus:bg-gold/20 hover:bg-gold/10">Pezinho - R$ 25</SelectItem>
                <SelectItem value="corte-barba" className="focus:bg-gold/20 hover:bg-gold/10">Corte + Barba - R$ 90</SelectItem>
                <SelectItem value="corte-barba-sobrancelha" className="focus:bg-gold/20 hover:bg-gold/10">Corte + Barba + Sobrancelha - R$ 99</SelectItem>
                <SelectItem value="barba-pezinho" className="focus:bg-gold/20 hover:bg-gold/10">Barba + Pezinho - R$ 60</SelectItem>
                <SelectItem value="luzes" className="focus:bg-gold/20 hover:bg-gold/10">Luzes - A partir de R$ 80</SelectItem>
                <SelectItem value="platinado" className="focus:bg-gold/20 hover:bg-gold/10">Platinado Global - R$ 180</SelectItem>
                <SelectItem value="relaxamento" className="focus:bg-gold/20 hover:bg-gold/10">Relaxamento - R$ 50</SelectItem>
                <SelectItem value="selagem" className="focus:bg-gold/20 hover:bg-gold/10">Selagem - A partir de R$ 80</SelectItem>
                <SelectItem value="pigmento-barba" className="focus:bg-gold/20 hover:bg-gold/10">Pigmento para Barba - R$ 28</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};