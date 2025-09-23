import { Button } from "@/components/ui/button";
import { Leaf, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold text-foreground">🌾 किसान मित्र</h1>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/weather" className="text-foreground hover:text-primary transition-colors font-semibold text-lg flex items-center gap-2">
            🌦️ मौसम
          </Link>
          <Link to="/pricing" className="text-foreground hover:text-primary transition-colors font-semibold text-lg flex items-center gap-2">
            💰 कीमत
          </Link>
          <Link to="/chatbot" className="text-foreground hover:text-primary transition-colors font-semibold text-lg flex items-center gap-2">
            🤖 सहायक
          </Link>
          <Link to="/schemes" className="text-foreground hover:text-primary transition-colors font-semibold text-lg flex items-center gap-2">
            🏛️ योजना
          </Link>
          <Link to="/news" className="text-foreground hover:text-primary transition-colors font-semibold text-lg flex items-center gap-2">
            📰 खबरें
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-gradient-hero hover:opacity-90 transition-opacity h-12 px-6 text-lg font-bold">
            📱 ऐप डाउनलोड
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden h-12 w-12">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;