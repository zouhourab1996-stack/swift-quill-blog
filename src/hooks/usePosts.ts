import { useQuery } from '@tanstack/react-query';
import { Post, Category, categories } from '@/data/posts';
import { parseFrontmatter, filenameToSlug, estimateReadingTime, extractCategory, extractTags } from '@/lib/markdown';

// Static list of markdown files in /public/posts
// In a real production app, you'd have a build step or API to get this list
const POST_FILES = [
  'my-ai-agent-made-$10,000-while-i-slept:-the-real-world-passive-income-stories-of-2026.md',
  'the-2026-ai-agent-showdown:-gpt-5-vs.-gemini-vs.-claude---which-one-runs-your-business.md',
  'the-dark-side-of-autonomy:-are-ai-agents-creating-uncontrollable-digital-ecosystems.md',
];

const DEFAULT_AUTHOR = {
  name: 'TechPulse Editorial',
  avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=face',
};

async function fetchMarkdownPost(filename: string): Promise<Post | null> {
  try {
    const response = await fetch(`/posts/${encodeURIComponent(filename)}`);
    if (!response.ok) {
      console.error(`Failed to fetch ${filename}:`, response.status);
      return null;
    }
    
    const markdown = await response.text();
    const { frontmatter, content } = parseFrontmatter(markdown);
    
    const title = frontmatter.title || filename.replace(/\.md$/, '');
    const slug = filenameToSlug(filename);
    const category = extractCategory(content, title);
    
    const post: Post = {
      id: slug,
      slug,
      title,
      excerpt: frontmatter.description || content.slice(0, 160).replace(/[#*`]/g, '').trim() + '...',
      content,
      author: DEFAULT_AUTHOR,
      category,
      categorySlug: category.toLowerCase().replace(/\s+/g, '-'),
      publishedAt: frontmatter.date || new Date().toISOString().split('T')[0],
      readingTime: estimateReadingTime(content),
      featured: POST_FILES.indexOf(filename) === 0, // First post is featured
      coverImage: frontmatter.image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      tags: extractTags(content, title),
    };
    
    return post;
  } catch (error) {
    console.error(`Error fetching ${filename}:`, error);
    return null;
  }
}

async function fetchAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(POST_FILES.map(fetchMarkdownPost));
  return posts.filter((post): post is Post => post !== null);
}

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchAllPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

export function usePost(slug: string | undefined) {
  const { data: posts, isLoading, error } = usePosts();
  
  const post = posts?.find(p => p.slug === slug);
  
  return {
    data: post,
    isLoading,
    error,
  };
}

export function useFeaturedPosts() {
  const { data: posts, isLoading, error } = usePosts();
  
  // Return all posts as featured for now (or first 3)
  const featured = posts?.slice(0, 3) ?? [];
  
  return {
    data: featured,
    isLoading,
    error,
  };
}

export function useLatestPosts(limit?: number) {
  const { data: posts, isLoading, error } = usePosts();
  
  const sorted = posts?.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  const latest = limit ? sorted?.slice(0, limit) : sorted;
  
  return {
    data: latest ?? [],
    isLoading,
    error,
  };
}

export function usePostsByCategory(categorySlug: string | undefined) {
  const { data: posts, isLoading, error } = usePosts();
  
  const filtered = posts?.filter(p => p.categorySlug === categorySlug) ?? [];
  
  return {
    data: filtered,
    isLoading,
    error,
  };
}

export function useCategories(): Category[] {
  return categories;
}
