import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { users } from 'src/app/mocks/users';
import { Friend } from 'src/app/models/friend.model';
import { addFriend, removeFriend } from 'src/app/store/actions/user.action';
import { selectFriends } from 'src/app/store/selectors/user.selectors';
import { AppState } from '../../models/state-user.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  searchFriend!: Friend[];
  myFriends: Friend[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectFriends).subscribe((friends) => {
      this.myFriends = friends || [];
    });
  }

  addFriend(friend: Friend): void {
    this.store.dispatch(addFriend({ friend: { ...friend } }));
  }

  removeFriend(friend: Friend): void {
    this.store.dispatch(removeFriend({ friend: { ...friend } }));
  }

  searchFriends(value: string): void {
    this.searchFriend = users.filter((item) => item.name.includes(value));
  }

  ifFriend(user: string): boolean {
    return !!this.myFriends.find((item) => item.name === user);
  }
}
