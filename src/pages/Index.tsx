import { ProfileCard } from "@/components/ProfileCard";
import { ActionButtons } from "@/components/ActionButtons";
import { SocialLinks } from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Profile Section */}
        <ProfileCard />
        
        {/* Main Action Buttons */}
        <ActionButtons />
        
        {/* Social Media Links */}
        <SocialLinks />
        
        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground py-4">
          <p>© 2024 Wizz.lb • Made with ❤️</p>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default Index;
