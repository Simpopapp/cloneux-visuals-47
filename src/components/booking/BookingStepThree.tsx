import { UserDataForm } from "./UserDataForm";
import { Button } from "../ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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

interface BookingStepThreeProps {
  form: UseFormReturn<FormData>;
  onPrevious: () => void;
  onSubmit: (values: z.infer<typeof formSchema>) => Promise<void>;
}

export const BookingStepThree = ({ form, onPrevious, onSubmit }: BookingStepThreeProps) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
        <UserDataForm form={form} />
        
        <div className="flex gap-2 sticky bottom-0 bg-background/95 backdrop-blur-sm py-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onPrevious}
            className="flex-1 border-gold/20 hover:border-gold/40 hover:bg-gold/5 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Button>
          <Button 
            type="submit"
            className="flex-1 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-medium transition-all duration-300 group"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Confirmar
          </Button>
        </div>
      </form>
    </Form>
  );
};