import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { CalendarDays, Clock, CheckCircle2, ChevronDown } from "lucide-react";
import { addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

interface DateTimeSelectProps {
  date: Date | undefined;
  time: string | undefined;
  setDate: (date: Date | undefined) => void;
  setTime: (time: string | undefined) => void;
}

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
];

export const DateTimeSelect = ({ date, time, setDate, setTime }: DateTimeSelectProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(!date);

  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    if (newDate) {
      setIsCalendarOpen(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-lg p-4 border border-gold/10 hover:border-gold/20 transition-colors">
        <Collapsible open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2 text-gold">
              <CalendarDays className="w-5 h-5" />
              <span className="font-medium">Data do Agendamento</span>
            </div>
            {date && (
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hover:bg-gold/5 hover:text-gold"
                >
                  <span className="mr-2 text-gold">{format(date, "dd/MM/yyyy")}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
            )}
          </div>
          
          <CollapsibleContent className="space-y-2">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              disabled={(date) => date < new Date() || date > addDays(new Date(), 30)}
              className="rounded-md border border-gold/10"
              modifiers={{
                selected: date,
              }}
              modifiersStyles={{
                selected: {
                  backgroundColor: "#FFA500",
                  color: "black",
                  fontWeight: "bold",
                }
              }}
            />
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      {date && (
        <div className="bg-card rounded-lg p-4 border border-gold/10 hover:border-gold/20 transition-colors animate-fade-in">
          <div className="flex items-center gap-2 mb-4 text-gold">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Horário Disponível</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((slot) => (
              <Button
                key={slot}
                variant="outline"
                onClick={() => setTime(slot)}
                className={cn(
                  "relative border-gold/20 hover:border-gold/40 group",
                  time === slot && "border-gold bg-gold/10"
                )}
              >
                {time === slot && (
                  <CheckCircle2 className="absolute -top-2 -right-2 w-4 h-4 text-gold bg-background rounded-full" />
                )}
                <span className={cn(
                  "group-hover:text-gold transition-colors",
                  time === slot && "text-gold"
                )}>
                  {slot}
                </span>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};