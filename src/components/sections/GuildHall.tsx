import { Button } from "@/components/ui/button";
import { SkillBar } from "@/components/rpg/SkillBar";
import { ArrowLeft } from "lucide-react";

interface GuildHallProps {
  onBack: () => void;
}

const skills = [
  { name: "Go Programming", level: 65, experience: 65, color: "experience" as const },
  { name: "HTML5 & CSS", level: 80, experience: 80, color: "mana" as const },
  { name: "Git & Version Control", level: 75, experience: 75, color: "default" as const },
  { name: "Docker & Containers", level: 60, experience: 60, color: "health" as const },
  { name: "C Programming", level: 55, experience: 55, color: "experience" as const },
  { name: "SQLite Database", level: 70, experience: 70, color: "mana" as const }
];

export const GuildHall = ({ onBack }: GuildHallProps) => {
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
            🧠 GUILD HALL
          </h1>
          <p className="font-cyber text-muted-foreground">
            Master your coding abilities and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              experience={skill.experience}
              color={skill.color}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};