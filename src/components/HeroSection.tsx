import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cloud, TrendingUp, MessageCircle, Camera, FileText, Gift } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const HeroSection = () => {
  const features = [
    { icon: "🌦️", title: "मौसम की जानकारी", description: "आज और कल का मौसम" },
    { icon: "💰", title: "फसल की कीमत", description: "आज की मंडी भाव" },
    { icon: "🤖", title: "सहायक", description: "सवाल पूछें, जवाब पाएं" },
    { icon: "📸", title: "बीमारी पहचान", description: "फोटो खींचकर देखें" },
    { icon: "📰", title: "खबरें", description: "खेती की नई जानकारी" },
    { icon: "🏛️", title: "सरकारी योजना", description: "मदद और सब्सिडी" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight">
                🌾 किसान मित्र
                <br />
                <span className="text-2xl lg:text-3xl text-muted-foreground">बेहतर फसल के लिए</span>
              </h1>
              <p className="text-xl text-foreground max-w-xl font-medium">
                मौसम • फसल की कीमत • बीमारी पहचान • सरकारी योजना
              </p>
            </div>
            
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-soft h-16 text-xl font-bold">
                🚀 शुरू करें
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 h-16 text-xl font-bold">
                📱 ऐप देखें
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 text-lg text-foreground font-medium">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-emerald rounded-full"></div>
                <span>👨‍🌾 50,000+ किसान</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-earth rounded-full"></div>
                <span>🗣️ हिंदी में बात</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-sky rounded-full"></div>
                <span>📞 24 घंटे मदद</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Smart farming with technology integration"
                className="w-full h-auto rounded-2xl shadow-soft"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div>
          </div>
        </div>
        
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer hover:scale-105">
              <div className="text-center space-y-4">
                <div className="text-5xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground mt-2">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;