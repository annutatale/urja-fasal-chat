import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WeatherSection from "@/components/WeatherSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <WeatherSection />
      <PricingSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
