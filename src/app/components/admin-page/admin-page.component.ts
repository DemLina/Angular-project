import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state-user.model';
import { User } from 'src/app/models/user.model';
import { addUser, updateUser } from 'src/app/store/actions/user.action';
import { selectUser } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  user!: User;
  adminForm!: FormGroup;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.store.select(selectUser).subscribe((users) => {
      this.user = users || {};
    });
    this.adminForm = new FormGroup({
      email: new FormControl(this.user.email, Validators.email),
      name: new FormControl(this.user.name, Validators.minLength(4)),
      age: new FormControl(this.user.age),
    });
  }
  get name() {
    return this.adminForm.get('name');
  }
  get email() {
    return this.adminForm.get('email');
  }

  onSubmit(form: User) {
    this.store.dispatch(updateUser({ user: form }));
  }
}
