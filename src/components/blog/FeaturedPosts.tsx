import { getFeaturedPosts } from "@/data/posts";
import PostCard from "./PostCard";

const FeaturedPosts = () => {
  const featuredPosts = getFeaturedPosts();

  return (
    <section 
      className="py-12 md:py-16"
      aria-labelledby="featured-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 
              id="featured-heading"
              className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"
            >
              Featured
            </h2>
            <p className="text-muted-foreground mt-1">
              Handpicked articles worth your time
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PostCard post={post} variant="featured" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
