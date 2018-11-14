import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users : User[] = [];

  constructor(public usersServices: UsersService) {
  }

  ngOnInit() {
    //first wwe subscribe to messages observable
    this.usersServices.getUsers().subscribe(
      result=>{
        console.log({result});
        this.users=result;
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
