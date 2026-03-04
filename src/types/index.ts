import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Credential {
  id: string;
  title: string;
  institution: string;
  year?: string;
  category: 'academic' | 'certification' | 'value';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface Client {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  category: string;
}
