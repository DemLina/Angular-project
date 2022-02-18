import { Component, NgModule, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { arrFriends } from 'src/app/mocks/friends';
import { Friend } from 'src/app/models/friend.model';
import { AppStateFriends } from 'src/app/models/state-friends.models';
import { FriendServices } from 'src/app/services/friend.services';
import { addFriend, removeFriend } from 'src/app/store/actions/friend.action';
import { selectFriend } from 'src/app/store/selectors/friend.selectors';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  searchFriend!: Friend[];
  cloneFriend = [...arrFriends];
  myFriends$!: Observable<Array<Friend>>;
  constructor(private store: Store<AppStateFriends>, private _friendService: FriendServices) {}

  ngOnInit(): void {
    this.myFriends$ = this.store.select(selectFriend);
    this._friendService.friends$.subscribe((friends: Friend[]) => {
      this.searchFriend = friends;
    });
  }

  addFriend(friend: Friend) {
    for (let item of this.cloneFriend) {
      if (item.user === friend.user) {
        item.isFriend = true;
      }
    }
    this.store.dispatch(addFriend({ friend: friend }));
  }
  removeFriend(friend: Friend) {
    for (let item of this.cloneFriend) {
      if (item.user === friend.user) {
        item.isFriend = false;
      }
    }
    this.store.dispatch(removeFriend({ friend: friend }));
  }

  searchFriends(value: string) {
    this._friendService.searchFriends(value);
  }
}
