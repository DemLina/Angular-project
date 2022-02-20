import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { users } from 'src/app/mocks/users';
import { Friend } from 'src/app/models/friend.model';
import { User } from 'src/app/models/user.model';
import { addFriend, removeFriend } from 'src/app/store/actions/user.action';
import { selectFriends, selectUser } from 'src/app/store/selectors/user.selectors';
import { AppState } from '../../models/state-user.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  searchFriend!: Friend[];
  myFriends: Friend[] = [];
  user!: User

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((users) => {
      this.user = users || {};
    });
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
    this.searchFriend = users.filter((item) => item.name.includes(value) && item.email !== this.user.email);
  }

  ifFriend(user: string): boolean {
    console.log(this.myFriends.length)
    return !!this.myFriends.find((item) => {
      item.name === user && item.email != this.user.email
    });
  }
}
