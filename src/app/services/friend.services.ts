import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { arrFriends } from '../mocks/friends';
import { Friend } from '../models/friend.model';

@Injectable()
export class FriendServices {
  constructor() {}
  friends$ = new Subject<Friend[]>();
  public searchFriends(value: string): void {
    this.friends$.next(
      arrFriends.filter((elem) => {
        let chooseFriend = '';
        for (let i = 0; value.length > i; i++) {
          if (value[i] === elem.user[i]) {
            chooseFriend += elem.user[i];
          }
        }
        return chooseFriend === value;
      })
    );
  }
}
