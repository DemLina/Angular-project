import { createAction, props } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';

export const addFriend = createAction('[FRIEND] Add Friend', props<{ friend: Friend }>());

export const removeFriend = createAction('[FRIEND] Remove Friend', props<{ friend: Friend }>());
