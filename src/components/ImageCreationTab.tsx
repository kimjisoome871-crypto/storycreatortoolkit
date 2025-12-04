import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const visualTypes = [
  {
    emoji: "👤",
    title: "Your Brand Character/Avatar",
    description: "Like how Amul India uses their iconic girl mascot as their brand representative - you need a visual representation of yourself or your brand.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    emoji: "🎭",
    title: "Your Personal Avatar",
    description: "A digital version of yourself that represents you in your story - think of it as your visual identity or character that appears in your video.",
    gradient: "from-violet-500 to-purple-500"
  },
  {
    emoji: "🏢",
    title: "Story Settings",
    description: "The places where your story happens - your workplace, campus, creative space, meeting room, or any location relevant to your narrative.",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    emoji: "⭐",
    title: "Key Moments",
    description: "Important scenes from your story - the challenge you faced, your breakthrough moment, the impact you created, or any pivotal scene.",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    emoji: "💡",
    title: "Concept Visuals",
    description: "Images that represent your main message - symbols, metaphors, or abstract concepts that support what you're trying to communicate.",
    gradient: "from-emerald-400 to-teal-500"
  }
];

const imagePrompts = [
  {
    title: "Personal/Brand Avatar",
    emoji: "👤",
    prompt: `"Create a [professional/creative/approachable] illustration of someone in [your field] with [key personality traits]"`,
    gradient: "from-pink-50 to-rose-50",
    border: "border-pink-300",
    accent: "text-pink-700"
  },
  {
    title: "Story Scene",
    emoji: "🎬",
    prompt: `"Generate an image showing [specific moment from your story] in [appropriate setting]"`,
    gradient: "from-blue-50 to-cyan-50",
    border: "border-blue-300",
    accent: "text-blue-700"
  },
  {
    title: "Concept Visual",
    emoji: "✨",
    prompt: `"Create a symbolic image representing [your main impact/achievement/goal]"`,
    gradient: "from-violet-50 to-purple-50",
    border: "border-violet-300",
    accent: "text-violet-700"
  },
  {
    title: "Background/Setting",
    emoji: "🖼️",
    prompt: `"Design a [clean/dynamic/warm] background that represents [your industry/values]"`,
    gradient: "from-emerald-50 to-teal-50",
    border: "border-emerald-300",
    accent: "text-emerald-700"
  }
];

const imageTools = [
  {
    name: "GenSpark",
    description: "Powerful AI image generation",
    url: "https://www.genspark.ai/",
    gradient: "from-indigo-500 to-purple-600",
    emoji: "🎨"
  },
  {
    name: "ChatGPT",
    description: "AI images with DALL-E",
    url: "https://chatgpt.com/",
    gradient: "from-emerald-500 to-teal-600",
    emoji: "🤖"
  },
  {
    name: "Gemini",
    description: "Google's AI image creator",
    url: "https://gemini.google.com/",
    gradient: "from-blue-500 to-cyan-600",
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
    <div className="space-y-12">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🎨 Image Creation</h2>
        <p className="text-muted-foreground">
          Create compelling visuals that bring your story to life and support your narrative.
        </p>
      </div>

      {/* What Visuals You Need - Colorful Grid */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">🖼️ What Visuals You Need</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visualTypes.map((visual, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br ${visual.gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              <div className="absolute top-4 right-4 text-3xl opacity-80">{visual.emoji}</div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h4 className="font-bold text-lg pr-8">{visual.title}</h4>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">{visual.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Prompts - Colorful Copyable Boxes */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">🎨 AI Prompts for Image Creation</h3>
          <p className="text-muted-foreground italic">Copy these prompts and customize with your details</p>
        </div>

        <div className="space-y-4">
          {imagePrompts.map((item, index) => (
            <Card key={index} className={`bg-gradient-to-r ${item.gradient} border ${item.border} overflow-hidden`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h4 className={`font-semibold ${item.accent} mb-3 flex items-center gap-2`}>
                      <span className="text-xl">{item.emoji}</span>
                      {item.title}
                    </h4>
                    <p className="text-foreground/80 text-sm font-mono bg-white/60 p-4 rounded-lg border border-white/80">
                      {item.prompt}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleCopy(item.prompt, index)}
                    className={`flex-shrink-0 ${item.border} bg-white hover:bg-white/80 ${item.accent}`}
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Image Tools - Colorful Cards */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">🔗 AI Image Tools</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {imageTools.map((tool, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${tool.gradient} rounded-xl p-6 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="text-4xl mb-4">{tool.emoji}</div>
              <h4 className="font-bold text-xl mb-2">{tool.name}</h4>
              <p className="text-white/80 text-sm mb-4">{tool.description}</p>
              <Button 
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur" 
                asChild
              >
                <a 
                  href={tool.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
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
