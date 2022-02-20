import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { userReducer } from './store/reducer/user.reducer';
import { HeaderComponent } from './components/header/header.component';
import { FriendsComponent } from './components/friends/friends.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './services/auth.service';
import { LibraryComponent } from './components/library/library.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [AppComponent, SignInComponent, AdminPageComponent, HeaderComponent, FriendsComponent, LibraryComponent, GamesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ users: userReducer }),
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
