import PricingSection from "@/components/PricingSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background pt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">💰 फसल की कीमतें</h1>
          <p className="text-xl text-muted-foreground">आज की मंडी भाव और बाजार दर</p>
        </div>
        <PricingSection />
      </div>
    </div>
  );
};

export default Pricing;