import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/profile-image.jpg";

export const ProfileCard = () => {
  return (
    <div className="simple-card rounded-2xl p-8 text-center">
      <div className="relative mx-auto mb-6">
        <Avatar className="h-20 w-20 mx-auto">
          <AvatarImage 
            src={profileImage} 
            alt="Profile" 
            className="object-cover"
          />
          <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
            PJ
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      <h1 className="text-xl font-bold mb-2 simple-text">
        Your favorite PJs Dealer
      </h1>
      
      <p className="text-muted-foreground text-sm mb-6">
        Premium sleepwear & comfort essentials
      </p>
      
      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          <span>Online now</span>
        </div>
        <span>•</span>
        <span>Fast shipping worldwide</span>
      </div>
    </div>
  );
};