import { useParams, Link } from "react-router-dom";
import { categories, getPostsByCategory } from "@/data/posts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Sidebar from "@/components/layout/Sidebar";
import PostCard from "@/components/blog/PostCard";
import AdPlaceholder from "@/components/blog/AdPlaceholder";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const posts = slug ? getPostsByCategory(slug) : [];

  useEffect(() => {
    if (category) {
      document.title = `${category.name} | TechPulse`;
    }
    window.scrollTo(0, 0);
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">
            This category doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Category Header */}
        <section className="border-b border-border bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-foreground">{category.name}</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {category.description}
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              {posts.length} article{posts.length !== 1 ? "s" : ""}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="flex-1">
                {posts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {posts.map((post, index) => (
                      <div
                        key={post.id}
                        className="animate-slide-up"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <PostCard post={post} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground">
                      No articles in this category yet.
                    </p>
                  </div>
                )}

                {/* Banner Ad */}
                <AdPlaceholder position="banner" className="mt-12" />
              </div>

              {/* Sidebar */}
              <Sidebar />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
