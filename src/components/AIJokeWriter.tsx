
import React, { useState, useEffect } from "react";
import { Laugh } from "lucide-react";
import { toast } from "sonner";

// Fallback jokes in case the API fails
const fallbackJokes = [
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I'm writing a book about anti-gravity. It's impossible to put down!",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
];

const AIJokeWriter = () => {
  const [currentJoke, setCurrentJoke] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiKey, setApiKey] = useState<string>("");
  const [showApiKeyInput, setShowApiKeyInput] = useState<boolean>(false);

  // Function to generate a joke using the OpenAI API
  const generateJoke = async () => {
    if (!apiKey) {
      setShowApiKeyInput(true);
      return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
    }

    try {
      setIsLoading(true);
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: "You are a professional comedy writer specializing in short, punchy one-liners and jokes. Create ONLY the joke text - no explanations, no quotation marks, no 'here's a joke' prefixes."
            },
            {
              role: "user",
              content: "Write a single original, clean, and clever stand-up comedy one-liner or short joke. Be creative and surprising."
            }
          ],
          max_tokens: 100,
          temperature: 0.9
        })
      });

      const data = await response.json();
      
      if (data.error) {
        console.error("API error:", data.error);
        toast.error("Error generating joke: " + data.error.message);
        return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
      }
      
      const joke = data.choices[0].message.content.trim();
      return joke;
    } catch (error) {
      console.error("Error generating joke:", error);
      toast.error("Failed to generate joke. Using fallback jokes.");
      return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Try to get API key from localStorage
    const savedApiKey = localStorage.getItem("openaiApiKey");
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      setShowApiKeyInput(true);
    }

    // Initial joke generation
    generateJoke().then(joke => {
      setCurrentJoke(joke);
      setIsLoading(false);
    });

    // Set up interval to change joke every 10 seconds
    const intervalId = setInterval(async () => {
      const newJoke = await generateJoke();
      setIsNew(true);
      setCurrentJoke(newJoke);
      
      // Reset the "new" flag after animation completes
      setTimeout(() => setIsNew(false), 1000);
    }, 10000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [apiKey]);

  const handleApiKeySave = () => {
    localStorage.setItem("openaiApiKey", apiKey);
    setShowApiKeyInput(false);
    toast.success("API key saved!");
    
    // Generate a new joke immediately
    generateJoke().then(joke => {
      setCurrentJoke(joke);
    });
  };

  return (
    <div className="w-full bg-gradient-to-r from-comedy-700/10 to-comedy-500/10 py-3 relative overflow-hidden">
      {showApiKeyInput ? (
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2">
          <label htmlFor="apiKey" className="text-sm font-medium">
            Enter your OpenAI API key to generate original jokes:
          </label>
          <input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="px-3 py-1 border rounded text-sm"
            placeholder="OpenAI API key"
          />
          <button
            onClick={handleApiKeySave}
            className="bg-comedy-500 text-white px-3 py-1 rounded text-sm hover:bg-comedy-600"
          >
            Save
          </button>
        </div>
      ) : (
        <div className={`container mx-auto px-4 flex items-center justify-center transition-opacity duration-500 ${isNew ? 'animate-bounce-subtle' : ''}`}>
          <Laugh className="h-5 w-5 text-comedy-500 mr-2 flex-shrink-0" />
          <p className="text-sm md:text-base font-medium text-center">
            <span className="font-bold mr-2">AI Comedy Writer:</span>
            {isLoading ? "Generating joke..." : currentJoke}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIJokeWriter;
