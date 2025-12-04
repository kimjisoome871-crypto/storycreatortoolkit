import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ImageCreationTab = () => {
  return (
    <div className="space-y-8">
      {/* Intro */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-2">🎨 Image Creation</h2>
        <p className="text-muted-foreground">
          Create compelling visuals that bring your story to life and support your narrative.
        </p>
      </div>

      {/* What Visuals You Need */}
      <Card className="bg-section-blue border-none">
        <CardHeader>
          <CardTitle className="text-primary">What Visuals You Need 🖼️</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Your Brand Character/Avatar 👤</h4>
            <p className="text-muted-foreground">
              Like how Amul India uses their iconic girl mascot as their brand representative - you need a visual representation of yourself or your brand.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Your Personal Avatar 🎭</h4>
            <p className="text-muted-foreground">
              A digital version of yourself that represents you in your story - think of it as your visual identity or character that appears in your video.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Story Settings 🏢</h4>
            <p className="text-muted-foreground">
              The places where your story happens - your workplace, campus, creative space, meeting room, or any location relevant to your narrative.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Key Moments ⭐</h4>
            <p className="text-muted-foreground">
              Important scenes from your story - the challenge you faced, your breakthrough moment, the impact you created, or any pivotal scene.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Concept Visuals 💡</h4>
            <p className="text-muted-foreground">
              Images that represent your main message - symbols, metaphors, or abstract concepts that support what you're trying to communicate.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* AI Prompts */}
      <Card className="bg-section-green border-none">
        <CardHeader>
          <CardTitle className="text-primary">AI Prompts for Image Creation 🎨</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="bg-background p-4 rounded-lg">
              <p className="font-medium text-foreground mb-1">Personal/Brand Avatar:</p>
              <p className="text-muted-foreground">"Create a [professional/creative/approachable] illustration of someone in [your field] with [key personality traits]"</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <p className="font-medium text-foreground mb-1">Story Scene:</p>
              <p className="text-muted-foreground">"Generate an image showing [specific moment from your story] in [appropriate setting]"</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <p className="font-medium text-foreground mb-1">Concept Visual:</p>
              <p className="text-muted-foreground">"Create a symbolic image representing [your main impact/achievement/goal]"</p>
            </div>
            <div className="bg-background p-4 rounded-lg">
              <p className="font-medium text-foreground mb-1">Background/Setting:</p>
              <p className="text-muted-foreground">"Design a [clean/dynamic/warm] background that represents [your industry/values]"</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Image Tools */}
      <div>
        <h3 className="text-xl font-semibold text-primary mb-4">AI Image Tools 🔗</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-primary">GenSpark</CardTitle>
              <CardDescription>
                Powerful AI image generation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90" 
                asChild
              >
                <a 
                  href="https://www.genspark.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Use GenSpark
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-primary">ChatGPT</CardTitle>
              <CardDescription>
                AI images with DALL-E
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90" 
                asChild
              >
                <a 
                  href="https://chatgpt.com/" 
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

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle className="text-primary">Gemini</CardTitle>
              <CardDescription>
                Google's AI image creator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90" 
                asChild
              >
                <a 
                  href="https://gemini.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Use Gemini
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

export default ImageCreationTab;