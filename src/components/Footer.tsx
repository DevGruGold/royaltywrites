
import { Link } from "react-router-dom";
import { Lightbulb, Heart, Shield, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-primary">RoyaltyWrites</Link>
            <p className="mt-4 text-muted-foreground">
              The ultimate comedy sketch incubator for writers and comedy fans.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/trending" className="hover:text-primary transition-colors">Trending</Link></li>
              <li><Link to="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
              <li><Link to="/submit" className="hover:text-primary transition-colors">Submit Idea</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/guides" className="hover:text-primary transition-colors">Comedy Writing Guides</Link></li>
              <li><Link to="/ai-assistant" className="hover:text-primary transition-colors">AI Assistant</Link></li>
              <li><Link to="/writers-room" className="hover:text-primary transition-colors">Writer's Room</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/copyright" className="hover:text-primary transition-colors">Copyright Protection</Link></li>
              <li><Link to="/royalties" className="hover:text-primary transition-colors">Royalty Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} RoyaltyWrites. All rights reserved.
            </p>
            
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/how-it-works" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Lightbulb className="h-4 w-4 mr-1" />
                How It Works
              </Link>
              <Link to="/support" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-4 w-4 mr-1" />
                Support
              </Link>
              <Link to="/legal" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <Shield className="h-4 w-4 mr-1" />
                Legal
              </Link>
              <Link to="/learn" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
                <GraduationCap className="h-4 w-4 mr-1" />
                Learn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
