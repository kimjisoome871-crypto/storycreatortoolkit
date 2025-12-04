import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const aiTools = [
  {
    name: "Synthesia",
    description: "AI avatars and automated video creation",
    url: "https://www.synthesia.io/",
    gradient: "from-violet-500 to-purple-600",
    emoji: "🎭"
  },
  {
    name: "HeyGen",
    description: "AI-powered video generation",
    url: "https://www.heygen.com/",
    gradient: "from-blue-500 to-indigo-600",
    emoji: "🎬"
  },
  {
    name: "InVideo",
    description: "AI-enhanced video editing platform",
    url: "https://invideo.io/",
    gradient: "from-cyan-500 to-teal-600",
    emoji: "✨"
  }
];

const manualTools = [
  {
    name: "Canva",
    description: "Simple drag-and-drop video maker",
    url: "https://www.canva.com/",
    gradient: "from-pink-500 to-rose-600",
    emoji: "🎨"
  },
  {
    name: "Clipchamp",
    description: "Microsoft's intuitive video editor",
    url: "https://clipchamp.com/en/",
    gradient: "from-amber-500 to-orange-600",
    emoji: "✂️"
  }
];

const VideoAssemblyTab = () => {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🎬 Video Assembly</h2>
        <p className="text-muted-foreground">
          Combine your script and visuals into a professional video using these tools and approaches.
        </p>
      </div>

      {/* Two Ways to Create Video - Large Colorful Cards */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">🛠️ Two Ways to Create Your Video</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI-Powered Card */}
          <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl p-8 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h4 className="font-bold text-2xl mb-2">AI-Powered Video Creation</h4>
            <p className="text-white/80 italic mb-4">Upload your script and images - get an instant video</p>
            <p className="text-white/90 mb-4">These tools automatically create videos from your content:</p>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Upload your script
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Add your AI-generated images
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Let AI handle the editing and timing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Get a professional video in minutes
              </li>
            </ul>
          </div>

          {/* Manual Assembly Card */}
          <div className="bg-gradient-to-br from-orange-400 via-pink-500 to-rose-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="text-4xl mb-4">✋</div>
            <h4 className="font-bold text-2xl mb-2">Manual Video Assembly</h4>
            <p className="text-white/80 italic mb-4">Build your video step by step with full control</p>
            <p className="text-white/90 mb-4">For those who want more customization:</p>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Upload images to your chosen platform
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Add script as text overlays or voiceover
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Arrange visuals in story sequence
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Add transitions, music, and effects
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white/60"></span>
                Export your final video
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* AI-Powered Tools Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">🤖 AI-Powered Tools</h3>
          <p className="text-muted-foreground italic">Let AI do the heavy lifting</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => (
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

      {/* Manual Assembly Tools Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-2">✋ Manual Assembly Tools</h3>
          <p className="text-muted-foreground italic">Full creative control over your video</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {manualTools.map((tool, index) => (
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

export default VideoAssemblyTab;
