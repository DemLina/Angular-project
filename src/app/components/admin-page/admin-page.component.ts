import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private store: Store<AppState>, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user) => {
      this.user = user || {};
    });

    this.adminForm = new FormGroup({
      email: new FormControl(this.user.email, Validators.email),
      name: new FormControl(this.user.name, Validators.minLength(4)),
      age: new FormControl(this.user.age),
    });
  }

  openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  get name(): AbstractControl | null {
    return this.adminForm.get('name');
  }

  get email(): AbstractControl | null {
    return this.adminForm.get('email');
  }

  onSubmit(form: User): void {
    this.store.dispatch(updateUser({ user: form }));
  }
}
