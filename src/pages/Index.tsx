import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScriptWritingTab from "@/components/ScriptWritingTab";
import RefineWithAITab from "@/components/RefineWithAITab";
import ImageCreationTab from "@/components/ImageCreationTab";
import VideoAssemblyTab from "@/components/VideoAssemblyTab";

const tabMap = {
  script: "script",
  refine: "refine",
  image: "image",
  video: "video",
  "script-writing": "script",
  "refine-with-ai": "refine",
  "image-creation": "image",
  "video-assembly": "video",
};

const reverseTabMap = {
  script: "script-writing",
  refine: "refine-with-ai",
  image: "image-creation",
  video: "video-assembly",
};

const tabs = [
  { value: "script", label: "Script Writing", emoji: "✍️" },
  { value: "refine", label: "Refine with AI", emoji: "🪄" },
  { value: "image", label: "Image Creation", emoji: "🎨" },
  { value: "video", label: "Video Assembly", emoji: "🎬" },
];

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "script";
  const activeTab = tabMap[tabParam as keyof typeof tabMap] || "script";

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: reverseTabMap[value as keyof typeof reverseTabMap] });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Decorative blobs */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-coral/10 blob blur-3xl -z-10 animate-pulse-soft" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-mint/10 blob blur-3xl -z-10 animate-pulse-soft" style={{ animationDelay: '1s' }} />
      
      {/* Header Section */}
      <header className="relative text-center pt-16 pb-12 px-4">
        <div className="opacity-0 animate-fade-up">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-coral mb-4">
            Your Complete Video Creation Toolkit
          </p>
        </div>
        
        <h1 className="title-hero text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
          Turn Your Story Into
          <span className="block bg-gradient-to-r from-coral via-lavender to-mint bg-clip-text text-transparent">
            Compelling Videos
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up stagger-2">
          Master the art of storytelling with our step-by-step framework, 
          AI-powered tools, and creative resources.
        </p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {/* Custom Tab List */}
          <div className="opacity-0 animate-fade-up stagger-3">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-3 bg-transparent h-auto p-0 mb-12">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="
                    relative flex items-center justify-center gap-2 px-4 py-4 rounded-2xl
                    font-display font-semibold text-sm md:text-base
                    bg-card border-2 border-transparent shadow-sm
                    transition-all duration-300 ease-out
                    hover:border-border hover:shadow-lg hover:-translate-y-0.5
                    data-[state=active]:border-coral data-[state=active]:bg-coral
                    data-[state=active]:text-white
                    data-[state=active]:shadow-xl data-[state=active]:scale-[1.02]
                  "
                >
                  <span className="text-xl">{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="opacity-0 animate-fade-up stagger-4">
            <TabsContent value="script" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <ScriptWritingTab />
            </TabsContent>

            <TabsContent value="refine" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <RefineWithAITab />
            </TabsContent>

            <TabsContent value="image" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <ImageCreationTab />
            </TabsContent>

            <TabsContent value="video" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <VideoAssemblyTab />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;