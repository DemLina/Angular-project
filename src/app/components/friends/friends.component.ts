import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  user!: User;

  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((users) => {
      this.user = users || {};
    });
    this.store.select(selectFriends).subscribe((friends) => {
      this.myFriends = friends || [];
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
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
    return !!this.myFriends.find((item) => item.name === user);
  }
}
