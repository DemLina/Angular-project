import { Friend } from './friend.model';
import { Game } from './game.model';

export interface User {
  email: string;
  age: number | null;
  name: string;
  friends: Friend[];
  games: Game[];
}
