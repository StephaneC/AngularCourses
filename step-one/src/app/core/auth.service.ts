import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static KEY = "token";

  static token:string = "";

  constructor() { }

  getToken():string{
    console.log("get token " + AuthService.token);
    return AuthService.token;
    //TODOreturn sessionStorage.getItem(AuthService.KEY);
  }

  setToken(token: any){
    console.log("set token " + token.token);
    AuthService.token = token.token;
    //TODOsessionStorage.setItem(AuthService.KEY, token);
  }
}
