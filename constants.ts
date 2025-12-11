import { CourseModule, Feature, NavItem, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Course', href: '#course' },
  { label: 'Projects', href: '#projects' },
  { label: 'Demo', href: '#demo' },
  { label: 'Contact', href: '#contact' },
];

export const COURSE_MODULES: CourseModule[] = [
  {
    week: 1,
    title: 'AI Fundamentals',
    description: 'Intro to AI from scratch. Understanding modern AI tools and how AI increases productivity.',
    topics: ['History of AI', 'LLMs Explained', 'Prompt Engineering Basics', 'Ethics in AI'],
  },
  {
    week: 2,
    title: 'Learning AI Tools',
    description: 'Hands-on use of multiple AI tools for task automation and saving time with advanced prompts.',
    topics: ['ChatGPT & Gemini Mastery', 'Midjourney for Design', 'Automation Tools', 'Voice AI'],
  },
  {
    week: 3,
    title: 'Real-World Problem Solving',
    description: 'Identify opportunities and learn to create AI-based solutions for the Nepali context.',
    topics: ['Business Case Studies', 'Local Industry Needs', 'Workflow Optimization', 'Data Analysis'],
  },
  {
    week: 4,
    title: 'Build Your Own Project',
    description: 'Students build a complete project: Idea → Tools → Execution → Demo.',
    topics: ['Project Planning', 'No-Code Builders', 'Integration', 'Final Presentation'],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Smart Customer Support',
    category: 'Business Chatbots',
    description: 'An AI agent handling inquiries for local Nepali businesses 24/7.',
    icon: 'bot',
  },
  {
    title: 'Document Summarizer',
    category: 'Automation',
    description: 'Automated extraction of key data from legal and government documents.',
    icon: 'doc',
  },
  {
    title: 'Agri-Tech Assistant',
    category: 'Local App',
    description: 'Helping farmers identify crop diseases using computer vision concepts.',
    icon: 'app',
  },
  {
    title: 'Student Study Companion',
    category: 'Productivity',
    description: 'Personalized study schedules and quiz generation for SEE students.',
    icon: 'automation',
  },
];

export const FEATURES: Feature[] = [
  {
    title: 'Real AI Experts',
    description: 'Learn from industry professionals who build AI systems daily.',
    icon: 'brain',
  },
  {
    title: 'No Tech Background',
    description: 'Designed for everyone. You don’t need to be a coder to start.',
    icon: 'users',
  },
  {
    title: '100% Practical',
    description: 'Hands-on training. Less theory, more doing.',
    icon: 'zap',
  },
  {
    title: 'Modern Tools',
    description: 'We teach the latest tools (Gemini 2.5, GPT-4, Claude) from day one.',
    icon: 'rocket',
  },
  {
    title: 'Build Real Projects',
    description: 'Leave the course with a working project in your portfolio.',
    icon: 'code',
  },
];
