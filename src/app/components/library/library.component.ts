import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/models/game.model';
import { AppState } from 'src/app/models/state-user.model';
import { selectGames } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  myGames: Game[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectGames).subscribe((games) => {
      this.myGames = games;
    });
  }
}
