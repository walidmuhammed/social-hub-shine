import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/profile-image.jpg";

export const ProfileCard = () => {
  return (
    <div className="glass-card rounded-3xl p-8 text-center float-animation">
      <div className="relative mx-auto mb-6">
        <Avatar className="h-24 w-24 mx-auto ring-4 ring-primary/20 shadow-glow">
          <AvatarImage 
            src={profileImage} 
            alt="Profile" 
            className="object-cover"
          />
          <AvatarFallback className="bg-gradient-primary text-white text-2xl font-bold">
            PJ
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 h-6 w-6 bg-gradient-primary rounded-full pulse-glow flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold mb-2 gradient-text">
        Your favorite PJs Dealer
      </h1>
      
      <p className="text-muted-foreground text-sm mb-6">
        Premium sleepwear & comfort essentials ✨
      </p>
      
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 bg-green-500 rounded-full pulse-glow"></div>
          <span>Online now</span>
        </div>
        <span>•</span>
        <span>Fast shipping worldwide</span>
      </div>
    </div>
  );
};