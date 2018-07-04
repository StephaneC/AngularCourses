import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public username : string;
  public password : string;
  public urlPhoto : string;
  

  constructor(public signupServices:SignupService, public router:Router) { }

  ngOnInit() {
  }

  signup() {
    this.signupServices.signup(this.username, this.password, this.urlPhoto)
    .subscribe(res => {
      this.router.navigate(['/signin']);
    }, (err) => {
      console.log(err);
      alert("create account error");
    })
  }
}
