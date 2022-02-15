import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  get primEmail(){
    return this.userEmails.get('primaryEmail')
    }
  
    get secondEmail(){
    return this.userEmails.get('secondaryEmail')
    }
  
    title = 'email-validation-tutorial';
    userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    secondaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
    });
  onSubmit(form: NgForm) {
    this.store.dispatch(addUser({user: form.value}))
    this.myRouter.navigateByUrl(('/profile'));
  }

}
