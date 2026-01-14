import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/blog/Hero";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import { useLatestPosts } from "@/hooks/usePosts";
import PostCard from "@/components/blog/PostCard";
import AdPlaceholder from "@/components/blog/AdPlaceholder";
import { WebsiteJsonLd } from "@/components/seo/JsonLd";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: latestPosts, isLoading } = useLatestPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Structured Data */}
      <WebsiteJsonLd url="https://techpulse.dev" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Posts */}
        <FeaturedPosts />

        {/* Latest Posts with Sidebar */}
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

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content Area */}
              <div className="flex-1">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-card rounded-lg overflow-hidden border border-border">
                        <Skeleton className="aspect-[16/9] w-full" />
                        <div className="p-5 space-y-3">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-6 w-full" />
                          <Skeleton className="h-4 w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                )}

                {/* Banner Ad */}
                <div className="mt-12">
                  <AdPlaceholder position="banner" />
                </div>
              </div>

              {/* Sidebar */}
              <Sidebar />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
