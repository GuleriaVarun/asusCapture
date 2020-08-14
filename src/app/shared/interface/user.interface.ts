import { StatsInterface } from './stats.interface';

export interface UserInterface {
  userName?: string;
  bio?: string;
  url?: any;
  stats?: StatsInterface;
}
