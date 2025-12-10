import { Film, Gamepad2, Newspaper, Home, Cpu } from 'lucide-react';
import { NavItem, SectionType } from './types';

export const APP_NAME = "FLYDAO";
export const DOMAIN = "flydao.top";

export const NAV_ITEMS: NavItem[] = [
  { id: SectionType.HOME, icon: Home },
  { id: SectionType.MOVIE, icon: Film },
  { id: SectionType.GAME, icon: Gamepad2 },
  { id: SectionType.NEWS, icon: Newspaper },
  { id: SectionType.APP, icon: Cpu },
];
