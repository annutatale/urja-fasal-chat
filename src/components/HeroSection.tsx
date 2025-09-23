import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cloud, TrendingUp, MessageCircle, Camera, FileText, Gift } from "lucide-react";
import heroImage from "@/assets/hero-farming.jpg";

const HeroSection = () => {
  const features = [
    { icon: Cloud, title: "Weather Alerts", description: "Real-time weather updates for your region" },
    { icon: TrendingUp, title: "Crop Pricing", description: "District-wise current market prices" },
    { icon: MessageCircle, title: "AI Assistant", description: "Multilingual chatbot support" },
    { icon: Camera, title: "Disease Analysis", description: "AI-powered crop disease detection" },
    { icon: FileText, title: "Latest News", description: "Agricultural news and updates" },
    { icon: Gift, title: "Gov Schemes", description: "Information on government programs" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart Farming
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Advisory</span>
                <br />
                for Better Harvest
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Empowering small and marginal farmers with AI-driven insights, real-time weather alerts, 
                market pricing, and comprehensive crop management solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-soft">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald rounded-full"></div>
                <span>50,000+ Farmers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-earth rounded-full"></div>
                <span>15+ Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sky rounded-full"></div>
                <span>24/7 Support</span>
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
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/30">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-hero p-3 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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