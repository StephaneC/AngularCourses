import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public message : string;
  public messages : any = [];

  constructor(public usersServices: UsersService) {
  }

  ngOnInit() {
    //first wwe subscribe to messages observable
    this.usersServices.getUsers().subscribe(
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
    this.usersServices.update();
  }
}
