export type PageId = 'home' | 'about' | 'services' | 'projects' | 'team' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  iconName: string;
  image: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Cold Chain' | 'Freight';
  subtitle: string;
  description: string;
  route: string;
  fleetUsed: string;
  volume: string;
  status: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  experience: string;
  responsibilities: string[];
  avatar: string;
  email?: string;
  skills?: string[];
  education?: string;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Cold Chain' | 'Pricing' | 'Fleet' | 'Operations';
  question: string;
  answer: string;
}
