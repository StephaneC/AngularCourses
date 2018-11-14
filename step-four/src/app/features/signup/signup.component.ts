import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required, Validators.minLength(4)]),
    urlPhoto: new FormControl('', [Validators.minLength(4)]),
  });

  constructor(public signupServices: SignupService,
    public router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.signupServices.signup(
      this.signupForm.value.login,
      this.signupForm.value.pwd,
      this.signupForm.value.urlPhoto)
    .subscribe(res => {
      this.router.navigate(['/signin']);
    }, (err) => {
      console.log(err);
      alert("create account error");
    });
  }
}
