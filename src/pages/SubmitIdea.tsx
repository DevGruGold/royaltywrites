
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
import { toast } from "sonner";
import { FileUp, Info, CheckCircle2, Trophy, Star, TrendingUp, Wand } from "lucide-react";
import { Link } from "react-router-dom";
import AIJokeWriter from "@/components/AIJokeWriter";

const GEMINI_API_KEY = "AIzaSyBHR7BsHi_oFNOrJxgyNwK1JGumBcpuLOc";

const SubmitIdea = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [scriptContent, setScriptContent] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFormatting, setIsFormatting] = useState(false);

  // AI Format Function
  const handleFormatWithAI = async () => {
    if (!scriptContent.trim()) {
      toast("Enter your rough skit idea first!", { description: "The AI can help format what you write." });
      return;
    }
    setIsFormatting(true);
    try {
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `Rewrite the following as a properly formatted, creative, and clean short comedy skit, using screenplay format with scene headings, character names, and clear dialogue. Output only the script:

${scriptContent}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 400,
          }
        })
      });
      
      const data = await response.json();

      let aiScript = "";
      if (data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        aiScript = data.candidates[0].content.parts[0].text.trim();
      }

      if (aiScript) {
        setScriptContent(aiScript);
        toast("AI formatting complete!", { description: "The skit was rewritten in professional format." });
      } else {
        toast("AI formatting failed", { description: "Try again or write manually." });
      }
    } catch (err) {
      toast("Format Error", { description: "Could not connect to AI. Try again later." });
    } finally {
      setIsFormatting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !category || !scriptContent) {
      toast("Please fill out all required fields.", {
        description: "All fields are required for your sketch submission.",
      });
      return;
    }

    // Show success animation
    setShowSuccess(true);

    toast("🎉 Sketch Submitted Successfully!", {
      description: "Your sketch idea has been received and is being reviewed.",
    });

    // Reset form after a delay
    setTimeout(() => {
      setTitle("");
      setCategory("");
      setScriptContent("");
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
          description="Share your comedy sketch idea! You can write it rough or let our AI format it for you."
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
                        Write your idea below &mdash; use any style. Tap <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-comedy-100 text-comedy-700 text-xs"><Wand className="h-4 w-4 inline" />Format with AI</span> for a pro upgrade!
                      </CardDescription>
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
                        Your Skit (Rough Draft or Full Script)
                      </label>
                      <Textarea
                        id="script"
                        placeholder="Write your sketch idea here (rough or formatted)..."
                        rows={10}
                        value={scriptContent}
                        onChange={(e) => setScriptContent(e.target.value)}
                        required
                        className="font-mono"
                      />
                      <Button
                        type="button"
                        className="mt-2 comedy-gradient w-full md:w-auto"
                        onClick={handleFormatWithAI}
                        disabled={isFormatting}
                      >
                        <Wand className="mr-2 h-4 w-4" />
                        {isFormatting ? "Formatting..." : "Format with AI"}
                      </Button>
                    </div>

                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className={`w-full comedy-gradient transition-all duration-300`}
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
                    How to Have the Most Fun
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc text-sm pl-5 space-y-2">
                    <li>Describe a silly, original scenario or character.</li>
                    <li>If stuck, write something rough and hit <span className="inline-flex items-center gap-1 px-1 rounded bg-comedy-100 text-comedy-700 text-xs"><Wand className="h-3 w-3" />Format with AI</span>.</li>
                    <li>No strict formatting required&mdash;we'll polish it for you if needed!</li>
                  </ul>
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
                    Sketches that get produced qualify for royalty payments.
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
                        <span className="font-medium">Staff picks:</span> 10% higher royalties
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
