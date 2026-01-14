import { useFeaturedPosts } from "@/hooks/usePosts";
import PostCard from "./PostCard";
import { Skeleton } from "@/components/ui/skeleton";

const FeaturedPosts = () => {
  const { data: featuredPosts, isLoading } = useFeaturedPosts();

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

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden border border-border">
                <Skeleton className="aspect-[16/10] w-full" />
                <div className="p-6 space-y-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <div className="flex items-center gap-3 pt-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default FeaturedPosts;