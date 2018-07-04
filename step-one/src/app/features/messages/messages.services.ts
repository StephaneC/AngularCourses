import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject,  Observable } from "rxjs";


@Injectable()
export class MessagesService {

    private messages:BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);


  constructor(public http: HttpClient) {
      // on initialise avec le storage
    /*TODOlocalStorage.get('messages').then(
        data=>{
            this.messages.next(data);
        }); */
   }

  update(){
    // ask to get new content
    this.http.get('http://cesi.cleverapps.io/messages', {observe: 'response'}).subscribe(res => {
        if(res.status === 200){
            var messages = res.body;
            //TODO localStorage.set('messages', messages); 
            this.messages.next(messages);
        }        
    }, (err) => {
        console.log(err);
    });
  }

  getMessages(): Observable<Message[]>{
    return this.messages;   
  }

  postMessage(message: string){
    let param :string = 'message='+message; 

    this.http.post('http://cesi.cleverapps.io/messages', param).subscribe(res => {
        this.update();
      }, (err) => {
        console.log("error calling http " + err);
      });
  }

}