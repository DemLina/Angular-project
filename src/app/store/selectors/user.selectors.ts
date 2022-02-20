import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/state-user.model';
import { User } from '../../models/user.model';

export const selectFeature = (state: AppState) => state.users;

export const selectUser = createSelector(selectFeature, (state: { user: User }) => state.user);

export const selectFriends = createSelector(selectUser, (user: User) => user.friends);

export const selectGames = createSelector(selectUser, (user: User) => user.games);