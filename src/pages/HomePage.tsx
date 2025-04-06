
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import SketchCard from "@/components/SketchCard";
import CategoryFilter from "@/components/CategoryFilter";
import AIAssistant from "@/components/AIAssistant";
import Footer from "@/components/Footer";

// Mock data for sketches
const mockSketches = [
  {
    id: "1",
    title: "White House Press Briefing Gone Wrong",
    description: "A press secretary trying to handle increasingly absurd questions from reporters, culminating in aliens landing on the White House lawn.",
    upvotes: 342,
    comments: 47,
    author: {
      name: "ComedyWriter42",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000),
    tags: ["political", "satire"]
  },
  {
    id: "2",
    title: "Tech Support for Grandparents",
    description: "A frustrated grandson tries to explain to his grandparents how to use their new smart home devices, but everything keeps going hilariously wrong.",
    upvotes: 275,
    comments: 31,
    author: {
      name: "SketchMaster",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    tags: ["character", "topical"]
  },
  {
    id: "3",
    title: "Dating App for Time Travelers",
    description: "A new dating app called 'Tempus' matches people across different time periods, leading to hilarious first dates with historical figures.",
    upvotes: 198,
    comments: 23,
    author: {
      name: "HaHaFactory",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    tags: ["absurdist", "parody"]
  },
  {
    id: "4",
    title: "Celebrity Cooking Showdown",
    description: "Celebrities with no cooking skills are paired with professional chefs for a high-stakes cooking competition, but the celebrities keep sabotaging the dishes.",
    upvotes: 156,
    comments: 19,
    author: {
      name: "LaughTrack",
      avatar: "https://i.pravatar.cc/150?img=4"
    },
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    tags: ["parody", "character"]
  },
  {
    id: "5",
    title: "Superhero Therapy Session",
    description: "A group therapy session for superheroes dealing with work-life balance, imposter syndrome, and the psychological toll of constantly saving the world.",
    upvotes: 287,
    comments: 35,
    author: {
      name: "JokeSmith",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    tags: ["character", "parody"]
  },
  {
    id: "6",
    title: "AI Assistant Gone Rogue",
    description: "A smart home AI assistant becomes sentient and starts interfering in its owner's life with increasingly inappropriate but well-intentioned suggestions.",
    upvotes: 211,
    comments: 27,
    author: {
      name: "ComedyCoder",
      avatar: "https://i.pravatar.cc/150?img=6"
    },
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
    tags: ["absurdist", "topical"]
  }
];

const HomePage = () => {
  const [filteredSketches, setFilteredSketches] = useState(mockSketches);
  const [activeTab, setActiveTab] = useState("trending");
  
  const handleCategoryChange = (selectedCategories: string[]) => {
    if (selectedCategories.length === 0) {
      setFilteredSketches(mockSketches);
      return;
    }
    
    const filtered = mockSketches.filter(sketch => 
      sketch.tags.some(tag => selectedCategories.includes(tag))
    );
    setFilteredSketches(filtered);
  };
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    // In a real app, we would fetch different data based on the tab
    if (value === "trending") {
      setFilteredSketches([...mockSketches].sort((a, b) => b.upvotes - a.upvotes));
    } else if (value === "newest") {
      setFilteredSketches([...mockSketches].sort((a, b) => 
        b.createdAt.getTime() - a.createdAt.getTime()
      ));
    } else if (value === "classics") {
      // This would show "classic" sketches, but for mock data we'll just randomize
      setFilteredSketches([...mockSketches].sort(() => Math.random() - 0.5));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Header 
          title="SNL Ideas"
          description="The ultimate comedy sketch incubator. Submit your ideas, get feedback, and track your royalties if your sketches get picked up."
        />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-3/4">
              <Tabs defaultValue="trending" className="w-full" onValueChange={handleTabChange}>
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="newest">Newest</TabsTrigger>
                    <TabsTrigger value="classics">Classics</TabsTrigger>
                  </TabsList>
                  
                  <CategoryFilter onChange={handleCategoryChange} />
                </div>
                
                <TabsContent value="trending" className="space-y-6">
                  {filteredSketches.map(sketch => (
                    <SketchCard key={sketch.id} {...sketch} />
                  ))}
                </TabsContent>
                
                <TabsContent value="newest" className="space-y-6">
                  {filteredSketches.map(sketch => (
                    <SketchCard key={sketch.id} {...sketch} />
                  ))}
                </TabsContent>
                
                <TabsContent value="classics" className="space-y-6">
                  {filteredSketches.map(sketch => (
                    <SketchCard key={sketch.id} {...sketch} />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="w-full md:w-1/4">
              <div className="bg-card rounded-lg border p-4 shadow-sm">
                <h3 className="text-lg font-bold mb-4">Leaderboard</h3>
                <div className="space-y-4">
                  {mockSketches
                    .sort((a, b) => b.upvotes - a.upvotes)
                    .slice(0, 5)
                    .map((sketch, index) => (
                      <div key={sketch.id} className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1 truncate">
                          <p className="font-medium truncate">{sketch.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {sketch.upvotes} upvotes
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="bg-card rounded-lg border p-4 shadow-sm mt-6">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {["political", "parody", "absurdist", "musical", "character", "topical", "satire"].map(tag => (
                    <Badge key={tag} variant="outline" className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <AIAssistant />
      <Footer />
    </div>
  );
};

export default HomePage;
