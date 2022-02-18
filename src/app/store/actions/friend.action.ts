import { createAction, props } from '@ngrx/store';
import { Friend } from 'src/app/models/friend.model';

export const addFriend = createAction('[FRIEND] Update Friend', props<{ friend: Friend }>());

export const removeFriend = createAction('[FRIEND] Update Friend', props<{ friend: Friend }>());
