import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number;
  maxLevel?: number;
  experience: number;
  maxExperience?: number;
  color?: "default" | "health" | "mana" | "experience";
  className?: string;
}

const colorVariants = {
  default: "from-primary to-primary-glow",
  health: "from-rpg-health to-red-400",
  mana: "from-rpg-mana to-blue-400", 
  experience: "from-rpg-experience to-green-400"
};

export const SkillBar = ({ 
  name, 
  level, 
  maxLevel = 100, 
  experience, 
  maxExperience = 100,
  color = "default",
  className 
}: SkillBarProps) => {
  const [animatedExp, setAnimatedExp] = useState(0);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  
  useEffect(() => {
    // Animate level count up
    const levelInterval = setInterval(() => {
      setAnimatedLevel(prev => {
        if (prev < level) return prev + 1;
        clearInterval(levelInterval);
        return level;
      });
    }, 50);

    // Animate experience bar fill
    const timer = setTimeout(() => {
      setAnimatedExp(experience);
    }, 300);

    return () => {
      clearInterval(levelInterval);
      clearTimeout(timer);
    };
  }, [level, experience]);

  const percentage = (animatedExp / maxExperience) * 100;

  return (
    <div className={cn("rpg-card p-4 space-y-2", className)}>
      <div className="flex justify-between items-center">
        <span className="font-pixel text-xs text-foreground">{name}</span>
        <span className="font-pixel text-xs text-primary">
          Lv. {animatedLevel}
        </span>
      </div>
      
      <div className="skill-bar h-6 relative">
        <div 
          className={cn(
            "skill-fill h-full transition-all duration-1000 ease-out",
            `bg-gradient-to-r ${colorVariants[color]}`
          )}
          style={{ width: `${percentage}%` }}
        />
        
        {/* Experience text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-pixel text-[10px] text-white drop-shadow-lg">
            {animatedExp} / {maxExperience} XP
          </span>
        </div>
        
        {/* Pixel corners decoration */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-primary"></div>
      </div>
    </div>
  );
};