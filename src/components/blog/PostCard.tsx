import { Link } from "react-router-dom";
import { Post } from "@/data/posts";
import { Clock, ArrowRight } from "lucide-react";

interface PostCardProps {
  post: Post;
  variant?: "default" | "featured" | "compact";
}

const PostCard = ({ post, variant = "default" }: PostCardProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <article className="group relative bg-card rounded-xl overflow-hidden border border-border hover-lift">
        <Link to={`/post/${post.slug}`} className="block">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {post.category}
              </span>
              <span className="text-muted-foreground/50">·</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" aria-hidden="true" />
                {post.readingTime} min read
              </span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{formattedDate}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" aria-hidden="true" />
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className="group flex gap-4 py-4 border-b border-border last:border-0">
        <Link to={`/post/${post.slug}`} className="shrink-0">
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link to={`/post/${post.slug}`}>
            <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-foreground/80 transition-colors">
              {post.title}
            </h4>
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{formattedDate}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readingTime} min
            </span>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className="group bg-card rounded-lg overflow-hidden border border-border hover-lift">
      <Link to={`/post/${post.slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {post.category}
            </span>
            <span className="text-muted-foreground/50">·</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readingTime} min
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-foreground/80 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover"
              loading="lazy"
            />
            <span className="text-sm text-muted-foreground">{post.author.name}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
