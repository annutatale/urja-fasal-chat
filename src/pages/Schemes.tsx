import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, MapPin, Calendar, IndianRupee } from "lucide-react";

interface Scheme {
  id: string;
  name: string;
  nameHindi: string;
  description: string;
  amount: string;
  eligibility: string[];
  state: string;
  category: "subsidy" | "loan" | "insurance" | "training";
  deadline: string;
  status: "active" | "upcoming" | "closed";
}

const Schemes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const schemes: Scheme[] = [
    {
      id: "1",
      name: "PM-KISAN",
      nameHindi: "प्रधानमंत्री किसान सम्मान निधि",
      description: "सभी भूमिधारक किसानों को ₹6000 प्रतिवर्ष की आर्थिक सहायता",
      amount: "₹6,000/वर्ष",
      eligibility: ["भूमिधारक किसान", "2 हेक्टेयर तक जमीन", "आधार कार्ड आवश्यक"],
      state: "पूरे भारत में",
      category: "subsidy",
      deadline: "कोई समय सीमा नहीं",
      status: "active"
    },
    {
      id: "2",
      name: "Kisan Credit Card",
      nameHindi: "किसान क्रेडिट कार्ड",
      description: "कम ब्याज दर पर कृषि ऋण और बीमा कवरेज",
      amount: "₹3 लाख तक",
      eligibility: ["किसान", "बैंक खाता", "भूमि के कागज़ात"],
      state: "पूरे भारत में",
      category: "loan",
      deadline: "साल भर खुला",
      status: "active"
    },
    {
      id: "3",
      name: "PMFBY",
      nameHindi: "प्रधानमंत्री फसल बीमा योजना",
      description: "प्राकृतिक आपदाओं से फसल हानि का बीमा",
      amount: "फसल की लागत तक",
      eligibility: ["सभी किसान", "बुवाई से 10 दिन पहले आवेदन"],
      state: "पूरे भारत में",
      category: "insurance",
      deadline: "बुवाई सीजन के दौरान",
      status: "active"
    },
    {
      id: "4",
      name: "Organic Farming Scheme",
      nameHindi: "जैविक खेती योजना",
      description: "जैविक खेती को बढ़ावा देने के लिए सब्सिडी",
      amount: "₹50,000/हेक्टेयर",
      eligibility: ["जैविक खेती करने वाले", "प्रमाणित जैविक उत्पादन"],
      state: "चुनिंदा राज्यों में",
      category: "subsidy",
      deadline: "31 मार्च 2024",
      status: "active"
    },
    {
      id: "5",
      name: "Kisan FPO Scheme",
      nameHindi: "किसान उत्पादक संगठन योजना",
      description: "किसान समूहों को वित्तीय सहायता",
      amount: "₹15 लाख तक",
      eligibility: ["किसान समूह", "FPO पंजीकरण", "न्यूनतम 300 सदस्य"],
      state: "पूरे भारत में",
      category: "loan",
      deadline: "अप्रैल 2024",
      status: "upcoming"
    }
  ];

  const categories = [
    { value: "all", label: "सभी योजनाएं", icon: "🏛️" },
    { value: "subsidy", label: "सब्सिडी", icon: "💰" },
    { value: "loan", label: "ऋण", icon: "🏦" },
    { value: "insurance", label: "बीमा", icon: "🛡️" },
    { value: "training", label: "प्रशिक्षण", icon: "📚" }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.nameHindi.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "upcoming": return "bg-blue-500";
      case "closed": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "चालू";
      case "upcoming": return "आने वाली";
      case "closed": return "बंद";
      default: return "अज्ञात";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "subsidy": return "bg-emerald text-white";
      case "loan": return "bg-blue-500 text-white";
      case "insurance": return "bg-orange-500 text-white";
      case "training": return "bg-purple-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">🏛️ सरकारी योजनाएं</h1>
          <p className="text-xl text-muted-foreground">किसानों के लिए सरकारी सहायता और योजनाएं</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="योजना खोजें..."
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

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{scheme.nameHindi}</h3>
                    <p className="text-sm text-muted-foreground">{scheme.name}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={`${getStatusColor(scheme.status)} text-white`}>
                      {getStatusText(scheme.status)}
                    </Badge>
                    <Badge className={getCategoryColor(scheme.category)}>
                      {categories.find(c => c.value === scheme.category)?.label}
                    </Badge>
                  </div>
                </div>

                <p className="text-foreground">{scheme.description}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4 text-emerald" />
                    <span className="font-semibold text-emerald">{scheme.amount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{scheme.state}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{scheme.deadline}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">पात्रता:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {scheme.eligibility.map((criteria, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {criteria}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button className="flex-1 bg-gradient-hero hover:opacity-90">
                    आवेदन करें
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="flex-1">
                    विवरण देखें
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">कोई योजना नहीं मिली</p>
            <p className="text-muted-foreground mt-2">कृपया अपनी खोज बदलें या फिल्टर हटाएं</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Schemes;