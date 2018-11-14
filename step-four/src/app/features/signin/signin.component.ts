import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth.service';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(public signinServices: SigninService,
    public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  signin() {
    console.log(this.signinForm.value);
    this.signinServices.signin(this.signinForm.value.login, this.signinForm.value.pwd)
    .subscribe(res => {
      console.log('signin succeeded');
      this.authService.setToken(res);
      this.router.navigate(['/connected']);
    }, (err) => {
      console.log(err);
      alert("Signin error");
    });
  }

}
