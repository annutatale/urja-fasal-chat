import WeatherSection from "@/components/WeatherSection";

const Weather = () => {
  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">🌦️ मौसम की जानकारी</h1>
          <p className="text-xl text-muted-foreground">आज और आने वाले दिनों का मौसम</p>
        </div>
        <WeatherSection />
      </div>
    </div>
  );
};

export default Weather;