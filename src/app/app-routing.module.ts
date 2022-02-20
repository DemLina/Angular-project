import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AuthGuard } from './auth.guard';
import { LibraryComponent } from './components/library/library.component';
import { GamesComponent } from './components/games/games.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: SignInComponent },
  { path: 'profile', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard] },
  {path: 'library', component: LibraryComponent},
  {path: 'games', component: GamesComponent},
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
