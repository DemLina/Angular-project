import { createReducer, on } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';
import { addFriend } from '../actions/friend.action';

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
  })
);
