
import { PenSquare, TrendingUp, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  description: string;
  showCTA?: boolean;
}

const Header = ({ title, description, showCTA = true }: HeaderProps) => {
  return (
    <div className="relative py-8 md:py-12 mb-8 overflow-hidden">
      <div className="absolute inset-0 comedy-gradient opacity-10 -z-10"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-comedy-300 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-comedy-500 rounded-full blur-3xl opacity-10 -z-10"></div>
      
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-comedy-700 to-comedy-500">
          {title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {description}
        </p>
        
        {showCTA && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-bounce w-full sm:w-auto comedy-gradient" size="lg" asChild>
              <Link to="/submit">
                <PenSquare className="mr-2 h-5 w-5" />
                Submit a Sketch
              </Link>
            </Button>
            <div className="flex gap-4 w-full sm:w-auto">
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/trending">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Trending
                </Link>
              </Button>
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/classics">
                  <Star className="mr-2 h-5 w-5" />
                  Classics
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
