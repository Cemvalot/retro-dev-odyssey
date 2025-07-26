import { Button } from "@/components/ui/button";
import { DialogueBox } from "@/components/rpg/DialogueBox";
import { ArrowLeft } from "lucide-react";

interface VillageOfBeginningsProps {
  onBack: () => void;
}

export const VillageOfBeginnings = ({ onBack }: VillageOfBeginningsProps) => {
  const dialogueMessages = [
    "Greetings, traveler! I am Christos, a passionate software developer from Athens, Greece.",
    "My journey began with curiosity about how computers work, leading me to master Go, HTML5, CSS, Git, Docker, C, and SQLite.",
    "I specialize in backend development and system programming, always eager to learn new technologies and solve complex problems.",
    "Welcome to my realm - explore the other locations to discover my skills and projects!"
  ];

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
            🏘️ VILLAGE OF BEGINNINGS
          </h1>
          <p className="font-cyber text-muted-foreground">
            The origin story of a coding hero
          </p>
        </div>

        <DialogueBox
          character="Village Elder (Christos)"
          messages={dialogueMessages}
          autoAdvance={false}
        />
      </div>
    </div>
  );
};