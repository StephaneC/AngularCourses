import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(public http: HttpClient) { }

  signup(username:string, password:string, urlPhoto:string): Observable<any> {
    let body = 'username='+username;
    body = body +'&pwd='+password;
    body = body +'&urlPhoto='+urlPhoto;
    
    return this.http.post('http://cesi.cleverapps.io/signup', body);
  }
}
