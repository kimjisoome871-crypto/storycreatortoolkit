import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const aiPrompts = [
  {
    title: "Make it flow naturally",
    emoji: "🌊",
    prompt: `I've written my story using the Pixar Story Framework. Please refine it to sound more natural and conversational while keeping all the key elements intact. Here's my story: [paste your story]`,
    gradient: "gradient-ocean",
  },
  {
    title: "Strengthen emotional impact",
    emoji: "💪",
    prompt: `Make this story more engaging and emotionally compelling without being overly dramatic: [paste your story]`,
    gradient: "gradient-coral",
  },
  {
    title: "Get alternative openings",
    emoji: "🎬",
    prompt: `Give me 3 different attention-grabbing ways to open this story: [paste your story]`,
    gradient: "gradient-sunshine",
  },
  {
    title: "Adapt for your context",
    emoji: "🎯",
    prompt: `This story is for [grad school application/job interview/marketing pitch/LinkedIn post]. Adapt the tone and language to fit that context better: [paste your story]`,
    gradient: "gradient-mint",
  },
  {
    title: "Tighten it up",
    emoji: "✂️",
    prompt: `This story needs to be under 2 minutes when spoken. Help me cut unnecessary words while keeping the impact: [paste your story]`,
    gradient: "gradient-lavender",
  }
];

const aiTools = [
  {
    name: "Claude",
    description: "Advanced AI for natural, authentic script writing",
    url: "https://claude.ai",
    gradient: "gradient-peach",
    emoji: "🧠"
  },
  {
    name: "ChatGPT",
    description: "Versatile AI for creative script enhancement",
    url: "https://chatgpt.com",
    gradient: "gradient-mint",
    emoji: "💬"
  }
];

const RefineWithAITab = () => {
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
          Polish Your Story with
          <span className="block text-lavender">AI Magic</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          You've structured your story using the Pixar framework. 
          Now let AI help you refine and perfect it.
        </p>
      </div>

      {/* AI Prompts */}
      <div className="space-y-5">
        {aiPrompts.map((item, index) => (
          <div 
            key={index}
            className={`${item.gradient} card-creative text-white opacity-0 animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{item.emoji}</span>
                  <h4 className="font-display font-bold text-xl">
                    Prompt {index + 1}: {item.title}
                  </h4>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                  <p className="text-white/95 text-sm font-mono leading-relaxed">
                    {item.prompt}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => handleCopy(item.prompt, index)}
                className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur shrink-0"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Prompt
                  </>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Tools */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="title-section text-foreground mb-2">Your AI Toolkit</h3>
          <p className="text-muted-foreground">
            Paste your prompts into these AI assistants
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiTools.map((tool, index) => (
            <div 
              key={index}
              className={`${tool.gradient} card-creative text-white opacity-0 animate-slide-up`}
              style={{ animationDelay: `${(index + 5) * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-5xl">{tool.emoji}</span>
                <div className="flex-1">
                  <h4 className="font-display font-bold text-2xl mb-2">{tool.name}</h4>
                  <p className="text-white/80 mb-4">{tool.description}</p>
                  <Button 
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur w-full sm:w-auto"
                    asChild
                  >
                    <a 
                      href={tool.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Open {tool.name}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RefineWithAITab;