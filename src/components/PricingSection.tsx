import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, MapPin, Calendar } from "lucide-react";

const PricingSection = () => {
  const cropPrices = [
    {
      crop: "Rice",
      currentPrice: 2850,
      previousPrice: 2780,
      unit: "per quintal",
      trend: "up",
      change: 2.5,
      district: "Pune",
      lastUpdated: "2 hours ago"
    },
    {
      crop: "Wheat",
      currentPrice: 2200,
      previousPrice: 2250,
      unit: "per quintal",
      trend: "down",
      change: -2.2,
      district: "Pune",
      lastUpdated: "3 hours ago"
    },
    {
      crop: "Sugarcane",
      currentPrice: 3100,
      previousPrice: 3100,
      unit: "per quintal",
      trend: "stable",
      change: 0,
      district: "Pune",
      lastUpdated: "1 hour ago"
    },
    {
      crop: "Cotton",
      currentPrice: 5800,
      previousPrice: 5650,
      unit: "per quintal",
      trend: "up",
      change: 2.7,
      district: "Pune",
      lastUpdated: "4 hours ago"
    },
    {
      crop: "Onion",
      currentPrice: 1500,
      previousPrice: 1620,
      unit: "per quintal",
      trend: "down",
      change: -7.4,
      district: "Pune",
      lastUpdated: "1 hour ago"
    },
    {
      crop: "Tomato",
      currentPrice: 2800,
      previousPrice: 2400,
      unit: "per quintal",
      trend: "up",
      change: 16.7,
      district: "Pune",
      lastUpdated: "30 mins ago"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-emerald" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-emerald";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Live Crop Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time market prices across different districts to make informed selling decisions
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Pune District</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>Today's Prices</span>
          </Button>
          <Button className="bg-gradient-hero hover:opacity-90">
            Change District
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cropPrices.map((crop, index) => (
            <Card key={index} className="shadow-card border-border/50 hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{crop.crop}</CardTitle>
                  <Badge variant={crop.trend === "up" ? "default" : crop.trend === "down" ? "destructive" : "secondary"}>
                    {crop.trend}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{crop.district}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">₹{crop.currentPrice}</span>
                    <div className={`flex items-center space-x-1 ${getTrendColor(crop.trend)}`}>
                      {getTrendIcon(crop.trend)}
                      <span className="text-sm font-medium">
                        {crop.change > 0 ? '+' : ''}{crop.change}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    <div>{crop.unit}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span>Previous: ₹{crop.previousPrice}</span>
                      <span>{crop.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-soft">
            View All Crop Prices
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Prices updated every hour from major mandis and markets
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;