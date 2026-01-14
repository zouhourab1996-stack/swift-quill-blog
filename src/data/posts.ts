export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category: string;
  categorySlug: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  coverImage: string;
  tags: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    name: "AI Agents",
    slug: "ai-agents",
    description: "Autonomous AI systems transforming how we work and live",
    icon: "Bot",
  },
  {
    name: "Automation Hacks",
    slug: "automation-hacks",
    description: "Smart automation strategies for maximum efficiency",
    icon: "Zap",
  },
  {
    name: "Global Tech Shifts",
    slug: "global-tech-shifts",
    description: "Major technological movements reshaping our world",
    icon: "Globe",
  },
];

// Legacy functions for backwards compatibility - use usePosts hooks instead
export const getFeaturedPosts = (): Post[] => [];
export const getLatestPosts = (limit?: number): Post[] => [];
export const getPostBySlug = (slug: string): Post | undefined => undefined;
export const getPostsByCategory = (categorySlug: string): Post[] => [];
