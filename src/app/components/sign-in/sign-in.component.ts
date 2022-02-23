import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { addUser, updateUser } from 'src/app/store/actions/user.action';
import { AppState } from 'src/app/models/state-user.model';
import { User } from 'src/app/models/user.model';
import { users } from 'src/app/mocks/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  userStore!: User;
  signForm!: FormGroup;
  isLogin!: boolean;
  errorMessage!: string;

  constructor(private myRouter: Router, private store: Store<AppState>, private _authService: AuthService) {}

  ngOnInit(): void {
    this.signForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.minLength(6)),
    });
  }

  get password(): AbstractControl | null {
    return this.signForm.get('password');
  }
  get email(): AbstractControl | null {
    return this.signForm.get('email');
  }

  onSubmit(form: User): void {
    for (let user of users) {
      if (form.email == user.email) {
        this.store.dispatch(addUser({ user: form }));
        this.isLogin = true;
        this._authService.isAuth(this.isLogin);
        this.myRouter.navigateByUrl('/profile');
        sessionStorage.setItem('login', 'true');
      } else {
        this.errorMessage = 'This user does not exist, enter the correct email';
      }
    }
  }
}
