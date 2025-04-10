
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Search, Menu, X, User, PenSquare, TrendingUp, Shield, FileText } from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "./ui/sheet";
import { Input } from "./ui/input";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col gap-6 py-6">
                <SheetClose asChild>
                  <Link to="/" className="text-2xl font-bold text-primary">RoyaltyWrites</Link>
                </SheetClose>
                <nav className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link to="/" className="flex items-center gap-2 text-lg font-medium">
                      <TrendingUp className="h-5 w-5" />
                      Trending
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/submit" className="flex items-center gap-2 text-lg font-medium">
                      <PenSquare className="h-5 w-5" />
                      Submit Idea
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/copyright-standards" className="flex items-center gap-2 text-lg font-medium">
                      <FileText className="h-5 w-5" />
                      Pro Writing Standards
                    </Link>
                  </SheetClose>
                  {isLoggedIn ? (
                    <SheetClose asChild>
                      <Link to="/dashboard" className="flex items-center gap-2 text-lg font-medium">
                        <User className="h-5 w-5" />
                        Dashboard
                      </Link>
                    </SheetClose>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <SheetClose asChild>
                        <Link to="/login">
                          <Button className="w-full">Login</Button>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/register">
                          <Button variant="outline" className="w-full">Register</Button>
                        </Link>
                      </SheetClose>
                    </div>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="text-2xl font-bold text-primary hidden md:block">RoyaltyWrites</Link>
          <Link to="/" className="text-2xl font-bold text-primary md:hidden">RW</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-sm font-medium hover:text-primary">Trending</Link>
          <Link to="/categories" className="text-sm font-medium hover:text-primary">Categories</Link>
          <Link to="/submit" className="text-sm font-medium hover:text-primary">Submit Idea</Link>
          <Link to="/copyright-standards" className="text-sm font-medium hover:text-primary flex items-center">
            <Shield className="h-4 w-4 mr-1" />
            Pro Standards
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <form className="hidden md:flex items-center relative w-[200px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search sketches..."
              className="w-full pl-8 rounded-full bg-background"
            />
          </form>

          {isLoggedIn ? (
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <Link to="/dashboard">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button variant="ghost" className="hidden md:flex">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="btn-bounce">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
