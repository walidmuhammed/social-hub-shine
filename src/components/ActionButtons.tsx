import { Button } from "@/components/ui/button";
import { ShoppingBag, MessageSquare, Sparkles } from "lucide-react";
export const ActionButtons = () => {
  const handleShopClick = () => {
    window.open("https://wizzlb.com/", "_blank");
  };
  const handleContactClick = () => {
    window.open("https://wizzlb.com/pages/contact", "_blank");
  };
  return <div className="space-y-4">
      <Button onClick={handleShopClick} variant="default" size="lg" className="w-full bg-[#0e1b4d]">
        <ShoppingBag className="mr-3" />
        Shop Now
      </Button>
      
      <Button onClick={handleContactClick} variant="outline" size="lg" className="w-full">
        <MessageSquare className="mr-3" />
        Contact Us
      </Button>
    </div>;
};