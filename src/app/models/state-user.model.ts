import { User } from "./user.model";

export interface AppState {
  readonly users: {users: User[]} ;
}

