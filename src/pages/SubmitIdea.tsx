
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { FileUp, Info, AlertTriangle, CheckCircle2, Trophy, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import AIJokeWriter from "@/components/AIJokeWriter";

const SubmitIdea = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [scriptContent, setScriptContent] = useState("");
  const [checkStep, setCheckStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  // Gamified validation process
  const checkScriptValidity = (content: string) => {
    // Check for specific character names and descriptions
    const hasSpecificCharacters = /[A-Z]{2,}\s*\(.*\)/.test(content);
    
    // Check for proper scene headings (INT./EXT., location, time)
    const hasSceneHeadings = /(INT\.|EXT\.).*-.*\b(DAY|NIGHT|MORNING|EVENING|AFTERNOON|DUSK|DAWN)\b/.test(content);
    
    // Check for dialogue format (CHARACTER NAME followed by dialogue)
    const hasProperDialogue = /[A-Z]{2,}\s*\n((?!\n).)+/.test(content);

    return {
      characters: hasSpecificCharacters,
      scenes: hasSceneHeadings,
      dialogue: hasProperDialogue
    };
  };

  const handleContentChange = (text: string) => {
    setScriptContent(text);
    
    // Update the checking animation step
    const { characters, scenes, dialogue } = checkScriptValidity(text);
    let steps = 0;
    if (characters) steps++;
    if (scenes) steps++;
    if (dialogue) steps++;
    setCheckStep(steps);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !category || !scriptContent) {
      toast("Please fill out all required fields.", {
        description: "All fields are required for your sketch submission.",
      });
      return;
    }

    const { characters, scenes, dialogue } = checkScriptValidity(scriptContent);
    if (!characters || !scenes || !dialogue) {
      toast("Script Format Issue", {
        description: "Your script doesn't meet all format requirements. See the guidelines section.",
      });
      return;
    }

    // Show success animation
    setShowSuccess(true);
    
    // In a real app, this would send data to a server
    toast("🎉 Sketch Submitted Successfully!", {
      description: "Your sketch idea has been received and is being reviewed.",
    });

    // Reset form after a delay
    setTimeout(() => {
      setTitle("");
      setCategory("");
      setScriptContent("");
      setCheckStep(0);
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <AIJokeWriter />
      
      <main className="flex-1">
        <Header 
          title="Submit Your Sketch"
          description="Share your comedy sketch idea and earn royalties if it gets produced."
          showCTA={false}
        />
        
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className={showSuccess ? "border-green-500 transition-all duration-500" : ""}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Submit a New Sketch</CardTitle>
                      <CardDescription>
                        Follow our professional formatting to qualify for royalties.
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${checkStep >= 1 ? 'bg-green-500' : 'bg-gray-200'} transition-colors duration-300`}></div>
                      <div className={`w-3 h-3 rounded-full ${checkStep >= 2 ? 'bg-green-500' : 'bg-gray-200'} transition-colors duration-300`}></div>
                      <div className={`w-3 h-3 rounded-full ${checkStep >= 3 ? 'bg-green-500' : 'bg-gray-200'} transition-colors duration-300`}></div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="title" className="text-sm font-medium">
                          Sketch Title
                        </label>
                        <Input
                          id="title"
                          placeholder="Enter a catchy title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="category" className="text-sm font-medium">
                          Category
                        </label>
                        <Select value={category} onValueChange={setCategory}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Comedy Categories</SelectLabel>
                              <SelectItem value="political">Political</SelectItem>
                              <SelectItem value="parody">Parody</SelectItem>
                              <SelectItem value="absurdist">Absurdist</SelectItem>
                              <SelectItem value="musical">Musical</SelectItem>
                              <SelectItem value="character">Character-driven</SelectItem>
                              <SelectItem value="topical">Topical</SelectItem>
                              <SelectItem value="satire">Satire</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="script" className="text-sm font-medium">
                        Full Script
                      </label>
                      <Textarea
                        id="script"
                        placeholder="Write your sketch script here in proper format..."
                        rows={12}
                        value={scriptContent}
                        onChange={(e) => handleContentChange(e.target.value)}
                        required
                        className="font-mono"
                      />
                    </div>

                    <div className="bg-muted rounded-md p-3">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium flex items-center gap-2">
                          <Info className="h-4 w-4 text-primary" />
                          Format Validation
                        </h3>
                        <span className="text-xs text-muted-foreground">{checkStep}/3 requirements met</span>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkScriptValidity(scriptContent).characters ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                            {checkScriptValidity(scriptContent).characters ? '✓' : '!'}
                          </div>
                          <span>Character names with descriptions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkScriptValidity(scriptContent).scenes ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                            {checkScriptValidity(scriptContent).scenes ? '✓' : '!'}
                          </div>
                          <span>Scene headings (INT./EXT., location, time)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${checkScriptValidity(scriptContent).dialogue ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                            {checkScriptValidity(scriptContent).dialogue ? '✓' : '!'}
                          </div>
                          <span>Proper dialogue format</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className={`w-full ${checkStep === 3 ? 'comedy-gradient' : ''} transition-all duration-300`}
                        disabled={showSuccess}
                      >
                        {showSuccess ? 'Submitted Successfully!' : 'Submit Sketch'}
                        {showSuccess && <CheckCircle2 className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1 space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Star className="h-5 w-5 text-comedy-500" />
                    Format Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="characters">
                    <TabsList className="w-full mb-3">
                      <TabsTrigger value="characters">Characters</TabsTrigger>
                      <TabsTrigger value="scenes">Scenes</TabsTrigger>
                      <TabsTrigger value="dialogue">Dialogue</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="characters" className="mt-0">
                      <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">
                        JENNIFER ADAMS (32, conspiracy-minded dog groomer)
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        All characters must have specific names and descriptions, not generic labels.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="scenes" className="mt-0">
                      <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">
                        INT. COFFEE SHOP - MORNING
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Proper screenplay format with location and time of day.
                      </p>
                    </TabsContent>
                    
                    <TabsContent value="dialogue" className="mt-0">
                      <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">
                        JENNIFER<br />
                        (whispering)<br />
                        The dogs told me the truth about the mail carriers.
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Character name in all caps followed by their lines.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3 bg-amber-50 dark:bg-amber-950/20">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-amber-600" />
                    Royalty Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-3">
                  <p className="text-sm">
                    Sketches that follow our formatting standards qualify for royalty payments if produced.
                  </p>
                  
                  <div className="mt-4 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <div className="text-xs">
                        <span className="font-medium">Trending sketches:</span> 5% higher royalties
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-amber-500" />
                      <div className="text-xs">
                        <span className="font-medium">Pro formatting:</span> 10% higher royalties
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to="/copyright-standards">
                        <FileUp className="h-4 w-4 mr-1" />
                        View Royalty Contract
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitIdea;
