import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private myRouter: Router, private _auth: AuthService) {}

  logOut() {
    localStorage.removeItem('userStorage')
    sessionStorage.removeItem('login');
    this.myRouter.navigateByUrl('/login');
    this._auth.isAuth(false);
  }
}
