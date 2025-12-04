import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const VideoAssemblyTab = () => {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🎬 Video Assembly</h2>
        <p className="text-muted-foreground">
          Combine your script and visuals into a professional video using these tools and approaches.
        </p>
      </div>

      {/* Two Ways to Create Video */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-6">Two Ways to Create Your Video 🛠️</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* AI-Powered Section */}
          <Card className="bg-section-purple border-none">
            <CardHeader>
              <CardTitle className="text-primary">AI-Powered Video Creation 🤖</CardTitle>
              <CardDescription className="italic">
                Upload your script and images - get an instant video
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">These tools automatically create videos from your content:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Upload your script</li>
                <li>• Add your AI-generated images</li>
                <li>• Let AI handle the editing and timing</li>
                <li>• Get a professional video in minutes</li>
              </ul>
            </CardContent>
          </Card>

          {/* Manual Assembly Section */}
          <Card className="bg-section-orange border-none">
            <CardHeader>
              <CardTitle className="text-primary">Manual Video Assembly ✋</CardTitle>
              <CardDescription className="italic">
                Build your video step by step with full control
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">For those who want more customization:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Upload images to your chosen platform</li>
                <li>• Add script as text overlays or voiceover</li>
                <li>• Arrange visuals in story sequence</li>
                <li>• Add transitions, music, and effects</li>
                <li>• Export your final video</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Video Creation Tools */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">Video Creation Tools 🔗</h3>
        
        {/* AI-Powered Tools */}
        <div className="mb-6">
          <h4 className="text-lg font-medium text-foreground mb-4">AI-Powered Tools:</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="premium-hover border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary">Synthesia</CardTitle>
                <CardDescription>
                  AI avatars and automated video creation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" 
                  asChild
                >
                  <a 
                    href="https://www.synthesia.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Use Synthesia
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-hover border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary">HeyGen</CardTitle>
                <CardDescription>
                  AI-powered video generation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" 
                  asChild
                >
                  <a 
                    href="https://www.heygen.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Use HeyGen
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-hover border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary">InVideo</CardTitle>
                <CardDescription>
                  AI-enhanced video editing platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" 
                  asChild
                >
                  <a 
                    href="https://invideo.io/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Use InVideo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Manual Assembly Tools */}
        <div>
          <h4 className="text-lg font-medium text-foreground mb-4">Manual Assembly Tools:</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="premium-hover border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary">Canva</CardTitle>
                <CardDescription>
                  Simple drag-and-drop video maker
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline"
                  className="w-full border-border hover:bg-section-light" 
                  asChild
                >
                  <a 
                    href="https://www.canva.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Use Canva
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="premium-hover border-border/50 shadow-sm">
              <CardHeader>
                <CardTitle className="text-primary">Clipchamp</CardTitle>
                <CardDescription>
                  Microsoft's intuitive video editor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline"
                  className="w-full border-border hover:bg-section-light" 
                  asChild
                >
                  <a 
                    href="https://clipchamp.com/en/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Use Clipchamp
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAssemblyTab;