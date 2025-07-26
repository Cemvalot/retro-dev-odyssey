import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Linkedin, FileText, MapPin, Phone, Mail } from "lucide-react";

interface MysticPortalProps {
  onBack: () => void;
}

export const MysticPortal = ({ onBack }: MysticPortalProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero p-6">
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 font-pixel text-xs hover:shadow-glow"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Return to Map
      </Button>
      
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-pixel text-2xl text-primary animate-glow">
            ✨ MYSTIC PORTAL
          </h1>
          <p className="font-cyber text-muted-foreground">
            Gateways to other realms and dimensions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* External Links */}
          <div className="space-y-4">
            <h2 className="font-pixel text-lg text-primary">External Portals</h2>
            
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("https://github.com/cemvalotis", "_blank")}
              className="w-full justify-start animate-glow"
            >
              <Github className="w-5 h-5 mr-3" />
              GitHub Repository
            </Button>

            <Button
              variant="magic"
              size="lg"
              onClick={() => window.open("#", "_blank")}
              className="w-full justify-start"
            >
              <Linkedin className="w-5 h-5 mr-3" />
              LinkedIn Profile
            </Button>

            <Button
              variant="legendary"
              size="lg"
              onClick={() => window.open("#", "_blank")}
              className="w-full justify-start"
            >
              <FileText className="w-5 h-5 mr-3" />
              Download Resume
            </Button>
          </div>

          {/* Contact Info */}
          <div className="rpg-card p-6 space-y-4">
            <h2 className="font-pixel text-lg text-primary">Contact Scroll</h2>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-cyber text-sm">+30 6983025286</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="font-cyber text-sm">cemvalotis@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-cyber text-sm">Athens, Greece</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};