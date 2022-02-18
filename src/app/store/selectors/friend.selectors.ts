import { createSelector } from '@ngrx/store';
import { AppStateFriends } from 'src/app/models/state-friends.models';
import { StateFriend } from '../reducer/friend.reducer';

export const selectFeature = (state: AppStateFriends) => state.friends;

export const selectFriend = createSelector(selectFeature, (state: StateFriend) => state.friends);
