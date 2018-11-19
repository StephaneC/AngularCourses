import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing';
import { AppComponent } from '@app/app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@core/token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UiModule } from './core/ui/ui.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SigninModule } from './features/signin/signin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SigninModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

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
