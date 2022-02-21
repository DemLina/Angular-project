import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { addGame, addUser, updateUser } from '../actions/user.action';
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
  on(addUser, (state, { user }) => {
    return {
      ...state,
      user: {
        ...state.user,
        email: user.email,
      } as any,
    };
  }),
  on(updateUser, (state, { user }) => {
    return {
      ...state,
      user: {
        ...state.user,
        email: user.email,
        age: user.age,
        name: user.name,
      } as any,
    };
  }),
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
  }),
  on(addGame, (state, { game }) => {
    return {
      ...state,
      user: {
        ...state.user,
        games: [...state.user.games, game] as any,
      },
    };
  })
);
