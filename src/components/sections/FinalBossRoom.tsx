import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface FinalBossRoomProps {
  onBack: () => void;
}

export const FinalBossRoom = ({ onBack }: FinalBossRoomProps) => {
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
            🧙 FINAL BOSS ROOM
          </h1>
          <p className="font-cyber text-muted-foreground">
            Cast your message spell to reach the developer
          </p>
        </div>

        <div className="rpg-card p-8 text-center">
          <h2 className="font-pixel text-lg text-primary mb-4">Contact Spell</h2>
          <p className="font-cyber text-muted-foreground mb-6">
            The ultimate challenge - a magical contact form with spell-casting animations!
            Currently under construction by the archmages.
          </p>
          
          <Button variant="legendary" size="lg" className="animate-magic-sparkle">
            Prepare Your Message ✨
          </Button>
        </div>
      </div>
    </div>
  );
};