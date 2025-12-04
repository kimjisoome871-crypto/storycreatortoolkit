import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const aiTools = [
  {
    name: "Synthesia",
    description: "AI avatars and automated video creation",
    url: "https://www.synthesia.io/",
    gradient: "gradient-lavender",
    emoji: "🎭"
  },
  {
    name: "HeyGen",
    description: "AI-powered video generation",
    url: "https://www.heygen.com/",
    gradient: "gradient-ocean",
    emoji: "🎬"
  },
  {
    name: "InVideo",
    description: "AI-enhanced video editing platform",
    url: "https://invideo.io/",
    gradient: "gradient-mint",
    emoji: "✨"
  }
];

const manualTools = [
  {
    name: "Canva",
    description: "Simple drag-and-drop video maker",
    url: "https://www.canva.com/",
    gradient: "gradient-coral",
    emoji: "🎨"
  },
  {
    name: "Clipchamp",
    description: "Microsoft's intuitive video editor",
    url: "https://clipchamp.com/en/",
    gradient: "gradient-sunshine",
    emoji: "✂️"
  }
];

const VideoAssemblyTab = () => {
  return (
    <div className="space-y-16">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="title-section text-foreground mb-4">
          Bring Everything Together Into
          <span className="block text-sunshine">Your Final Video</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          You've got your script and visuals. Now combine them into 
          a professional video that tells your story.
        </p>
      </div>

      {/* Two Approaches */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* AI-Powered */}
        <div 
          className="gradient-ocean card-creative text-white opacity-0 animate-slide-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">🤖</span>
            <div>
              <h3 className="font-display font-bold text-2xl mb-1">AI-Powered Creation</h3>
              <p className="text-white/80 italic">Upload and let AI do the work</p>
            </div>
          </div>
          
          <p className="text-white/90 mb-4">These tools automatically create videos from your content:</p>
          
          <ul className="space-y-3">
            {[
              "Upload your refined script",
              "Add your AI-generated images",
              "Let AI handle editing and timing",
              "Get a professional video in minutes"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-white/95">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Manual */}
        <div 
          className="gradient-coral card-creative text-white opacity-0 animate-slide-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">✋</span>
            <div>
              <h3 className="font-display font-bold text-2xl mb-1">Manual Assembly</h3>
              <p className="text-white/80 italic">Full creative control</p>
            </div>
          </div>
          
          <p className="text-white/90 mb-4">For those who want more customization:</p>
          
          <ul className="space-y-3">
            {[
              "Upload images to your platform",
              "Add script as text or voiceover",
              "Arrange visuals in story sequence",
              "Add transitions, music, effects",
              "Export your final masterpiece"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-white/95">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* AI-Powered Tools */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="title-section text-foreground mb-2">AI-Powered Tools</h3>
          <p className="text-muted-foreground">Let AI do the heavy lifting</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-5">
          {aiTools.map((tool, index) => (
            <div 
              key={index}
              className={`${tool.gradient} card-creative text-white text-center opacity-0 animate-slide-up`}
              style={{ animationDelay: `${(index + 3) * 0.1}s`, animationFillMode: 'forwards' }}
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

      {/* Manual Tools */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="title-section text-foreground mb-2">Manual Assembly Tools</h3>
          <p className="text-muted-foreground">Full creative control over your video</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {manualTools.map((tool, index) => (
            <div 
              key={index}
              className={`${tool.gradient} card-creative text-white text-center opacity-0 animate-slide-up`}
              style={{ animationDelay: `${(index + 6) * 0.1}s`, animationFillMode: 'forwards' }}
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

export default VideoAssemblyTab;