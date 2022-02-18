import { Component, NgModule, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Friend } from 'src/app/models/friend.model';
import { AppStateFriends } from 'src/app/models/state-friends.models';
import { FriendServices } from 'src/app/services/friend.services';
import { addFriend } from 'src/app/store/actions/friend.action';
import { selectFriend } from 'src/app/store/selectors/friend.selectors';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  allFriends!: Friend[];
  myFriends$!: Observable<Array<Friend>>;
  constructor(private store: Store<AppStateFriends>, private _friendService: FriendServices) {}

  ngOnInit(): void {
    this.myFriends$ = this.store.select(selectFriend);
    this._friendService.friends$.subscribe((friends: Friend[]) => {
      this.allFriends = friends;
    });
  }

  addFriend(friend: Friend) {
    for (let item of this.allFriends) {
      if (item.user === friend.user) {
        item.isFriend = true;
      }
    }
    this.store.dispatch(addFriend({ friend: friend }));
  }
  removeFriend(friend: Friend) {
    for (let item of this.allFriends) {
      if (item.user === friend.user) {
        item.isFriend = false;
      }
    }
    console.log(friend);
  }

  searchFriends(value: string) {
    console.log(value);
    this._friendService.searchFriends(value);
  }
}
