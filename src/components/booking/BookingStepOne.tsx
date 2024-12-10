import { ServiceSelect } from "./ServiceSelect";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Form } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(11, "Telefone deve ter pelo menos 11 dígitos"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecione um serviço"),
});

type FormData = z.infer<typeof formSchema>;

interface BookingStepOneProps {
  form: UseFormReturn<FormData>;
  onNext: () => void;
}

export const BookingStepOne = ({ form, onNext }: BookingStepOneProps) => {
  return (
    <Form {...form}>
      <div className="space-y-6 animate-fade-in">
        <ServiceSelect form={form} />
        <Button 
          className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-medium transition-all duration-300 group"
          disabled={!form.getValues("service")}
          onClick={onNext}
        >
          Escolher Data e Horário
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Form>
  );
};