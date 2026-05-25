export interface StatItem {
  value: string;
  label: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  tags: string[];
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  hours: string;
}

export type Locale = 'az' | 'en' | 'ru';
