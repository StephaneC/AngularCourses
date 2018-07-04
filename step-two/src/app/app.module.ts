import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing';
import { AppComponent } from '@app/app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@core/token.interceptor';

import { SigninComponent } from './features/signin/signin.component';
import { SignupComponent } from './features/signup/signup.component';
import { MessagesComponent } from './features/messages/messages.component';
import { UsersComponent } from './features/users/users.component';
import { NavigationComponent } from './features/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    MessagesComponent,
    UsersComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
