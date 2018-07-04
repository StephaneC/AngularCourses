import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.services';
import { Message } from './message';

@Component({
  selector: 'app-messages',
  templateUrl: 'messages.html',
  providers:[MessagesService]
})
export class MessagesComponent implements OnInit {

  public message : string;
  public messages : Message[] = [];

  constructor(public messagesServices: MessagesService) {
  }

  ngOnInit() {
    //first wwe subscribe to messages observable
    this.messagesServices.getMessages().subscribe(
      result=>{
        console.log({result});
        this.messages=result;
      },
      error=>console.log("Error getting message"), 
      () => {
        console.log("completed");
      });
    this.load();
  }

  load() {
    //ask to update data
    this.messagesServices.update();
  }

  postMessage() {
    this.messagesServices.postMessage(this.message);
  }
}
