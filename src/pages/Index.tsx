import { useEffect } from "react";
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

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "script";
  const activeTab = tabMap[tabParam as keyof typeof tabMap] || "script";

  const handleTabChange = (value: string) => {
    setSearchParams({ tab: reverseTabMap[value as keyof typeof reverseTabMap] });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="text-center py-20 px-4">
        <h1 className="title-display text-primary mb-6">
          Story Creator Toolkit
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
          Transform your narrative into compelling videos with AI
        </p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-16 bg-transparent border-b border-border h-auto p-0">
            <TabsTrigger 
              value="script" 
              className="text-base md:text-lg py-4 px-8 bg-transparent border-0 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent data-[state=active]:shadow-none rounded-none font-medium hover:text-foreground transition-colors"
            >
              📝 Script Writing
            </TabsTrigger>
            <TabsTrigger 
              value="refine" 
              className="text-base md:text-lg py-4 px-8 bg-transparent border-0 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent data-[state=active]:shadow-none rounded-none font-medium hover:text-foreground transition-colors"
            >
              🤖 Refine with AI
            </TabsTrigger>
            <TabsTrigger 
              value="image" 
              className="text-base md:text-lg py-4 px-8 bg-transparent border-0 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent data-[state=active]:shadow-none rounded-none font-medium hover:text-foreground transition-colors"
            >
              🎨 Image Creation
            </TabsTrigger>
            <TabsTrigger 
              value="video" 
              className="text-base md:text-lg py-4 px-8 bg-transparent border-0 data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent data-[state=active]:shadow-none rounded-none font-medium hover:text-foreground transition-colors"
            >
              🎬 Video Assembly
            </TabsTrigger>
          </TabsList>

          <TabsContent value="script" className="mt-0">
            <ScriptWritingTab />
          </TabsContent>

          <TabsContent value="refine" className="mt-0">
            <RefineWithAITab />
          </TabsContent>

          <TabsContent value="image" className="mt-0">
            <ImageCreationTab />
          </TabsContent>

          <TabsContent value="video" className="mt-0">
            <VideoAssemblyTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
