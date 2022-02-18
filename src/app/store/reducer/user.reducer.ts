import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { addUser, updateUser } from '../actions/user.action';

const initialState = {
  users: [],
};
export interface State {
  users: User[];
}
export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => {
    console.log(state, user);
    return {
      ...state,
      users: [...state.users, user] as any,
    };
  }),
  on(updateUser, (state, { user }) => {
    console.log(state, user);
    let newState = state.users.filter((item: User) => item.email !== user.email);
    return {
      users: [newState, user] as any,
    };
  })
);
