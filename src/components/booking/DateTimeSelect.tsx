import { Calendar } from "../ui/calendar";
import { Button } from "../ui/button";
import { CalendarDays, Clock } from "lucide-react";
import { addDays } from "date-fns";

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
  return (
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
    </div>
  );
};