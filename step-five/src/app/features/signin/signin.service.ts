import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(public http: HttpClient) { }

  signin(username:string, password:string): Observable<any> {
    let body = 'username='+username;
    body = body +'&pwd='+password;
    
    return this.http.post('http://cesi.cleverapps.io/signin', body);
  }
}
