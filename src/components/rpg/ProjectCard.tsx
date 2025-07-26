import { useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  rarity?: "common" | "rare" | "epic" | "legendary";
  className?: string;
}

const rarityStyles = {
  common: "border-gray-400 shadow-gray-400/20",
  rare: "border-blue-400 shadow-blue-400/30",
  epic: "border-purple-400 shadow-purple-400/30 animate-glow",
  legendary: "border-yellow-400 shadow-yellow-400/50 animate-glow"
};

const rarityGradients = {
  common: "from-gray-50 to-gray-100",
  rare: "from-blue-50 to-blue-100", 
  epic: "from-purple-50 to-purple-100",
  legendary: "from-yellow-50 to-yellow-100"
};

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  rarity = "common",
  className
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className={cn(
        "rpg-card group relative overflow-hidden transition-all duration-500",
        "hover:scale-105 hover:-translate-y-2",
        rarityStyles[rarity],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Rarity glow effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300",
        rarityGradients[rarity]
      )} />
      
      {/* Project Image/Preview */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {imageUrl && !imageError ? (
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="font-pixel text-2xl text-primary mb-2">⚒️</div>
              <div className="font-pixel text-xs text-muted-foreground">Artifact Preview</div>
            </div>
          </div>
        )}
        
        {/* Hover overlay */}
        <div className={cn(
          "absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )}>
          <div className="flex gap-2">
            {githubUrl && (
              <Button
                variant="magic"
                size="sm"
                onClick={() => window.open(githubUrl, '_blank')}
                className="animate-float"
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="hero"
                size="sm"
                onClick={() => window.open(liveUrl, '_blank')}
                className="animate-float"
                style={{ animationDelay: '0.1s' }}
              >
                <Play className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-pixel text-sm text-foreground leading-relaxed">
            {title}
          </h3>
          <div className="font-pixel text-xs text-primary">
            {rarity.toUpperCase()}
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground leading-relaxed font-cyber">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[10px] font-pixel text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(githubUrl, '_blank')}
              className="flex-1 font-pixel text-xs"
            >
              <Github className="w-3 h-3 mr-1" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button
              variant="hero"
              size="sm" 
              onClick={() => window.open(liveUrl, '_blank')}
              className="flex-1"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Live
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};