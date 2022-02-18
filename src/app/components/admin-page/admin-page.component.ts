import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state-user.model';
import { addUser, updateUser } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
  constructor(private store: Store<AppState>) {}

  onSubmit(form: NgForm) {
    this.store.dispatch(updateUser({ user: form.value }));
  }
}
