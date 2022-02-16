import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { addUser } from 'src/app/store/actions/user.action';
import { AppState } from 'src/app/models/state-user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private myRouter: Router, private store: Store<AppState>) {}
  
    onSubmit(email: NgModel) {
      this.store.dispatch(addUser({user: {email: email.value}}))
      this.myRouter.navigateByUrl(('/profile'));
    }

}
