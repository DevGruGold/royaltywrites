
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
import { toast } from "@/components/ui/use-toast";
import { FileUp, Info, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const SubmitIdea = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [scriptContent, setScriptContent] = useState("");
  const [charactersValid, setCharactersValid] = useState(false);
  const [dialogueValid, setDialogueValid] = useState(false);
  const [sceneValid, setSceneValid] = useState(false);

  const checkScriptValidity = (content: string) => {
    // Check for specific character names and descriptions (not just general like "a man")
    const hasSpecificCharacters = /[A-Z]{2,}\s*\(.*\)/.test(content);
    
    // Check for proper scene headings (INT./EXT., location, time)
    const hasSceneHeadings = /(INT\.|EXT\.).*-.*\b(DAY|NIGHT|MORNING|EVENING|AFTERNOON|DUSK|DAWN)\b/.test(content);
    
    // Check for dialogue format (CHARACTER NAME followed by dialogue)
    const hasProperDialogue = /[A-Z]{2,}\s*\n((?!\n).)+/.test(content);

    setCharactersValid(hasSpecificCharacters);
    setSceneValid(hasSceneHeadings);
    setDialogueValid(hasProperDialogue);

    return hasSpecificCharacters && hasSceneHeadings && hasProperDialogue;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !category || !scriptContent) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill out all required fields.",
      });
      return;
    }

    const isValid = checkScriptValidity(scriptContent);
    if (!isValid) {
      toast({
        variant: "destructive",
        title: "Script Format Issue",
        description: "Your script does not meet professional format requirements. Please review the guidelines.",
      });
      return;
    }

    // In a real app, this would send data to a server
    toast({
      title: "Sketch Submitted Successfully",
      description: "Your sketch idea has been received and is being reviewed.",
    });

    // Reset the form
    setTitle("");
    setCategory("");
    setScriptContent("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Header 
          title="Submit Your Sketch Idea"
          description="Share your comedy sketch idea with our community and potentially get picked up for production."
          showCTA={false}
        />
        
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Submit a New Sketch</CardTitle>
                  <CardDescription>
                    Please ensure your submission follows our professional formatting standards to qualify for royalties.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="title" className="text-sm font-medium">
                        Sketch Title
                      </label>
                      <Input
                        id="title"
                        placeholder="Enter a catchy title for your sketch"
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
                            <SelectItem value="slapstick">Slapstick</SelectItem>
                            <SelectItem value="satire">Satire</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="script" className="text-sm font-medium">
                        Full Script
                      </label>
                      <Textarea
                        id="script"
                        placeholder="Write your full sketch script here in proper format..."
                        rows={15}
                        value={scriptContent}
                        onChange={(e) => {
                          setScriptContent(e.target.value);
                          checkScriptValidity(e.target.value);
                        }}
                        required
                        className="font-mono"
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-md">
                      <h3 className="font-medium flex items-center gap-2 mb-2">
                        <Info className="h-4 w-4 text-primary" />
                        Script Format Validation
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${charactersValid ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                            {charactersValid ? '✓' : '!'}
                          </div>
                          <span>Specific character names with descriptions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${sceneValid ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                            {sceneValid ? '✓' : '!'}
                          </div>
                          <span>Proper scene headings (INT./EXT., location, time)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dialogueValid ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                            {dialogueValid ? '✓' : '!'}
                          </div>
                          <span>Proper dialogue format</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button type="submit" className="w-full">Submit Sketch</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Script Format Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h3 className="font-medium mb-1">Character Names & Descriptions</h3>
                      <p className="text-muted-foreground">
                        All characters must have specific names and descriptions, not generic labels.
                      </p>
                      <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">
                        JENNIFER ADAMS (32, conspiracy-minded dog groomer from Tallahassee)
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">Scene Headings</h3>
                      <p className="text-muted-foreground">
                        Proper screenplay format with location and time of day.
                      </p>
                      <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">
                        INT. COFFEE SHOP - MORNING
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">Action Lines</h3>
                      <p className="text-muted-foreground">
                        Describe what happens in the scene, what characters do.
                      </p>
                      <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">
                        Jennifer nervously sips her coffee while glancing at her phone.
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-1">Dialogue</h3>
                      <p className="text-muted-foreground">
                        Character name in all caps followed by their lines.
                      </p>
                      <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">
                        JENNIFER<br />
                        (whispering)<br />
                        The dogs told me the truth about the mail carriers.
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" asChild className="w-full">
                        <Link to="/copyright-standards">
                          View Full Formatting Guide
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="bg-amber-50 dark:bg-amber-950/20">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    Royalty Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm">
                    Only sketches that follow our professional formatting standards qualify for royalty payments if produced.
                  </p>
                  <p className="text-sm mt-2">
                    This ensures your work is properly attributed and compensated like a professional staff writer.
                  </p>
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
