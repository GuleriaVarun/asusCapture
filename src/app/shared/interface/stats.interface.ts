import { UserInterface } from './user.interface';

export interface StatsInterface {
  postCount?: number;
  totalLikes?: number;
  followersCount?: number;
  followersList?: UserInterface[];
}
