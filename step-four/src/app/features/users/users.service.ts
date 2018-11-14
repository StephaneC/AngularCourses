import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject,  Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users:BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(public http: HttpClient) {
   }

  update(){
    // ask to get new content
    this.http.get<User[]>('http://cesi.cleverapps.io/users', {observe: 'response'}).subscribe(res => {
        if(res.status === 200){
            var messages = res.body;
            //TODO localStorage.set('messages', messages); 
            this.users.next(messages);
        }        
    }, (err) => {
        console.log(err);
    });
  }

  getUsers(): Observable<User[]>{
    return this.users;   
  }
}
