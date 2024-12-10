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
import { sendBookingNotification, downloadCalendarEvent, shareOnWhatsApp, type BookingData } from "../utils/notificationServices";
import { Progress } from "./ui/progress";
import { ArrowLeft, ArrowRight, Calendar, User, Scissors, CheckCircle2 } from "lucide-react";

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!date || !time) {
      toast.error("Selecione data e horário");
      return;
    }

    const bookingData: BookingData = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      service: values.service,
      date: format(date, "dd/MM/yyyy"),
      time: time,
    };

    try {
      await sendBookingNotification(bookingData);
      downloadCalendarEvent(bookingData);
      shareOnWhatsApp(bookingData);

      toast.success("Agendamento realizado com sucesso!", {
        description: "Você receberá um email com os detalhes do agendamento."
      });
      form.reset();
      setDate(undefined);
      setTime(undefined);
      setStep(1);
      setOpen(false);
    } catch (error) {
      console.error('Error processing booking:', error);
      toast.error("Erro ao realizar agendamento. Tente novamente.", {
        description: "Por favor, verifique sua conexão e tente novamente."
      });
    }
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

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Form {...form}>
            <div className="space-y-6 animate-fade-in">
              <ServiceSelect form={form} />
              <Button 
                className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-medium transition-all duration-300 group"
                disabled={!form.getValues("service")}
                onClick={() => setStep(2)}
              >
                Escolher Data e Horário
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Form>
        );
      case 2:
        return (
          <Form {...form}>
            <div className="space-y-6 animate-fade-in">
              <DateTimeSelect
                date={date}
                time={time}
                setDate={setDate}
                setTime={setTime}
              />
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1 border-gold/20 hover:border-gold/40 hover:bg-gold/5 group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Voltar
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-black font-medium transition-all duration-300 group"
                  disabled={!date || !time}
                  onClick={() => setStep(3)}
                >
                  Seus Dados
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Form>
        );
      case 3:
        return (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
              <UserDataForm form={form} />
              
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(2)}
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
      default:
        return null;
    }
  };

  const getStepIcon = () => {
    switch (step) {
      case 1:
        return <Scissors className="w-6 h-6 text-gold" />;
      case 2:
        return <Calendar className="w-6 h-6 text-gold" />;
      case 3:
        return <User className="w-6 h-6 text-gold" />;
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Escolha o Serviço";
      case 2:
        return "Data e Horário";
      case 3:
        return "Seus Dados";
      default:
        return "";
    }
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
        <DialogHeader className="space-y-4">
          <div className="flex items-center gap-3">
            {getStepIcon()}
            <DialogTitle className="text-2xl font-serif text-gold">
              {getStepTitle()}
            </DialogTitle>
          </div>
          <div className="space-y-2">
            <Progress value={(step / 3) * 100} className="h-1 bg-gold/10">
              <div className="h-full bg-gradient-to-r from-gold to-gold-light" />
            </Progress>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className={step >= 1 ? "text-gold" : ""}>Serviço</span>
              <span className={step >= 2 ? "text-gold" : ""}>Agenda</span>
              <span className={step >= 3 ? "text-gold" : ""}>Dados</span>
            </div>
          </div>
        </DialogHeader>

        {getStepContent()}
      </DialogContent>
    </Dialog>
  );
};