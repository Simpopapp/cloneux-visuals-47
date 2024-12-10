import { DateTimeSelect } from "./DateTimeSelect";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

interface BookingStepTwoProps {
  form: UseFormReturn<FormData>;
  date: Date | undefined;
  time: string | undefined;
  setDate: (date: Date | undefined) => void;
  setTime: (time: string | undefined) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const BookingStepTwo = ({ 
  form, 
  date, 
  time, 
  setDate, 
  setTime, 
  onPrevious, 
  onNext 
}: BookingStepTwoProps) => {
  return (
    <Form {...form}>
      <div className="space-y-6 animate-fade-in max-h-[60vh] overflow-y-auto">
        <DateTimeSelect
          date={date}
          time={time}
          setDate={setDate}
          setTime={setTime}
        />
        <div className="flex gap-2 sticky bottom-0 bg-background/95 backdrop-blur-sm py-4">
          <Button 
            variant="outline" 
            onClick={onPrevious}
            className="flex-1 border-gold/20 hover:border-gold/40 hover:bg-gold/5 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Button>
          <Button 
            className="flex-1 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-medium transition-all duration-300 group"
            disabled={!date || !time}
            onClick={onNext}
          >
            Seus Dados
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Form>
  );
};