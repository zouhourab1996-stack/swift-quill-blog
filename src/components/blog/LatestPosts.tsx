import { getLatestPosts } from "@/data/posts";
import PostCard from "./PostCard";
import AdPlaceholder from "./AdPlaceholder";

const LatestPosts = () => {
  const latestPosts = getLatestPosts();

  return (
    <section 
      className="py-12 md:py-16 bg-secondary/30"
      aria-labelledby="latest-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 
              id="latest-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"
            >
              Latest Articles
            </h2>
            <p className="text-muted-foreground mt-1">
              Fresh perspectives on technology
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <div 
              key={post.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Banner Ad */}
        <div className="mt-12">
          <AdPlaceholder position="banner" />
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
