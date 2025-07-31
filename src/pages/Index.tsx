import { ProfileCard } from "@/components/ProfileCard";
import { ActionButtons } from "@/components/ActionButtons";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Profile Section */}
        <ProfileCard />
        
        {/* Main Action Buttons */}
        <ActionButtons />
        
        {/* Social Media Links */}
        <SocialLinks />
        
        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground py-4">
          <p>© 2024 Wizz.lb</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
