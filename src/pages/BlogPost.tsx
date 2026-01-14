import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getLatestPosts } from "@/data/posts";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/blog/PostCard";
import AdPlaceholder from "@/components/blog/AdPlaceholder";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = getLatestPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | TechPulse`;
      
      // Update meta tags
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }
    }
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
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

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const baseUrl = "https://techpulse.dev";
  const postUrl = `${baseUrl}/post/${post.slug}`;

  return (
    <div className="min-h-screen bg-background">
      {/* SEO */}
      <ArticleJsonLd post={post} url={postUrl} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: post.category, url: `${baseUrl}/category/${post.category.toLowerCase().replace(/\s+/g, "-")}` },
          { name: post.title, url: postUrl },
        ]}
      />

      <Header />

      <main>
        {/* Article Header */}
        <header className="border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                  <li>
                    <Link to="/" className="hover:text-foreground transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link 
                      to={`/category/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {post.category}
                    </Link>
                  </li>
                </ol>
              </nav>

              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span className="font-medium uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {post.readingTime} min read
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author & Share */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </div>
                <button
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Share article"
                >
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="w-full">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto -mt-px">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-[2/1] object-cover rounded-b-xl"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Ad before content */}
              <AdPlaceholder position="in-article" className="mb-8" />

              {/* Content */}
              <div 
                className="prose-blog"
                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
              />

              {/* Ad after content */}
              <AdPlaceholder position="in-article" className="mt-12" />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 md:py-16 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
              Continue Reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Simple markdown-like content formatter
function formatContent(content: string): string {
  return content
    .split("\n")
    .map((line) => {
      // Headers
      if (line.startsWith("### ")) {
        return `<h3>${line.slice(4)}</h3>`;
      }
      if (line.startsWith("## ")) {
        return `<h2>${line.slice(3)}</h2>`;
      }
      
      // Code blocks
      if (line.startsWith("```")) {
        return line === "```" ? "</pre>" : `<pre><code>`;
      }
      
      // Blockquotes
      if (line.startsWith("> ")) {
        return `<blockquote>${line.slice(2)}</blockquote>`;
      }
      
      // Lists
      if (line.startsWith("- ")) {
        return `<li>${formatInline(line.slice(2))}</li>`;
      }
      if (/^\d+\.\s/.test(line)) {
        return `<li>${formatInline(line.replace(/^\d+\.\s/, ""))}</li>`;
      }
      
      // Empty lines
      if (line.trim() === "") {
        return "";
      }
      
      // Regular paragraphs
      return `<p>${formatInline(line)}</p>`;
    })
    .join("\n");
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}

export default BlogPost;
