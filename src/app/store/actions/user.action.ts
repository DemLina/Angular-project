import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { Friend } from '../../models/friend.model';

export const addUser = createAction('[USER] Add User', props<{ user: User }>());

export const updateUser = createAction('[USER] Update User', props<{ user: User }>());

export const addFriend = createAction('[USER] Add Friend', props<{ friend: Friend }>());

export const removeFriend = createAction('[USER] Remove Friend', props<{ friend: Friend }>());
