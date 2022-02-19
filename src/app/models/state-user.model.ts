import { User } from './user.model';

export interface AppState {
  readonly users: { user: User };
}
