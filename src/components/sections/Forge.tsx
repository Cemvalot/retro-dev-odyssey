import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/rpg/ProjectCard";
import { ArrowLeft } from "lucide-react";

interface ForgeProps {
  onBack: () => void;
}

const projects = [
  {
    title: "Groupie Tracker",
    description: "A dynamic web application that visualizes artist data, tour dates, and locations through interactive interfaces.",
    technologies: ["Go", "HTML5", "CSS"],
    githubUrl: "https://github.com/cemvalotis",
    rarity: "epic" as const
  },
  {
    title: "ASCII Art Web",
    description: "A web-based tool that transforms text into stylized ASCII art in real time, offering multiple visual output modes.",
    technologies: ["Go", "HTML5", "CSS"],
    githubUrl: "https://github.com/cemvalotis", 
    rarity: "rare" as const
  },
  {
    title: "ATM Management System",
    description: "A command-line banking system allowing user registration, account management, and transactions with data persistence.",
    technologies: ["Go", "SQLite"],
    githubUrl: "https://github.com/cemvalotis",
    rarity: "common" as const
  }
];

export const Forge = ({ onBack }: ForgeProps) => {
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
      
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-pixel text-2xl text-primary animate-glow">
            ⚒️ THE FORGE
          </h1>
          <p className="font-cyber text-muted-foreground">
            Legendary artifacts forged through code and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};