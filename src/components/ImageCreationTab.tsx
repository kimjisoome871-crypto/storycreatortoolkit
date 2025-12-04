import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const visualTypes = [
  {
    emoji: "👤",
    title: "Your Brand Character",
    description: "Like Amul's iconic mascot — create a visual representation of yourself or your brand that's instantly recognizable.",
    gradient: "gradient-coral"
  },
  {
    emoji: "🎭",
    title: "Your Personal Avatar",
    description: "A digital version of yourself that appears throughout your video. Your visual identity brought to life.",
    gradient: "gradient-lavender"
  },
  {
    emoji: "🏢",
    title: "Story Settings",
    description: "The backdrops where your story unfolds — your workspace, campus, creative space, or any relevant location.",
    gradient: "gradient-ocean"
  },
  {
    emoji: "⭐",
    title: "Key Moments",
    description: "Visual representations of pivotal scenes — challenges faced, breakthrough moments, impacts created.",
    gradient: "gradient-sunshine"
  },
  {
    emoji: "💡",
    title: "Concept Visuals",
    description: "Abstract imagery representing your message — symbols, metaphors, and visual concepts that reinforce your narrative.",
    gradient: "gradient-mint"
  }
];

const imagePrompts = [
  {
    title: "Personal/Brand Avatar",
    emoji: "👤",
    prompt: `Create a [professional/creative/approachable] illustration of someone in [your field] with [key personality traits]`,
    gradient: "gradient-coral",
  },
  {
    title: "Story Scene",
    emoji: "🎬",
    prompt: `Generate an image showing [specific moment from your story] in [appropriate setting]`,
    gradient: "gradient-ocean",
  },
  {
    title: "Concept Visual",
    emoji: "✨",
    prompt: `Create a symbolic image representing [your main impact/achievement/goal]`,
    gradient: "gradient-lavender",
  },
  {
    title: "Background/Setting",
    emoji: "🖼️",
    prompt: `Design a [clean/dynamic/warm] background that represents [your industry/values]`,
    gradient: "gradient-forest",
  }
];

const imageTools = [
  {
    name: "GenSpark",
    description: "Powerful AI image generation",
    url: "https://www.genspark.ai/",
    gradient: "gradient-lavender",
    emoji: "🎨"
  },
  {
    name: "ChatGPT",
    description: "AI images with DALL-E",
    url: "https://chatgpt.com/",
    gradient: "gradient-mint",
    emoji: "🤖"
  },
  {
    name: "Gemini",
    description: "Google's AI image creator",
    url: "https://gemini.google.com/",
    gradient: "gradient-ocean",
    emoji: "✨"
  }
];

const ImageCreationTab = () => {
  const { toast } = useToast();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard",
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-16">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="title-section text-foreground mb-4">
          Create Visuals That
          <span className="block text-mint">Bring Your Story to Life</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Compelling visuals support your narrative and make your story unforgettable. 
          Here's what you need and how to create it.
        </p>
      </div>

      {/* Visual Types Grid */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="title-section text-foreground mb-2">What Visuals You Need</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {visualTypes.map((visual, index) => (
            <div 
              key={index}
              className={`${visual.gradient} card-creative text-white opacity-0 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{visual.emoji}</span>
                <div>
                  <h4 className="font-display font-bold text-xl mb-2">{visual.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{visual.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Prompts */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="title-section text-foreground mb-2">AI Prompts for Images</h3>
          <p className="text-muted-foreground">Copy, customize, and generate</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {imagePrompts.map((item, index) => (
            <div 
              key={index}
              className={`${item.gradient} card-creative text-white opacity-0 animate-slide-up`}
              style={{ animationDelay: `${(index + 5) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.emoji}</span>
                <h4 className="font-display font-bold text-lg">{item.title}</h4>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-xl p-3 mb-4">
                <p className="text-white/95 text-sm font-mono">{item.prompt}</p>
              </div>
              <Button
                onClick={() => handleCopy(item.prompt, index)}
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* AI Image Tools */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="title-section text-foreground mb-2">AI Image Tools</h3>
          <p className="text-muted-foreground">Generate your visuals with these tools</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {imageTools.map((tool, index) => (
            <div 
              key={index}
              className={`${tool.gradient} card-creative text-white text-center opacity-0 animate-slide-up`}
              style={{ animationDelay: `${(index + 9) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <span className="text-5xl block mb-4">{tool.emoji}</span>
              <h4 className="font-display font-bold text-xl mb-2">{tool.name}</h4>
              <p className="text-white/80 text-sm mb-4">{tool.description}</p>
              <Button 
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur"
                asChild
              >
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Use {tool.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCreationTab;