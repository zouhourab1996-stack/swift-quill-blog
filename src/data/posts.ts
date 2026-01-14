export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  coverImage: string;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "AI Agents",
    slug: "ai-agents",
    description: "Exploring autonomous AI systems and their applications",
    postCount: 12
  },
  {
    id: "2",
    name: "Automation Hacks",
    slug: "automation-hacks",
    description: "Productivity tips and workflow automation",
    postCount: 8
  },
  {
    id: "3",
    name: "Global Tech Shifts",
    slug: "global-tech-shifts",
    description: "Analyzing worldwide technology trends",
    postCount: 15
  },
  {
    id: "4",
    name: "Developer Tools",
    slug: "developer-tools",
    description: "Reviews and guides for modern dev tools",
    postCount: 10
  }
];

export const posts: Post[] = [
  {
    id: "1",
    slug: "future-of-autonomous-ai-agents",
    title: "The Future of Autonomous AI Agents in Enterprise",
    excerpt: "How AI agents are reshaping business operations and what it means for the next decade of innovation.",
    content: `
## The Rise of Autonomous Systems

Autonomous AI agents represent a paradigm shift in how we approach complex business problems. Unlike traditional automation, these systems can reason, adapt, and make decisions independently.

\`\`\`python
class AutonomousAgent:
    def __init__(self, goal: str):
        self.goal = goal
        self.memory = []
    
    def plan(self):
        # Generate action steps
        return self.decompose_goal()
\`\`\`

### Key Capabilities

1. **Self-directed learning** - Agents continuously improve through interaction
2. **Multi-step reasoning** - Complex problems broken into manageable tasks
3. **Tool integration** - Seamless connection with external APIs and services

## Implementation Strategies

When deploying AI agents at scale, consider these architectural patterns:

- Event-driven architectures for real-time responsiveness
- Microservices for independent scaling
- Robust monitoring and observability

> "The best AI agents are invisible—they augment human capabilities without adding cognitive load." — Industry Expert

### Performance Considerations

Latency and reliability are critical in production environments. Consider implementing:

\`\`\`javascript
const agentConfig = {
  maxRetries: 3,
  timeoutMs: 5000,
  fallbackBehavior: 'graceful-degradation'
};
\`\`\`

The future belongs to organizations that can effectively orchestrate these autonomous systems while maintaining human oversight and ethical guardrails.
    `,
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    category: "AI Agents",
    publishedAt: "2024-01-10",
    readingTime: 8,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["AI", "Enterprise", "Automation"]
  },
  {
    id: "2",
    slug: "automation-workflows-2024",
    title: "Building Zero-Touch Automation Workflows",
    excerpt: "A comprehensive guide to creating self-sustaining automation pipelines that require minimal human intervention.",
    content: `
## Introduction to Zero-Touch Automation

Zero-touch automation represents the pinnacle of operational efficiency. These systems handle everything from deployment to monitoring without manual intervention.

### Core Principles

- **Idempotency** - Operations can be repeated safely
- **Self-healing** - Automatic recovery from failures
- **Observability** - Complete visibility into system state

\`\`\`yaml
automation:
  trigger: on_push
  steps:
    - name: Build
      run: npm run build
    - name: Test
      run: npm test
    - name: Deploy
      run: ./deploy.sh
\`\`\`

## Best Practices

Implementing robust automation requires careful planning and attention to edge cases.
    `,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    category: "Automation Hacks",
    publishedAt: "2024-01-08",
    readingTime: 6,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
    tags: ["Automation", "DevOps", "CI/CD"]
  },
  {
    id: "3",
    slug: "semiconductor-supply-chain-reshoring",
    title: "The Great Semiconductor Reshoring Movement",
    excerpt: "How geopolitics is fundamentally reshaping the global chip manufacturing landscape.",
    content: `
## A New Era for Chip Manufacturing

The semiconductor industry is undergoing its most significant transformation in decades. Nations worldwide are racing to secure domestic chip production capabilities.

### Key Developments

1. **CHIPS Act investments** - Billions flowing into domestic fabs
2. **Supply chain diversification** - Reducing single-point dependencies
3. **Talent development** - Building next-gen engineering workforce

The implications extend far beyond technology into national security and economic competitiveness.
    `,
    author: {
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    category: "Global Tech Shifts",
    publishedAt: "2024-01-06",
    readingTime: 10,
    featured: true,
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    tags: ["Semiconductors", "Geopolitics", "Manufacturing"]
  },
  {
    id: "4",
    slug: "modern-developer-tooling-stack",
    title: "The Modern Developer Tooling Stack",
    excerpt: "Essential tools and frameworks that define today's high-performance development workflows.",
    content: `
## Building the Ultimate Dev Environment

Your tooling choices directly impact productivity and code quality. Here's what the best teams are using in 2024.

### Code Editors & IDEs

Modern development demands intelligent assistance:

\`\`\`json
{
  "editor": "VS Code",
  "extensions": [
    "GitHub Copilot",
    "ESLint",
    "Prettier"
  ]
}
\`\`\`

The right tools amplify your capabilities exponentially.
    `,
    author: {
      name: "Emily Wang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    category: "Developer Tools",
    publishedAt: "2024-01-04",
    readingTime: 5,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["Tools", "Productivity", "Development"]
  },
  {
    id: "5",
    slug: "prompt-engineering-techniques",
    title: "Advanced Prompt Engineering Techniques",
    excerpt: "Master the art of communicating with large language models for optimal results.",
    content: `
## The Art of Prompt Engineering

Effective prompting is part science, part art. Understanding model behavior is key to unlocking their full potential.

### Fundamental Techniques

- Chain-of-thought prompting
- Few-shot learning
- Role-based instructions

These patterns form the foundation of effective AI interaction.
    `,
    author: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    category: "AI Agents",
    publishedAt: "2024-01-02",
    readingTime: 7,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    tags: ["AI", "LLMs", "Prompts"]
  },
  {
    id: "6",
    slug: "no-code-automation-enterprise",
    title: "No-Code Automation at Enterprise Scale",
    excerpt: "How visual automation platforms are democratizing workflow optimization across organizations.",
    content: `
## The No-Code Revolution

Enterprise automation is no longer the exclusive domain of developers. No-code platforms are empowering business users to build sophisticated workflows.

### Platform Comparison

Each platform offers unique strengths for different use cases. Selection should align with organizational needs and existing infrastructure.
    `,
    author: {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    category: "Automation Hacks",
    publishedAt: "2023-12-28",
    readingTime: 6,
    featured: false,
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["No-Code", "Automation", "Enterprise"]
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured);
};

export const getPostsByCategory = (categorySlug: string): Post[] => {
  const category = categories.find(c => c.slug === categorySlug);
  if (!category) return [];
  return posts.filter(post => post.category === category.name);
};

export const getLatestPosts = (limit?: number): Post[] => {
  const sorted = [...posts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};
