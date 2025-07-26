import { useState, useEffect } from "react";
import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Import sections
import { VillageOfBeginnings } from "./sections/VillageOfBeginnings";
import { GuildHall } from "./sections/GuildHall";
import { Forge } from "./sections/Forge";
import { MysticPortal } from "./sections/MysticPortal";
import { CodeArena } from "./sections/CodeArena";
import { FinalBossRoom } from "./sections/FinalBossRoom";

type LocationType = 'village' | 'guild' | 'forge' | 'portal' | 'arena' | 'boss' | null;

interface Location {
  id: LocationType;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  position: { x: number; y: number };
  color: string;
}

const locations: Location[] = [
  {
    id: 'village',
    name: 'Village of Beginnings',
    icon: '🏘️',
    description: 'Learn about the hero\'s origin story',
    unlocked: true,
    position: { x: 20, y: 70 },
    color: 'from-green-400 to-emerald-600'
  },
  {
    id: 'guild',
    name: 'Guild Hall',
    icon: '🧠',
    description: 'Master your skills and abilities',
    unlocked: true,
    position: { x: 40, y: 30 },
    color: 'from-blue-400 to-cyan-600'
  },
  {
    id: 'forge',
    name: 'The Forge',
    icon: '⚒️',
    description: 'Discover legendary artifacts',
    unlocked: true,
    position: { x: 70, y: 20 },
    color: 'from-orange-400 to-red-600'
  },
  {
    id: 'portal',
    name: 'Mystic Portal',
    icon: '✨',
    description: 'Gateways to other realms',
    unlocked: true,
    position: { x: 15, y: 40 },
    color: 'from-purple-400 to-pink-600'
  },
  {
    id: 'arena',
    name: 'Code Arena',
    icon: '🧩',
    description: 'Battle coding challenges',
    unlocked: true,
    position: { x: 60, y: 65 },
    color: 'from-indigo-400 to-purple-600'
  },
  {
    id: 'boss',
    name: 'Final Boss Room',
    icon: '🧙',
    description: 'Face the ultimate challenge',
    unlocked: true,
    position: { x: 80, y: 45 },
    color: 'from-yellow-400 to-amber-600'
  }
];

export const RPGPortfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentLocation, setCurrentLocation] = useState<LocationType>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const handleLocationClick = (locationId: LocationType) => {
    setCurrentLocation(locationId);
  };

  const handleBackToMap = () => {
    setCurrentLocation(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="font-pixel text-2xl text-primary animate-glow">
            LOADING ADVENTURE...
          </div>
          <div className="flex justify-center space-x-2">
            <div className="w-4 h-4 bg-primary rounded animate-bounce"></div>
            <div className="w-4 h-4 bg-primary rounded animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-4 h-4 bg-primary rounded animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  const renderCurrentSection = () => {
    switch (currentLocation) {
      case 'village':
        return <VillageOfBeginnings onBack={handleBackToMap} />;
      case 'guild':
        return <GuildHall onBack={handleBackToMap} />;
      case 'forge':
        return <Forge onBack={handleBackToMap} />;
      case 'portal':
        return <MysticPortal onBack={handleBackToMap} />;
      case 'arena':
        return <CodeArena onBack={handleBackToMap} />;
      case 'boss':
        return <FinalBossRoom onBack={handleBackToMap} />;
      default:
        return null;
    }
  };

  if (currentLocation) {
    return renderCurrentSection();
  }

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-magic-cyan rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-magic-pink rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Header Controls */}
      <header className="relative z-50 p-6 flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="font-pixel text-xl md:text-2xl text-primary animate-glow">
            CHRISTOS EMVALOTIS
          </h1>
          <p className="font-cyber text-sm text-muted-foreground">
            Software Developer • RPG Portfolio Adventure
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="hover:shadow-glow"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:shadow-glow"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* World Map */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-pixel text-lg md:text-xl text-foreground">
              🗺️ CHOOSE YOUR DESTINATION
            </h2>
            <p className="font-cyber text-sm text-muted-foreground max-w-2xl mx-auto">
              Welcome, brave adventurer! Navigate through different realms to discover the skills, 
              projects, and stories of this developer's journey. Each location holds unique treasures and challenges.
            </p>
          </div>

          {/* Interactive Map */}
          <div className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-br from-forest-green/20 to-primary/10 rounded-2xl border-4 border-primary overflow-hidden">
            
            {/* Decorative map elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-16 w-8 h-8 bg-forest-green rounded-full"></div>
              <div className="absolute top-32 right-24 w-6 h-6 bg-rpg-stone rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-10 h-10 bg-mana-blue rounded-full"></div>
              <div className="absolute bottom-32 right-32 w-4 h-4 bg-experience-green rounded-full"></div>
            </div>

            {/* Location Markers */}
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationClick(location.id)}
                disabled={!location.unlocked}
                className={cn(
                  "absolute group transition-all duration-300 transform",
                  "hover:scale-110 hover:z-30",
                  !location.unlocked && "opacity-50 cursor-not-allowed"
                )}
                style={{
                  left: `${location.position.x}%`,
                  top: `${location.position.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {/* Location Marker */}
                <div className={cn(
                  "relative p-4 bg-gradient-to-br rounded-full border-4 border-white shadow-xl",
                  "group-hover:shadow-glow group-hover:animate-glow",
                  location.unlocked ? "cursor-pointer" : "cursor-not-allowed",
                  location.color
                )}>
                  <span className="text-2xl block" role="img" aria-label={location.name}>
                    {location.icon}
                  </span>
                  
                  {/* Pulsing ring animation */}
                  {location.unlocked && (
                    <div className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Location Info Tooltip */}
                <div className={cn(
                  "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2",
                  "opacity-0 group-hover:opacity-100 transition-all duration-300",
                  "pointer-events-none"
                )}>
                  <div className="rpg-card p-3 w-48 text-center space-y-1">
                    <h3 className="font-pixel text-xs text-primary">
                      {location.name}
                    </h3>
                    <p className="font-cyber text-[10px] text-muted-foreground">
                      {location.description}
                    </p>
                    {location.unlocked && (
                      <div className="font-pixel text-[8px] text-magic-cyan">
                        CLICK TO ENTER
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}

            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 rpg-card p-3 space-y-2">
              <h4 className="font-pixel text-xs text-primary">LEGEND</h4>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full"></div>
                  <span className="font-cyber text-[10px] text-foreground">Accessible</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full opacity-50"></div>
                  <span className="font-cyber text-[10px] text-muted-foreground">Locked</span>
                </div>
              </div>
            </div>

            {/* Compass */}
            <div className="absolute top-4 right-4 rpg-card p-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-pixel text-xs text-primary-foreground">
                N
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <p className="font-cyber text-sm text-muted-foreground">
              💡 Hover over locations for details, click to begin your quest!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};