import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { addUser, updateUser } from '../actions/user.action';
import { addFriend, removeFriend } from '../actions/user.action';
import { Friend } from '../../models/friend.model';

const initialState = {
  user: {
    email: '',
    name: '',
    age: null,
    friends: [],
    games: [],
  },
};
export interface State {
  user: User;
}
export const userReducer = createReducer(
  initialState,
  // on(addUser, (state, { user }) => {
  //   console.log(state, user);
  //   return {
  //     ...state,
  //     users: [...state.users, user] as any,
  //   };
  // }),
  // on(updateUser, (state, { user }) => {
  //   console.log(state, user);
  //   let newState = state.users.filter((item: User) => item.email !== user.email);
  //   return {
  //     users: [newState, user] as any,
  //   };
  // }),
  on(addFriend, (state, { friend }) => {
    return {
      ...state,
      user: {
        ...state.user,
        friends: [...state.user.friends, friend] as any,
      },
    };
  }),
  on(removeFriend, (state, { friend }) => {
    return {
      ...state,
      user: {
        ...state.user,
        friends: state.user.friends.filter((user: Friend) => user.name !== friend.name),
      },
    };
  })
);
