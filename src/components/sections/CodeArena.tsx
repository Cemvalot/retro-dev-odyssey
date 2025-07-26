import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CodeArenaProps {
  onBack: () => void;
}

export const CodeArena = ({ onBack }: CodeArenaProps) => {
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
            🧩 CODE ARENA
          </h1>
          <p className="font-cyber text-muted-foreground">
            Battle coding challenges and share knowledge
          </p>
        </div>

        <div className="rpg-card p-8 text-center">
          <h2 className="font-pixel text-lg text-primary mb-4">Coming Soon</h2>
          <p className="font-cyber text-muted-foreground">
            This arena will feature blog posts, coding challenges, and interactive tutorials.
            The battles await brave developers!
          </p>
        </div>
      </div>
    </div>
  );
};