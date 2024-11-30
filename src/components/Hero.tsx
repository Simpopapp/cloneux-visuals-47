import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center min-h-[600px] flex items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background/80"></div>
      <div className="max-w-3xl px-4 relative z-10">
        <h1 className="font-serif text-5xl md:text-6xl font-bold mb-2 text-gold animate-fade-in">Sr. Oliveira</h1>
        <p className="text-2xl mb-1 text-white font-light tracking-wider">BARBEARIA</p>
        <p className="text-xl mb-8 text-gray-300">Premium grooming for the modern gentleman</p>
        <Button className="bg-gold hover:bg-gold-light text-black font-semibold px-8 py-3 rounded-md shadow-lg hover:shadow-gold/20 transition-all duration-300">
          Book Now
        </Button>
      </div>
    </div>
  );
};