import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing';
import { AppComponent } from '@app/app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@core/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from '@app/features/signin/signin.component';

import { UiModule } from './core/ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,

    /* Ca ne doit pas être là car importé 
    avec le loadChildren
    SignupModule,
    SigninModule,
    NavigationModule
    */
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
