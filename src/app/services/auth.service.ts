import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = Boolean(sessionStorage.getItem('login'));
  constructor() {}

  isAuth(login: boolean) {
    return (this.isLogin = login);
  }
}
