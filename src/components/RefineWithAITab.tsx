import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const aiPrompts = [
  {
    title: "Make it flow naturally",
    emoji: "🌊",
    prompt: `I've written my story using the Pixar Story Framework. Please refine it to sound more natural and conversational while keeping all the key elements intact. Here's my story: [paste your story]`,
    gradient: "from-cyan-50 to-blue-50",
    border: "border-cyan-300",
    accent: "text-cyan-700"
  },
  {
    title: "Strengthen emotional impact",
    emoji: "💪",
    prompt: `Make this story more engaging and emotionally compelling without being overly dramatic: [paste your story]`,
    gradient: "from-rose-50 to-pink-50",
    border: "border-rose-300",
    accent: "text-rose-700"
  },
  {
    title: "Get alternative openings",
    emoji: "🎬",
    prompt: `Give me 3 different attention-grabbing ways to open this story: [paste your story]`,
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-300",
    accent: "text-amber-700"
  },
  {
    title: "Adapt for your context",
    emoji: "🎯",
    prompt: `This story is for [grad school application/job interview/marketing pitch/LinkedIn post]. Adapt the tone and language to fit that context better: [paste your story]`,
    gradient: "from-emerald-50 to-teal-50",
    border: "border-emerald-300",
    accent: "text-emerald-700"
  },
  {
    title: "Tighten it up",
    emoji: "✂️",
    prompt: `This story needs to be under 2 minutes when spoken. Help me cut unnecessary words while keeping the impact: [paste your story]`,
    gradient: "from-violet-50 to-purple-50",
    border: "border-violet-300",
    accent: "text-violet-700"
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
    <div className="space-y-12">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🤖 Use AI to Refine Your Story</h2>
        <p className="text-muted-foreground">
          You've structured your story using the Pixar framework. Now polish it with AI.
        </p>
      </div>

      {/* AI Prompts - Colorful Copyable Boxes */}
      <div className="space-y-4">
        {aiPrompts.map((item, index) => (
          <Card key={index} className={`bg-gradient-to-r ${item.gradient} border ${item.border} overflow-hidden`}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h4 className={`font-semibold ${item.accent} mb-3 flex items-center gap-2`}>
                    <span className="text-xl">{item.emoji}</span>
                    Prompt {index + 1}: {item.title}
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

      {/* AI Tools */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">AI Tools 🔗</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="premium-hover border-border/50 shadow-sm bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-700">Claude</CardTitle>
              <CardDescription className="text-orange-600/80">
                Advanced AI for natural, authentic script writing
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
                asChild
              >
                <a 
                  href="https://claude.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Use Claude
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="premium-hover border-border/50 shadow-sm bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-700">ChatGPT</CardTitle>
              <CardDescription className="text-emerald-600/80">
                Versatile AI for creative script enhancement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" 
                asChild
              >
                <a 
                  href="https://chatgpt.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Use ChatGPT
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RefineWithAITab;
