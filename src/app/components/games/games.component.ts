import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Game } from 'src/app/models/game.model';
import { AppState } from 'src/app/models/state-user.model';
import { addGame } from 'src/app/store/actions/user.action';
import { selectGames } from 'src/app/store/selectors/user.selectors';
import { games } from '../../mocks/games';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Filter } from 'src/app/models/filters.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  listCards: Game[] = [];
  filteredCards: Game[] = [];
  minRange = games[0].price;
  maxRange = this.minRange;
  filters: Filter = {
    search: '',
    tags: [],
    price: 0,
  };
  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.store.select(selectGames).subscribe((items) => {
      this.listCards = games.filter((item) => !items?.includes(item));
      this.filteredCards = [...this.listCards];
    });
    for (let i = 1; i < games.length; ++i) {
      if (games[i].price > this.maxRange) this.maxRange = games[i].price;
      if (games[i].price < this.minRange) this.minRange = games[i].price;
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addCard(card: Game) {
    this.store.dispatch(addGame({ game: card }));
  }

  searchGames(value: string): void {
    this.filters.search = value;
    this.filterCards();
  }

  filterByTag(value: string): void {
    if (this.filters.tags.includes(value)) {
      this.filters.tags = this.filters.tags.filter((item: string) => item !== value);
    } else {
      this.filters.tags.push(value);
    }
    this.filterCards();
  }
  filterByPrice(value: string): void {
    this.filters.price = +value;
    this.filterCards();
  }

  filterCards() {
    this.filteredCards = this.listCards.filter((item) => {
      if (!item.title.includes(this.filters.search)) {
        return false;
      }
      if (this.filters.price && item.price > this.filters.price) {
        return false;
      }
      if (this.filters.tags.length && !this.filters.tags.includes(item.tag)) {
        return false;
      }
      return true;
    });
    console.log(this.filteredCards);
  }
}
