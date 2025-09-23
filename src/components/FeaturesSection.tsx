import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Camera, Smartphone, Brain, Globe, Zap, FileText, Gift } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Chatbot Assistant",
      description: "Get instant answers to your farming questions in your preferred language",
      features: ["15+ Language Support", "24/7 Availability", "Expert Knowledge Base", "Voice Commands"],
      badge: "New",
      gradient: "from-emerald to-emerald-light"
    },
    {
      icon: Camera,
      title: "Crop Disease Analysis",
      description: "Upload photos of your crops to get instant AI-powered disease diagnosis",
      features: ["Instant Diagnosis", "Treatment Recommendations", "Prevention Tips", "Disease History"],
      badge: "AI Powered",
      gradient: "from-sky to-blue-500"
    },
    {
      icon: FileText,
      title: "Agricultural News",
      description: "Stay updated with the latest agricultural news and market trends",
      features: ["Daily Updates", "Market Analysis", "Weather Reports", "Policy Changes"],
      badge: "Live",
      gradient: "from-earth to-earth-light"
    },
    {
      icon: Gift,
      title: "Government Schemes",
      description: "Complete information about government schemes and subsidies for farmers",
      features: ["Eligibility Checker", "Application Guide", "Document List", "Status Tracking"],
      badge: "Essential",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Farming Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage cutting-edge technology to enhance your farming practices and increase productivity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-card border-border/50 hover:shadow-soft transition-all duration-300 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-lg`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-gradient-hero hover:opacity-90">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Highlights */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Brain, title: "AI Powered", description: "Advanced machine learning algorithms" },
            { icon: Globe, title: "Multi-language", description: "Support for 15+ regional languages" },
            { icon: Smartphone, title: "Mobile First", description: "Optimized for mobile devices" },
            { icon: Zap, title: "Real-time", description: "Instant updates and notifications" }
          ].map((tech, index) => (
            <Card key={index} className="text-center p-6 shadow-card border-border/50">
              <tech.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{tech.title}</h3>
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;