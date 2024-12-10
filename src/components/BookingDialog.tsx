import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { toast } from "sonner";
import { Progress } from "./ui/progress";
import { Scissors, Calendar, User } from "lucide-react";
import { BookingStepOne } from "./booking/BookingStepOne";
import { BookingStepTwo } from "./booking/BookingStepTwo";
import { BookingStepThree } from "./booking/BookingStepThree";
import { sendBookingNotification, downloadCalendarEvent, shareOnWhatsApp, type BookingData } from "../utils/notificationServices";

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
      resetDialog();
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

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <BookingStepOne
            form={form}
            onNext={() => setStep(2)}
          />
        );
      case 2:
        return (
          <BookingStepTwo
            form={form}
            date={date}
            time={time}
            setDate={setDate}
            setTime={setTime}
            onPrevious={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        );
      case 3:
        return (
          <BookingStepThree
            form={form}
            onPrevious={() => setStep(2)}
            onSubmit={onSubmit}
          />
        );
      default:
        return null;
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

        <div className="max-h-[70vh] overflow-y-auto">
          {getStepContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
};