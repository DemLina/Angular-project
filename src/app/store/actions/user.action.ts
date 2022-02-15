import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const addUser = createAction(
  '[USER] Add User',
  props<{user: User}>()
  );



