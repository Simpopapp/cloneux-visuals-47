import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="bg-hero bg-cover bg-center min-h-[600px] flex items-center justify-center text-center">
      <div className="max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4">Classic Cuts & Modern Style</h1>
        <p className="text-xl mb-8 text-gray-300">Premium grooming for the modern gentleman</p>
        <Button className="btn-gold">Book Now</Button>
      </div>
    </div>
  );
};