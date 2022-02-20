import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { addUser, updateUser } from '../actions/user.action';
import { addFriend, removeFriend } from '../actions/user.action';
import { Friend } from '../../models/friend.model';

const initialState = {
  user: {
    email: '',
    name: '',
    age: 0,
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
    console.log(state.user);
    let addEmail = { ...state.user };
    addEmail.email = user.email;
    return {
      ...state,
      user: { ...addEmail } as any,
    };
  }),
  on(updateUser, (state, { user }) => {
    console.log(state.user);
    let newObj = { ...state.user };
    newObj.email = user.email;
    newObj.age = user.age;
    newObj.name = user.name;
    return {
      ...state,
      user: { ...newObj } as any,
    };
  }),
  on(addFriend, (state, { friend }) => {
    console.log(state.user);
    return {
      ...state,
      user: {
        ...state.user,
        friends: [...state.user.friends, friend] as any,
      },
    };
  }),
  on(removeFriend, (state, { friend }) => {
    console.log(state.user);
    return {
      ...state,
      user: {
        ...state.user,
        friends: state.user.friends.filter((user: Friend) => user.name !== friend.name),
      },
    };
  })
);
