import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { User, Phone, Mail } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(11, "Telefone deve ter pelo menos 11 dígitos"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecione um serviço"),
});

type FormData = z.infer<typeof formSchema>;

interface UserDataFormProps {
  form: UseFormReturn<FormData>;
}

export const UserDataForm = ({ form }: UserDataFormProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2 text-gold">
              <User className="w-4 h-4" />
              Nome Completo
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="Digite seu nome" 
                {...field} 
                className="border-gold/20 focus:border-gold transition-colors"
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
            <FormLabel className="flex items-center gap-2 text-gold">
              <Phone className="w-4 h-4" />
              Telefone
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="(11) 99999-9999" 
                {...field} 
                className="border-gold/20 focus:border-gold transition-colors"
              />
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
            <FormLabel className="flex items-center gap-2 text-gold">
              <Mail className="w-4 h-4" />
              Email
            </FormLabel>
            <FormControl>
              <Input 
                placeholder="seu@email.com" 
                {...field} 
                className="border-gold/20 focus:border-gold transition-colors"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};