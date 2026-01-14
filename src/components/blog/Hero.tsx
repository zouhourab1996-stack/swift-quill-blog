import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="relative py-16 md:py-24 lg:py-32 border-b border-border overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" aria-hidden="true" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-sm font-medium text-muted-foreground mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
            </span>
            Insights for engineers
          </div>

          {/* Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Where technology
            <br />
            meets <span className="relative inline-block">
              clarity
              <svg 
                className="absolute -bottom-2 left-0 w-full h-3 text-foreground/20" 
                viewBox="0 0 200 12" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M2 8.5C32 2.5 62 2.5 92 8.5C122 14.5 152 14.5 182 8.5" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Deep dives into AI agents, automation workflows, and global technology shifts. 
            Written by engineers, for engineers.
          </p>

          {/* CTA */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/category/ai-agents"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore AI Agents
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/category/automation-hacks"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 border border-border transition-colors"
            >
              Automation Hacks
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
