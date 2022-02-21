import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './models/state-user.model';
import { selectUser } from './store/selectors/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  user: any;
  constructor(private store: Store<AppState>) {}
  ngOnDestroy(): void {
    this.store.select(selectUser).subscribe((user) => {
      localStorage.setItem('userStorage', JSON.stringify(user));
      this.user = user;
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('userStorage')) {
      console.log(JSON.parse(localStorage.getItem('userStorage') as any));
    }
  }
}
