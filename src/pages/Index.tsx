
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenSquare, TrendingUp, Star } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-1">
        <div className="relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 comedy-gradient opacity-10"></div>
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-comedy-300 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-comedy-500 rounded-full blur-3xl opacity-10"></div>
          
          {/* Hero content */}
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-comedy-700 to-comedy-500">
                Turn Your Comedy Ideas Into Royalties
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                The ultimate comedy sketch incubator for writers. Submit your ideas, get feedback, and earn when your sketches get picked up.
              </p>
              
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
            </div>
            
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PenSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Create</h3>
                <p className="text-muted-foreground">
                  Submit your original comedy sketch ideas with our easy-to-use format.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Grow</h3>
                <p className="text-muted-foreground">
                  Get feedback from the community and watch your sketches trend.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Earn</h3>
                <p className="text-muted-foreground">
                  Collect royalties when your sketches get picked up by producers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
