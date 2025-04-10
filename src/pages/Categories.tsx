
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryFilter from "@/components/CategoryFilter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ThumbsUp, MessageSquare, Tag } from "lucide-react";

// Mock data
const categoryDescriptions = {
  political: "Commentary on current political events, figures, and systems.",
  parody: "Humorous imitations of TV shows, movies, advertisements, or public figures.",
  absurdist: "Surreal or illogical comedy that defies conventional expectations.",
  musical: "Sketches featuring songs, dances, or musical performances.",
  character: "Comedy focused on unique, well-developed character personalities.",
  topical: "Sketches based on current trends, news stories, or cultural moments.",
  slapstick: "Physical comedy featuring exaggerated actions and pratfalls.",
  satire: "Witty criticism of society, institutions, or human folly."
};

// Mock recent sketches by category
const recentSketchesByCategory = {
  political: [
    { id: "p1", title: "Presidential Debate Disaster", upvotes: 245 },
    { id: "p2", title: "Congress Fitness Challenge", upvotes: 189 }
  ],
  parody: [
    { id: "pa1", title: "True Crime Podcast Gone Wrong", upvotes: 312 },
    { id: "pa2", title: "Reality Dating Show Bloopers", upvotes: 267 }
  ],
  absurdist: [
    { id: "a1", title: "The Man Who Could Only Speak in Questions", upvotes: 203 },
    { id: "a2", title: "Sentient Vending Machine Therapy", upvotes: 188 }
  ],
  musical: [
    { id: "m1", title: "The Uncomfortable Dinner Song", upvotes: 278 },
    { id: "m2", title: "Corporate Meeting: The Musical", upvotes: 246 }
  ],
  character: [
    { id: "c1", title: "Karen from HR's Performance Review", upvotes: 309 },
    { id: "c2", title: "Overly Enthusiastic Tour Guide", upvotes: 254 }
  ],
  topical: [
    { id: "t1", title: "Social Media Detox Support Group", upvotes: 287 },
    { id: "t2", title: "Cryptocurrency Thanksgiving Dinner", upvotes: 219 }
  ],
  slapstick: [
    { id: "s1", title: "The World's Worst Moving Company", upvotes: 193 },
    { id: "s2", title: "Office Chair Race Championship", upvotes: 170 }
  ],
  satire: [
    { id: "sa1", title: "Corporate Wellness Initiative", upvotes: 298 },
    { id: "sa2", title: "Influencer Emergency Hotline", upvotes: 251 }
  ],
};

// Get all unique categories
const categories = Object.keys(categoryDescriptions);

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (newSelectedCategories: string[]) => {
    setSelectedCategories(newSelectedCategories);
  };

  // Filter categories based on selection, or show all if none selected
  const categoriesToShow = selectedCategories.length > 0 
    ? categories.filter(cat => selectedCategories.includes(cat))
    : categories;

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <Header 
          title="Comedy Categories"
          description="Explore sketch comedy ideas across different styles and themes. Find inspiration or submit your own ideas in any category."
          showCTA={true}
        />
        
        <div className="container mx-auto px-4 mb-16">
          <div className="mb-8">
            <CategoryFilter onChange={handleCategoryChange} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesToShow.map((category) => (
              <Card key={category} className="transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 capitalize">
                    <Tag className="h-5 w-5 text-primary" />
                    {category}
                  </CardTitle>
                  <CardDescription>{categoryDescriptions[category as keyof typeof categoryDescriptions]}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-sm font-semibold mb-2">Recent Sketches:</h4>
                  <ul className="space-y-2">
                    {recentSketchesByCategory[category as keyof typeof recentSketchesByCategory].map(sketch => (
                      <li key={sketch.id} className="flex justify-between items-center text-sm">
                        <span className="truncate flex-1">{sketch.title}</span>
                        <Badge variant="outline" className="flex items-center gap-1 ml-2">
                          <ThumbsUp className="h-3 w-3" />
                          {sketch.upvotes}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/category/${category}`}>View All {category.charAt(0).toUpperCase() + category.slice(1)} Sketches</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
