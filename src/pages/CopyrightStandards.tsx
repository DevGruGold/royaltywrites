
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { FileDown, Check, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";

const CopyrightStandards = () => {
  const [email, setEmail] = useState("");

  const handleDownloadPDF = () => {
    // In a real implementation, this would generate and download a PDF
    toast({
      title: "PDF Download Started",
      description: "Your document is being prepared and will download shortly.",
    });
  };

  const handleEmailSubscribe = () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email Required",
        description: "Please enter your email address to receive updates.",
      });
      return;
    }
    
    // In a real implementation, this would send the email to a server
    toast({
      title: "Thank You for Subscribing",
      description: "We'll send you the agreement and any future updates.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Header 
          title="Professional Writing Standards & Royalty Agreement"
          description="Ensuring your comedy sketches are protected, properly credited, and fairly compensated like a professional staff writer."
          showCTA={false}
        />
        
        <div className="container mx-auto px-4 mb-16">
          <Tabs defaultValue="agreement" className="w-full mb-8">
            <TabsList className="grid w-full md:w-auto grid-cols-3">
              <TabsTrigger value="agreement">Full Agreement</TabsTrigger>
              <TabsTrigger value="guidelines">Submission Guidelines</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            
            <TabsContent value="agreement" className="mt-6">
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">SNL Ideas Contributor Agreement & Royalty Contract</h2>
                  <Button onClick={handleDownloadPDF} variant="outline" className="flex items-center gap-2">
                    <FileDown className="h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
                
                <div className="prose prose-sm md:prose-base max-w-none">
                  <p className="text-muted-foreground mb-4">
                    This Agreement ("Agreement") is made between SNL Ideas, a project of [Company Name], hereinafter referred to as the "Platform," and the contributor submitting a sketch idea, hereinafter referred to as the "Writer."
                  </p>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">1. Purpose of Agreement</h3>
                    <p>
                      This Agreement governs the terms by which a Writer contributes original comedy sketch material ("Submission") to the Platform. The goal is to fairly compensate the Writer as if they were a professional staff writer in the entertainment industry, and to protect their intellectual property.
                    </p>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">2. Submission Scope & Format</h3>
                    <p>Each Submission must include:</p>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                      <li>A title and logline.</li>
                      <li>
                        A complete scripted sketch, including:
                        <ul className="list-circle pl-5 space-y-2 mt-2">
                          <li>Specific named characters (e.g., "Jen, a conspiracy-minded dog groomer from Tallahassee" vs. "a quirky woman").</li>
                          <li>Scene and setting information, in standard screenwriting format (INT./EXT., time of day, location).</li>
                          <li>Character actions, written in detail.</li>
                          <li>Spoken dialogue, written word-for-word.</li>
                        </ul>
                      </li>
                      <li>Optional: AI-assisted writing logs or outlines, if AI tools were used.</li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">3. Copyright & Ownership</h3>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                      <li>The Writer retains full copyright ownership of all original Submissions.</li>
                      <li>
                        If a sketch or idea is used, licensed, sampled, adapted, or otherwise employed in part or in full by any third party (including via AI), it must be:
                        <ul className="list-circle pl-5 space-y-2 mt-2">
                          <li>Properly credited to the Writer.</li>
                          <li>Licensed under terms of this agreement or a negotiated buyout.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">4. Royalties & Payment Terms</h3>
                    <p>
                      If a Submission is used or monetized by a third party (e.g., television network, podcast, YouTube creator, AI platform, etc.), the Writer shall receive:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                      <li>Base Royalty Rate: 5% of gross revenues generated from the sketch's use or derivative works (industry standard minimum).</li>
                      <li>Streaming/Performance Usage: $200 per usage for any live action, recorded, or animated performance of the sketch.</li>
                      <li>AI Model Licensing: If an AI model is trained using any part of the sketch, the Writer shall receive $500 flat or negotiated terms if part of a larger training dataset.</li>
                      <li>Buyout Option: The Platform or a third party may request a full rights transfer at a minimum floor price of $5,000 per sketch, subject to Writer approval.</li>
                    </ul>
                    <p>
                      All payments must be made via a verified payment method (PayPal, ACH, etc.) within 30 days of use, and tracking details will be available in the Writer's dashboard.
                    </p>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">5. Community Voting & Exposure</h3>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                      <li>Top-ranked sketches through community voting will receive bonus visibility and may be prioritized for external licensing opportunities.</li>
                      <li>Platform shall make commercially reasonable efforts to track unauthorized uses of popular sketches and enforce protection rights.</li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">6. Rights Management</h3>
                    <ul className="list-disc pl-5 space-y-2 my-4">
                      <li>The Platform acts as a non-exclusive agent for the purposes of licensing and enforcing the royalty structure described herein.</li>
                      <li>Writers may opt out or withdraw Submissions at any time unless the Submission has already been licensed.</li>
                    </ul>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">7. Dispute Resolution</h3>
                    <p>
                      Any disputes arising from the interpretation or implementation of this Agreement will be resolved via binding arbitration in New York or Los Angeles, in accordance with the Writers Guild of America (WGA) standards and applicable entertainment law.
                    </p>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">8. Term</h3>
                    <p>
                      This Agreement shall remain in effect for the life of the copyright, unless the Writer elects to sell or reassign rights.
                    </p>
                  </div>
                  
                  <div className="border-t border-border mt-6 pt-6">
                    <h3 className="text-xl font-bold mb-4">9. Signatures</h3>
                    <p>
                      By submitting a sketch on SNL Ideas, the Writer agrees to the terms set forth in this Agreement.
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-border mt-8 pt-6">
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
                    <div className="flex-1">
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Get the agreement by email
                      </label>
                      <Textarea 
                        id="email" 
                        placeholder="Enter your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <Button onClick={handleEmailSubscribe} className="min-w-[120px]">
                      Send to Me
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="guidelines" className="mt-6">
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Sketch Submission Guidelines</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <Info className="h-5 w-5 text-primary" />
                      Professional Script Format
                    </h3>
                    <p className="mb-4">
                      To qualify for copyright and royalty protection, your sketch must meet industry standards used by professional writers. This ensures your work is properly formatted for production and legal protection.
                    </p>
                    
                    <div className="bg-muted p-4 rounded-md mb-6">
                      <h4 className="font-semibold mb-2">Required Elements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Specific, named characters with detailed descriptions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Complete scene headings (INT./EXT., location, time)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Detailed action descriptions in present tense</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Word-for-word dialogue (not summarized)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span>Proper transitions and scene breaks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-4">Example: Professional vs. Amateur Format</h3>
                    
                    <div className="bg-destructive/10 p-4 rounded-md mb-4">
                      <h4 className="font-semibold text-destructive mb-2">❌ Amateur Format (Not Protected):</h4>
                      <p className="italic text-sm">
                        "A sketch about a guy who can't stop eating during a job interview. The interviewer gets annoyed but then starts eating too. It ends with them both getting food all over the office."
                      </p>
                    </div>
                    
                    <div className="bg-green-500/10 p-4 rounded-md">
                      <h4 className="font-semibold text-green-700 mb-2">✅ Professional Format (Protected):</h4>
                      <div className="text-sm font-mono">
                        <p className="mb-2">INT. CORPORATE OFFICE - DAY</p>
                        <p className="mb-4">MARK (32, nervous, wearing an ill-fitting suit) sits across from DIANE (45, polished HR director with zero patience).</p>
                        <p className="mb-2">DIANE<br />So, tell me about your experience at Johnson Financial.</p>
                        <p className="mb-2">Mark reaches into his pocket and pulls out a candy bar. He unwraps it loudly.</p>
                        <p className="mb-2">MARK<br />(mouth full)<br />Well, I specialized in client retention for three years and—</p>
                        <p className="mb-2">Etc...</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-border mt-8 pt-6">
                  <h3 className="text-lg font-bold mb-4">Script Elements Checklist</h3>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Element</TableHead>
                        <TableHead>Required</TableHead>
                        <TableHead>Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Character Names</TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell>"JENNIFER ADAMS (not just 'a woman')"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Character Descriptions</TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell>"32, conspiracy-minded dog groomer from Tallahassee"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Scene Headings</TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell>"INT. SPACESHIP COCKPIT - NIGHT"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Action Descriptions</TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell>"John nervously fiddles with his tie as he glances at the exit."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Full Dialogue</TableCell>
                        <TableCell><Check className="h-4 w-4 text-green-500" /></TableCell>
                        <TableCell>Word-for-word, not summarized</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Parentheticals</TableCell>
                        <TableCell>When needed</TableCell>
                        <TableCell>"(whispering) Don't move or it'll see us."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="faq" className="mt-6">
              <div className="bg-card rounded-lg border p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="border-b border-border pb-4">
                    <h3 className="text-lg font-bold mb-2">How specific must my characters be?</h3>
                    <p>
                      Characters must be specifically named and described with identifying traits, backgrounds, or quirks. Instead of writing "a doctor," write "DR. SARAH JENKINS (38, perpetually caffeinated ER physician with a thick Boston accent)." The more specific, the better your legal protection.
                    </p>
                  </div>
                  
                  <div className="border-b border-border pb-4">
                    <h3 className="text-lg font-bold mb-2">Do I retain copyright if my sketch uses current events or public figures?</h3>
                    <p>
                      Yes, you retain copyright to your specific expression of ideas, even when referencing public figures or current events. However, you cannot copyright historical facts or the mere idea of satirizing a public figure. Your protection extends to your unique dialogue, character interactions, and specific scene construction.
                    </p>
                  </div>
                  
                  <div className="border-b border-border pb-4">
                    <h3 className="text-lg font-bold mb-2">How are royalties tracked and paid?</h3>
                    <p>
                      Our platform uses a combination of digital fingerprinting, content monitoring tools, and industry partnerships to track when sketches are used in productions. Writers can access their dashboard to see usage reports and payment schedules. We process payments monthly for any sketches that have generated royalties.
                    </p>
                  </div>
                  
                  <div className="border-b border-border pb-4">
                    <h3 className="text-lg font-bold mb-2">Can I submit sketches with co-writers?</h3>
                    <p>
                      Yes, we support co-written submissions. During the submission process, you can add co-writers and specify royalty splits. All co-writers must have accounts on our platform and confirm their participation in the sketch.
                    </p>
                  </div>
                  
                  <div className="pb-4">
                    <h3 className="text-lg font-bold mb-2">What formats can I submit my sketch in?</h3>
                    <p>
                      Our platform supports rich text formatting, PDF uploads, and our built-in script editor that automatically formats your work to industry standards. We recommend using our script editor as it ensures all required elements are included.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CopyrightStandards;
