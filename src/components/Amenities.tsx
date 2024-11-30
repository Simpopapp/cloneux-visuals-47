import { Wifi, Coffee, CreditCard } from "lucide-react";

export const Amenities = () => {
  return (
    <section className="bg-card py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Amenities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
              <Wifi className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Free WiFi</h3>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
              <Coffee className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Complimentary Drinks</h3>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Card Payments</h3>
          </div>
        </div>
      </div>
    </section>
  );
};