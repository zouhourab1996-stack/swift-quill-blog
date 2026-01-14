import { Link, useLocation } from "react-router-dom";
import { categories } from "@/data/posts";
import { cn } from "@/lib/utils";
import { Cpu, Zap, Globe, Wrench } from "lucide-react";
import AdPlaceholder from "@/components/blog/AdPlaceholder";

const categoryIcons: Record<string, React.ElementType> = {
  "ai-agents": Cpu,
  "automation-hacks": Zap,
  "global-tech-shifts": Globe,
  "developer-tools": Wrench,
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-full lg:w-72 shrink-0" aria-label="Sidebar navigation">
      {/* Categories */}
      <div className="bg-card rounded-lg border border-border p-6 mb-6">
        <h2 className="font-semibold text-sm uppercase tracking-wider mb-4 text-muted-foreground">
          Categories
        </h2>
        <nav aria-label="Category navigation">
          <ul className="space-y-1">
            {categories.map((category) => {
              const Icon = categoryIcons[category.slug] || Cpu;
              const isActive = currentPath === `/category/${category.slug}`;
              
              return (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.slug}`}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-primary text-primary-foreground" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="flex-1">{category.name}</span>
                    <span className={cn(
                      "text-xs tabular-nums",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {category.postCount}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Newsletter */}
      <div className="bg-card rounded-lg border border-border p-6 mb-6">
        <h2 className="font-semibold text-foreground mb-2">Stay Updated</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest insights delivered to your inbox weekly.
        </p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="w-full px-3 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Ad Placeholder */}
      <AdPlaceholder position="sidebar" />
    </aside>
  );
};

export default Sidebar;
