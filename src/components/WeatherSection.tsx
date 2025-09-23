import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, CloudRain, Sun, Wind, Thermometer, Droplets, Eye, Bell } from "lucide-react";

const WeatherSection = () => {
  const currentWeather = {
    location: "Pune District, Maharashtra",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    uvIndex: 6
  };

  const forecast = [
    { day: "Today", high: 32, low: 22, condition: "Sunny", icon: Sun, rain: 10 },
    { day: "Tomorrow", high: 30, low: 20, condition: "Cloudy", icon: Cloud, rain: 30 },
    { day: "Wed", high: 25, low: 18, condition: "Rainy", icon: CloudRain, rain: 80 },
    { day: "Thu", high: 27, low: 19, condition: "Cloudy", icon: Cloud, rain: 20 },
    { day: "Fri", high: 29, low: 21, condition: "Sunny", icon: Sun, rain: 5 },
  ];

  const alerts = [
    {
      type: "warning",
      title: "Heavy Rainfall Alert",
      message: "Expected 50-75mm rainfall in next 48 hours. Take necessary precautions for crops.",
      time: "2 hours ago"
    },
    {
      type: "info",
      title: "Temperature Rise",
      message: "Temperature expected to rise by 3-4°C over the weekend. Ensure adequate irrigation.",
      time: "6 hours ago"
    }
  ];

  return (
    <section id="weather" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Weather Monitoring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with real-time weather updates and forecasts tailored for your farming needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Current Weather</span>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </CardTitle>
              <p className="text-sm text-muted-foreground">{currentWeather.location}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground">{currentWeather.temperature}°C</div>
                <p className="text-muted-foreground">{currentWeather.condition}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Droplets className="h-4 w-4 text-sky" />
                  <span className="text-sm">Humidity: {currentWeather.humidity}%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Wind className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Wind: {currentWeather.windSpeed} km/h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Visibility: {currentWeather.visibility} km</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-4 w-4 text-warning" />
                  <span className="text-sm">UV Index: {currentWeather.uvIndex}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5-Day Forecast */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle>5-Day Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {forecast.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <day.icon className="h-5 w-5 text-sky" />
                      <span className="font-medium">{day.day}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span>{day.high}°/{day.low}°</span>
                      <span className="text-sky">{day.rain}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weather Alerts */}
          <Card className="shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Weather Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    alert.type === 'warning' 
                      ? 'bg-warning/10 border-warning' 
                      : 'bg-sky/10 border-sky'
                  }`}>
                    <h4 className="font-medium text-foreground">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-4 bg-gradient-hero hover:opacity-90">
                View All Alerts
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;