
import { useState } from "react";
import { Bot, X, Send, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter
} from "./ui/sheet";
import { Badge } from "./ui/badge";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const suggestionPrompts = [
  "Help me come up with a political satire sketch idea",
  "I need a character-driven sketch about roommates",
  "Give me an idea for a musical sketch parody",
  "I want to write an absurdist sketch about technology"
];

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your comedy sketch assistant. I can help you develop your sketch ideas, suggest characters, settings, and punchlines. What kind of sketch are you working on today?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue);
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const generateAIResponse = (prompt: string): Message => {
    // This is a mock function - in a real app, this would call an AI API
    const responses = [
      "That's a great starting point! Consider adding a twist where the main character unexpectedly reveals a hidden talent.",
      "I love this direction. To strengthen your sketch, try building tension with a misunderstanding that escalates through the scene.",
      "Excellent idea! For the punchline, you could subvert expectations by having the character do exactly the opposite of what the audience expects.",
      "Have you considered adding a recurring catchphrase that gets funnier each time it's used? That could really make your sketch memorable.",
      "This concept has potential! Try using the 'rule of three' - set up a pattern twice, then break it the third time for comedic effect."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    return {
      id: Date.now().toString(),
      content: randomResponse,
      sender: 'assistant',
      timestamp: new Date()
    };
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full h-14 w-14 shadow-lg comedy-gradient animate-pulse-subtle">
            <Bot className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90vw] sm:w-[450px] flex flex-col h-[80vh] sm:h-[600px] rounded-t-lg">
          <SheetHeader className="text-left border-b pb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <SheetTitle>Comedy Assistant</SheetTitle>
              </div>
              <SheetClose asChild>
                <Button variant="ghost" size="icon" aria-label="Close">
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            </div>
            <SheetDescription>
              Your AI-powered comedy writing partner
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex-1 overflow-y-auto py-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="pt-4 border-t">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggestionPrompts.map((prompt, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-secondary transition-colors"
                  onClick={() => handleSuggestionClick(prompt)}
                >
                  <Lightbulb className="h-3 w-3 mr-1" />
                  {prompt.length > 20 ? prompt.substring(0, 20) + '...' : prompt}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Textarea
                placeholder="Ask for help with your sketch idea..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <Button 
                size="icon" 
                onClick={handleSend} 
                disabled={!inputValue.trim() || isLoading}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AIAssistant;
