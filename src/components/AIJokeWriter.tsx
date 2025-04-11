
import React, { useState, useEffect } from "react";
import { Laugh } from "lucide-react";

const jokes = [
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "I'm writing a book about anti-gravity. It's impossible to put down!",
  "I used to be a baker, but I couldn't make enough dough.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "I'm on a seafood diet. Every time I see food, I eat it.",
  "What do you call a fake noodle? An impasta!",
  "Why did the bicycle fall over? Because it was two-tired!",
  "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
  "What do you call a parade of rabbits hopping backwards? A receding hare-line.",
  "Did you hear about the actor who fell through the floorboards? He was just going through a stage.",
  "Time flies like an arrow. Fruit flies like a banana.",
  "I wouldn't buy anything with velcro. It's a total rip-off.",
  "The problem with kleptomaniacs is that they always take things literally.",
  "I used to be a stand-up comedian, but I kept getting stage fright. Now I'm a sit-down comedian.",
];

const AIJokeWriter = () => {
  const [currentJoke, setCurrentJoke] = useState<string>("");
  const [isNew, setIsNew] = useState<boolean>(false);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
  };

  useEffect(() => {
    // Set initial joke
    setCurrentJoke(getRandomJoke());

    // Set up interval to change joke every 10 seconds
    const intervalId = setInterval(() => {
      setIsNew(true);
      setCurrentJoke(getRandomJoke());
      
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
          {currentJoke}
        </p>
      </div>
    </div>
  );
};

export default AIJokeWriter;
