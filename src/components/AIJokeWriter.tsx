
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

// Gemini API key
const GEMINI_API_KEY = "AIzaSyBHR7BsHi_oFNOrJxgyNwK1JGumBcpuLOc";

const AIJokeWriter = () => {
  const [currentJoke, setCurrentJoke] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Function to generate a joke using the Gemini API
  const generateJoke = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + GEMINI_API_KEY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: "Generate a single original, clean, and clever stand-up comedy one-liner or short joke. Be creative and surprising. Only return the joke text - no explanations, no quotation marks, no 'here's a joke' prefixes."
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.9,
            maxOutputTokens: 100,
          }
        })
      });

      const data = await response.json();
      
      // Check if the response contains a valid joke
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const joke = data.candidates[0].content.parts[0].text.trim();
        return joke;
      }
      
      // Fallback to random joke if API response is unexpected
      return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
    } catch (error) {
      // Silent fallback to random joke
      return fallbackJokes[Math.floor(Math.random() * fallbackJokes.length)];
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-comedy-700/10 to-comedy-500/10 py-3 relative overflow-hidden">
      <div className={`container mx-auto px-4 flex items-center justify-center transition-opacity duration-500 ${isNew ? 'animate-bounce-subtle' : ''}`}>
        <Laugh className="h-5 w-5 text-comedy-500 mr-2 flex-shrink-0" />
        <p className="text-sm md:text-base font-medium text-center">
          <span className="font-bold mr-2">AI Comedy Writer:</span>
          {isLoading ? "Generating joke..." : currentJoke}
        </p>
      </div>
    </div>
  );
};

export default AIJokeWriter;
