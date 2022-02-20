import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/models/game.model';
import { AppState } from 'src/app/models/state-user.model';
import { addGame } from 'src/app/store/actions/user.action';
import { selectGames } from 'src/app/store/selectors/user.selectors';
import { games } from '../../mocks/games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  listCards = games;
  myGames: Game[] = []
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(selectGames).subscribe((games) => {
      this.myGames = games
    });
    this.listCards=this.listCards.filter(item => !this.myGames.includes(item))

  }

  addCard(card: Game) {
    this.store.dispatch(addGame( {game: card}))
    this.listCards=this.listCards.filter(item => !this.myGames.includes(item))
  }
}
