import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { Amenities } from "@/components/Amenities";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServicesSection />
      <Amenities />
      <Contact />
    </div>
  );
};

export default Index;