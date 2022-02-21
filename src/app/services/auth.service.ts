import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin = Boolean(sessionStorage.getItem('login'));
  constructor() {}

  isAuth(login: boolean) {
    this.isLogin = login;
  }
}
