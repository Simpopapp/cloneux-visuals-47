import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { addDays, format } from "date-fns";
import { toast } from "sonner";
import { CalendarDays, Clock, Scissors, User, Phone, Mail } from "lucide-react";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
];

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(11, "Telefone deve ter pelo menos 11 dígitos"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecione um serviço"),
});

interface BookingDialogProps {
  defaultService?: string;
}

export const BookingDialog = ({ defaultService }: BookingDialogProps) => {
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
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) resetDialog();
    }}>
      <DialogTrigger asChild>
        <Button className="w-full bg-gold hover:bg-gold-light text-black font-semibold">
          Agendar Horário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background border-gold/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-gold">
            {step === 1 ? "Escolha a Data e Horário" : "Complete seu Agendamento"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-4 border border-gold/10">
              <div className="flex items-center gap-2 mb-4 text-gold">
                <CalendarDays className="w-5 h-5" />
                <span className="font-medium">Selecione uma Data</span>
              </div>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
                className="rounded-md border border-gold/10"
              />
            </div>
            
            {date && (
              <div className="bg-card rounded-lg p-4 border border-gold/10">
                <div className="flex items-center gap-2 mb-4 text-gold">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Selecione um Horário</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant={time === slot ? "default" : "outline"}
                      className={`${
                        time === slot 
                          ? "bg-gold hover:bg-gold-light text-black" 
                          : "border-gold/20 hover:border-gold/40"
                      } transition-all duration-300`}
                      onClick={() => setTime(slot)}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <Button 
              className="w-full bg-gold hover:bg-gold-light text-black font-medium transition-all duration-300"
              disabled={!date || !time}
              onClick={() => setStep(2)}
            >
              Continuar
            </Button>
          </div>
        )}

        {step === 2 && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gold/20">
                            <SelectValue placeholder="Selecione o serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background/95 backdrop-blur-sm border border-gold/20">
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

              <div className="bg-card rounded-lg p-4 border border-gold/10">
                <div className="flex items-center gap-2 mb-4 text-gold">
                  <User className="w-5 h-5" />
                  <span className="font-medium">Seus Dados</span>
                </div>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome completo" 
                            {...field} 
                            className="border-gold/20"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              placeholder="(11) 99999-9999" 
                              {...field} 
                              className="pl-10 border-gold/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input 
                              placeholder="seu@email.com" 
                              {...field} 
                              className="pl-10 border-gold/20"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1 border-gold/20 hover:border-gold/40"
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
      </DialogContent>
    </Dialog>
  );
};