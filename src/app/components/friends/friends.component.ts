import { Component, OnInit } from '@angular/core';
import { friends } from '../../mocks/friends.mock';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  arrayFriends = friends
  constructor() { }

  ngOnInit(): void {
  }

}
