import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { addUser } from '../actions/user.action';

const initialState = {
  users: []
}
export interface State {
    users: User[]
}
export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => {
    console.log(state, user);
    return    {
      ...state,
      users: [...state.users, user] as any
    }
  })
);
