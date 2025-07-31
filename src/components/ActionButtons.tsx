import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageSquare, Sparkles } from "lucide-react";

export const ActionButtons = () => {
  const handleShopClick = () => {
    window.open("https://wizzlb.com/", "_blank");
  };

  const handleContactClick = () => {
    window.open("https://wizzlb.com/pages/contact", "_blank");
  };

  return (
    <div className="space-y-4">
      <Button 
        onClick={handleShopClick}
        variant="gradient" 
        size="xl" 
        className="w-full group"
      >
        <ShoppingBag className="mr-3 group-hover:scale-110 transition-transform" />
        Shop Now
        <Sparkles className="ml-3 group-hover:rotate-12 transition-transform" />
      </Button>
      
      <Button 
        onClick={handleContactClick}
        variant="glass" 
        size="lg" 
        className="w-full group"
      >
        <MessageSquare className="mr-3 group-hover:scale-110 transition-transform" />
        Contact Us
      </Button>
    </div>
  );
};