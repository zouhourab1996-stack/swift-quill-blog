export interface PostFrontmatter {
  title: string;
  date: string;
  image: string;
  description: string;
}

export interface ParsedPost {
  frontmatter: PostFrontmatter;
  content: string;
  slug: string;
}

/**
 * Parse YAML-like frontmatter from markdown content
 */
export function parseFrontmatter(markdown: string): { frontmatter: Record<string, string>; content: string } {
  // Remove potential code block wrapper (```yaml at start)
  let cleanedMarkdown = markdown.trim();
  if (cleanedMarkdown.startsWith('```yaml')) {
    cleanedMarkdown = cleanedMarkdown.replace(/^```yaml\s*\n?/, '');
  }
  
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;
  const match = cleanedMarkdown.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, content: cleanedMarkdown };
  }
  
  const frontmatterStr = match[1];
  const content = match[2];
  
  const frontmatter: Record<string, string> = {};
  const lines = frontmatterStr.split('\n');
  
  for (const line of lines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      // Remove quotes from value
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      frontmatter[key] = value;
    }
  }
  
  return { frontmatter, content };
}

/**
 * Generate slug from filename
 */
export function filenameToSlug(filename: string): string {
  return filename
    .replace(/\.md$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Estimate reading time from content
 */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Extract category from content or default
 */
export function extractCategory(content: string, title: string): string {
  const lowerTitle = title.toLowerCase();
  const lowerContent = content.toLowerCase();
  
  if (lowerTitle.includes('agent') || lowerContent.includes('ai agent')) {
    return 'AI Agents';
  }
  if (lowerTitle.includes('automation') || lowerContent.includes('automation')) {
    return 'Automation Hacks';
  }
  if (lowerTitle.includes('global') || lowerTitle.includes('showdown') || lowerContent.includes('global')) {
    return 'Global Tech Shifts';
  }
  
  return 'AI Agents'; // default
}

/**
 * Extract tags from content
 */
export function extractTags(content: string, title: string): string[] {
  const tags: string[] = [];
  const combined = (title + ' ' + content).toLowerCase();
  
  const tagKeywords = [
    ['ai', 'Artificial Intelligence'],
    ['agent', 'AI Agents'],
    ['automation', 'Automation'],
    ['gpt', 'GPT'],
    ['gemini', 'Gemini'],
    ['claude', 'Claude'],
    ['passive income', 'Passive Income'],
    ['trading', 'Trading'],
    ['e-commerce', 'E-Commerce'],
    ['dropshipping', 'Dropshipping'],
    ['autonomy', 'Autonomy'],
    ['ecosystem', 'Ecosystems'],
  ] as const;
  
  for (const [keyword, tag] of tagKeywords) {
    if (combined.includes(keyword) && !tags.includes(tag)) {
      tags.push(tag);
    }
  }
  
  return tags.slice(0, 5); // Limit to 5 tags
}
