import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { toast } from "sonner";
import { ServiceSelect } from "./booking/ServiceSelect";
import { UserDataForm } from "./booking/UserDataForm";
import { DateTimeSelect } from "./booking/DateTimeSelect";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(11, "Telefone deve ter pelo menos 11 dígitos"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecione um serviço"),
});

export interface BookingDialogProps {
  defaultService?: string;
  children: React.ReactNode;
}

export const BookingDialog = ({ defaultService, children }: BookingDialogProps) => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: defaultService || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!date || !time) {
      toast.error("Selecione data e horário");
      return;
    }

    console.log({
      ...values,
      date: format(date, "dd/MM/yyyy"),
      time,
    });

    toast.success("Agendamento realizado com sucesso!");
    form.reset();
    setDate(undefined);
    setTime(undefined);
    setStep(1);
    setOpen(false);
  };

  const resetDialog = () => {
    setStep(1);
    setDate(undefined);
    setTime(undefined);
    form.reset({
      name: "",
      phone: "",
      email: "",
      service: defaultService || "",
    });
  };

  return (
    <Dialog 
      open={open} 
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
        if (!isOpen) resetDialog();
      }}
    >
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background/95 backdrop-blur-sm border-gold/20 shadow-xl shadow-gold/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-gold">
            {step === 1 ? "Escolha a Data e Horário" : "Complete seu Agendamento"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <DateTimeSelect
            date={date}
            time={time}
            setDate={setDate}
            setTime={setTime}
          />
        )}

        {step === 2 && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <ServiceSelect form={form} />
              <UserDataForm form={form} />
              
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1 border-gold/20 hover:border-gold/40 hover:bg-gold/5"
                >
                  Voltar
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-gold hover:bg-gold-light text-black font-medium transition-all duration-300"
                >
                  Confirmar Agendamento
                </Button>
              </div>
            </form>
          </Form>
        )}

        {step === 1 && (
          <Button 
            className="w-full bg-gold hover:bg-gold-light text-black font-medium transition-all duration-300"
            disabled={!date || !time}
            onClick={() => setStep(2)}
          >
            Continuar
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};