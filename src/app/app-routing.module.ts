import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FriendsComponent } from './components/friends/friends.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: SignInComponent},
  {path: 'profile', component: AdminPageComponent},
  {path: 'friends', component: FriendsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
