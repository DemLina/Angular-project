import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './models/state-user.model';
import { User } from './models/user.model';
import { updateUser } from './store/actions/user.action';
import { selectUser } from './store/selectors/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  userStore!: User;
  user!: User;
  @HostListener('window:beforeunload')
  doSomething() {
    
    this.store.select(selectUser).subscribe((user) => {
      console.log(user);
      localStorage.setItem('userStorage', JSON.stringify(user));
    });
  }
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    if (Boolean(sessionStorage.getItem('login'))) {
      if((localStorage.getItem('userStorage'))) {
        this.store.dispatch(updateUser({ user: JSON.parse(localStorage.getItem('userStorage') as any) }))
      }
    }
  }
}
