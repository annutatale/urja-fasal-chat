import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Clock, ExternalLink, TrendingUp } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  titleHindi: string;
  summary: string;
  category: "weather" | "market" | "technology" | "government" | "general";
  source: string;
  publishedAt: string;
  image: string;
  trending: boolean;
}

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const newsItems: NewsItem[] = [
    {
      id: "1",
      title: "Wheat Prices Rise Due to Export Restrictions",
      titleHindi: "निर्यात प्रतिबंध के कारण गेहूं की कीमतें बढ़ीं",
      summary: "सरकार के निर्यात प्रतिबंध के बाद घरेलू बाजार में गेहूं की कीमतों में 8% की वृद्धि दर्ज की गई है।",
      category: "market",
      source: "कृषि समाचार",
      publishedAt: "2 घंटे पहले",
      image: "/placeholder.svg",
      trending: true
    },
    {
      id: "2",
      title: "New AI Technology for Crop Disease Detection",
      titleHindi: "फसल रोग निदान के लिए नई AI तकनीक",
      summary: "वैज्ञानिकों ने एक नई AI तकनीक विकसित की है जो फसल की बीमारी को 95% सटीकता से पहचान सकती है।",
      category: "technology",
      source: "तकनीकी कृषि",
      publishedAt: "4 घंटे पहले",
      image: "/placeholder.svg",
      trending: true
    },
    {
      id: "3",
      title: "Weather Alert: Heavy Rain Expected in North India",
      titleHindi: "मौसम चेतावनी: उत्तर भारत में भारी बारिश की संभावना",
      summary: "मौसम विभाग ने अगले 48 घंटों में उत्तर भारत के कई राज्यों में भारी बारिश की चेतावनी जारी की है।",
      category: "weather",
      source: "मौसम विभाग",
      publishedAt: "6 घंटे पहले",
      image: "/placeholder.svg",
      trending: false
    },
    {
      id: "4",
      title: "Government Announces New Subsidy for Organic Farming",
      titleHindi: "सरकार ने जैविक खेती के लिए नई सब्सिडी की घोषणा की",
      summary: "केंद्र सरकार ने जैविक खेती को बढ़ावा देने के लिए 50% सब्सिडी की नई योजना की घोषणा की है।",
      category: "government",
      source: "सरकारी प्रेस",
      publishedAt: "1 दिन पहले",
      image: "/placeholder.svg",
      trending: false
    },
    {
      id: "5",
      title: "Cotton Farmers Report 20% Increase in Yield",
      titleHindi: "कपास किसानों ने उत्पादन में 20% वृद्धि की रिपोर्ट की",
      summary: "इस सीजन में बेहतर तकनीक और मौसम के कारण कपास की उत्पादकता में महत्वपूर्ण वृद्धि हुई है।",
      category: "general",
      source: "कृषि रिपोर्ट",
      publishedAt: "2 दिन पहले",
      image: "/placeholder.svg",
      trending: false
    },
    {
      id: "6",
      title: "Drone Technology Revolutionizing Agriculture",
      titleHindi: "ड्रोन तकनीक से कृषि में क्रांति",
      summary: "किसान अब फसल की निगरानी और छिड़काव के लिए ड्रोन का उपयोग करके उत्पादकता बढ़ा रहे हैं।",
      category: "technology",
      source: "कृषि तकनीक",
      publishedAt: "3 दिन पहले",
      image: "/placeholder.svg",
      trending: false
    }
  ];

  const categories = [
    { value: "all", label: "सभी समाचार", icon: "📰" },
    { value: "weather", label: "मौसम", icon: "🌦️" },
    { value: "market", label: "बाजार", icon: "💰" },
    { value: "technology", label: "तकनीक", icon: "🔬" },
    { value: "government", label: "सरकारी", icon: "🏛️" },
    { value: "general", label: "सामान्य", icon: "📋" }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.titleHindi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "weather": return "bg-blue-500 text-white";
      case "market": return "bg-emerald text-white";
      case "technology": return "bg-purple-500 text-white";
      case "government": return "bg-orange-500 text-white";
      case "general": return "bg-gray-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">📰 कृषि समाचार</h1>
          <p className="text-xl text-muted-foreground">खेती से जुड़ी ताजा खबरें और अपडेट</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="समाचार खोजें..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="h-12 px-6 text-lg"
              >
                {category.icon} {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured/Trending News */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            ट्रेंडिंग समाचार
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredNews.filter(item => item.trending).map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-red-500 text-white">
                      🔥 ट्रेंडिंग
                    </Badge>
                    <Badge className={getCategoryColor(item.category)}>
                      {categories.find(c => c.value === item.category)?.label}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{item.titleHindi}</h3>
                  <p className="text-muted-foreground">{item.summary}</p>

                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {item.publishedAt}
                    </div>
                    <span>{item.source}</span>
                  </div>

                  <Button className="w-full bg-gradient-hero hover:opacity-90">
                    पूरी खबर पढ़ें
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All News */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">सभी समाचार</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.filter(item => !item.trending).map((item) => (
              <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge className={getCategoryColor(item.category)}>
                      {categories.find(c => c.value === item.category)?.label}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-foreground">{item.titleHindi}</h3>
                  <p className="text-sm text-muted-foreground">{item.summary}</p>

                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.publishedAt}
                    </div>
                    <span>{item.source}</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    पूरी खबर पढ़ें
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">कोई समाचार नहीं मिला</p>
            <p className="text-muted-foreground mt-2">कृपया अपनी खोज बदलें या फिल्टर हटाएं</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;