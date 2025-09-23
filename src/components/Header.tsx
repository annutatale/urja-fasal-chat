import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">CropAdvisor</h1>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#weather" className="text-muted-foreground hover:text-primary transition-colors">
            Weather
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
            Crop Pricing
          </a>
          <a href="#chatbot" className="text-muted-foreground hover:text-primary transition-colors">
            AI Assistant
          </a>
          <a href="#schemes" className="text-muted-foreground hover:text-primary transition-colors">
            Gov Schemes
          </a>
          <a href="#news" className="text-muted-foreground hover:text-primary transition-colors">
            News
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;