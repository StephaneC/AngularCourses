// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {
    console.log("TokenInterceptor ctor");
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let h = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'token': this.auth.getToken()
    });
    /*if(this.auth.getToken()){
      console.log("interceptor token : " + this.auth.getToken());
      h.set();
    }*/
    request = request.clone({
      headers: h
    });
    return next.handle(request);
  }
}