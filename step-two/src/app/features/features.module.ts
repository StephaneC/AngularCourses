import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SigninComponent, UsersComponent, SignupComponent]
})
export class FeaturesModule { }
