import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { userReducer } from './store/reducer/user.reducer';
import { HeaderComponent } from './components/header/header.component';
import { FriendsComponent } from './components/friends/friends.component';
import { friendReducer } from './store/reducer/friend.reducer';
import { FriendServices } from './services/friend.services';

@NgModule({
  declarations: [AppComponent, SignInComponent, AdminPageComponent, HeaderComponent, FriendsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ friends: friendReducer, users: userReducer }),
  ],
  providers: [FriendServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
