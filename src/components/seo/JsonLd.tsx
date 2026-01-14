import { Post } from "@/data/posts";

interface ArticleJsonLdProps {
  post: Post;
  url: string;
}

export const ArticleJsonLd = ({ post, url }: ArticleJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "TechPulse",
      logo: {
        "@type": "ImageObject",
        url: "https://techpulse.dev/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface WebsiteJsonLdProps {
  url: string;
}

export const WebsiteJsonLd = ({ url }: WebsiteJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechPulse",
    description: "Insights on AI, Automation & Global Tech",
    url: url,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

interface BreadcrumbJsonLdProps {
  items: { name: string; url: string }[];
}

export const BreadcrumbJsonLd = ({ items }: BreadcrumbJsonLdProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
