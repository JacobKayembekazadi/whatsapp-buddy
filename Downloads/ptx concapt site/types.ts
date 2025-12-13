export type PageType = 
  | 'home' 
  | 'about-us' 
  | 'management' 
  | 'board' 
  | 'advisors' 
  | 'projects-w2' 
  | 'projects-shining' 
  | 'projects-heenan' 
  | 'projects-royalty' 
  | 'investors' 
  | 'news' 
  | 'news-article-w2-drill' 
  | 'contact' 
  | 'cautionary';

export interface NavItem {
  label: string;
  page?: PageType;
  submenu?: NavItem[];
}

export interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  page?: PageType;
  summary?: string;
}
