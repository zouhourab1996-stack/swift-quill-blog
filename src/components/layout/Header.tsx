import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground hover:opacity-80 transition-opacity"
          aria-label="TechPulse Home"
        >
          <span className="bg-foreground text-background px-2 py-1 rounded text-sm font-extrabold">TP</span>
          <span className="hidden sm:inline">TechPulse</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/category/ai-agents" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            AI Agents
          </Link>
          <Link 
            to="/category/automation-hacks" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Automation
          </Link>
          <Link 
            to="/category/global-tech-shifts" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Global Tech
          </Link>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border animate-slide-up">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-base font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/category/ai-agents" 
              className="block text-base font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Agents
            </Link>
            <Link 
              to="/category/automation-hacks" 
              className="block text-base font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Automation Hacks
            </Link>
            <Link 
              to="/category/global-tech-shifts" 
              className="block text-base font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Global Tech Shifts
            </Link>
            <Link 
              to="/category/developer-tools" 
              className="block text-base font-medium text-muted-foreground hover:text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Developer Tools
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
