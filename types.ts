import { LucideIcon } from 'lucide-react';

export enum SectionType {
  HOME = 'home',
  MOVIE = 'movie',
  GAME = 'game',
  NEWS = 'news',
  LITERATURE = 'literature',
  PHOTOGRAPHY = 'photography',
  APP = 'app',
  WHITEPAPER = 'whitepaper',
}

export type Language = 'en' | 'zh';
export type Theme = 'black' | 'white' | 'pink' | 'yellow';

export interface NavItem {
  id: SectionType;
  icon: LucideIcon;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  link: string;
  badge: string;
  onClick?: () => void;
}