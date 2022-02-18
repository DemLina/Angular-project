import { createReducer, on } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';
import { addFriend, removeFriend } from '../actions/friend.action';

const initialState = {
  friends: [],
};

export interface StateFriend {
  friends: Friend[];
}

export const friendReducer = createReducer(
  initialState,
  on(addFriend, (state, { friend }) => {
    return {
      ...state,
      friends: [...state.friends, friend] as any,
    };
  }),
  on(removeFriend, (state, {friend}) => {
    let updateFriend = state.friends.filter((elem: Friend) => {elem.user !== friend.user})
    return {
      friends: [updateFriend] as any,
    };
  })
);
