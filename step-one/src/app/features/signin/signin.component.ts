import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth.service';
import { SigninService } from "./signin.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public username : string;
  public password : string;
  
  constructor(public signinServices: SigninService, 
    public authService:AuthService, public router:Router) { }

  ngOnInit() {
  }

  signin() {
    this.signinServices.signin(this.username, this.password)
    .subscribe(res => {
      console.log('signin succeeded');
      this.authService.setToken(res);
      this.router.navigate(['/messages']);
    }, (err) => {
      console.log(err);
      alert("Signin error");
    })
  }

  signup() {
    //TODO change page
  }

}
