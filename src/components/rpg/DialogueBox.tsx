import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DialogueBoxProps {
  character: string;
  avatar?: string;
  messages: string[];
  onComplete?: () => void;
  autoAdvance?: boolean;
  speed?: number;
  className?: string;
}

export const DialogueBox = ({
  character,
  avatar,
  messages,
  onComplete,
  autoAdvance = false,
  speed = 30,
  className
}: DialogueBoxProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const currentMessage = messages[currentMessageIndex] || "";

  useEffect(() => {
    if (currentMessageIndex >= messages.length) {
      onComplete?.();
      return;
    }

    setIsTyping(true);
    setDisplayedText("");
    setShowContinue(false);

    let index = 0;
    const typewriter = setInterval(() => {
      if (index < currentMessage.length) {
        setDisplayedText(currentMessage.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        setShowContinue(true);
        clearInterval(typewriter);
        
        if (autoAdvance) {
          setTimeout(() => {
            handleNext();
          }, 1500);
        }
      }
    }, speed);

    return () => clearInterval(typewriter);
  }, [currentMessageIndex, currentMessage, speed, autoAdvance]);

  const handleNext = () => {
    if (isTyping) {
      // Skip to end of current message
      setDisplayedText(currentMessage);
      setIsTyping(false);
      setShowContinue(true);
    } else if (currentMessageIndex < messages.length - 1) {
      // Next message
      setCurrentMessageIndex(prev => prev + 1);
    } else {
      // Complete dialogue
      onComplete?.();
    }
  };

  const handleSkip = () => {
    setCurrentMessageIndex(messages.length - 1);
    setDisplayedText(messages[messages.length - 1]);
    setIsTyping(false);
    setShowContinue(true);
  };

  return (
    <div className={cn(
      "rpg-card relative p-6 max-w-2xl mx-auto",
      "border-4 border-primary bg-gradient-card",
      className
    )}>
      {/* Character Info */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-primary/30">
        <div className="w-12 h-12 bg-primary/20 rounded border-2 border-primary flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={character} className="w-10 h-10 rounded" />
          ) : (
            <span className="font-pixel text-lg">🧙</span>
          )}
        </div>
        <div>
          <h3 className="font-pixel text-sm text-primary">{character}</h3>
          <div className="text-xs text-muted-foreground font-cyber">
            Message {currentMessageIndex + 1} of {messages.length}
          </div>
        </div>
      </div>

      {/* Message Content */}
      <div className="min-h-[80px] mb-6">
        <p className="text-sm leading-relaxed font-cyber text-foreground">
          {displayedText}
          {isTyping && (
            <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
          )}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleSkip}
          className="font-pixel text-xs"
        >
          Skip ⏭️
        </Button>
        
        <div className="flex gap-2">
          {showContinue && currentMessageIndex < messages.length - 1 && (
            <Button
              variant="hero"
              size="sm"
              onClick={handleNext}
              className="animate-glow"
            >
              Continue ▶️
            </Button>
          )}
          
          {showContinue && currentMessageIndex === messages.length - 1 && (
            <Button
              variant="legendary"
              size="sm"
              onClick={onComplete}
              className="animate-magic-sparkle"
            >
              Complete Quest ✨
            </Button>
          )}
          
          {isTyping && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="font-pixel text-xs"
            >
              Fast Forward ⏩
            </Button>
          )}
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-primary"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-primary"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-primary"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-primary"></div>
    </div>
  );
};