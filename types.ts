export interface NavItem {
  label: string;
  href: string;
}

export interface CourseModule {
  week: number;
  title: string;
  description: string;
  topics: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  icon: 'bot' | 'automation' | 'app' | 'doc';
}

export interface Feature {
  title: string;
  description: string;
  icon: 'brain' | 'code' | 'rocket' | 'users' | 'zap';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
