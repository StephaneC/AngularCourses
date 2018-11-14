import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@app/core/ui/ui.module';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
@NgModule({
  imports: [
    CommonModule,
    SigninRoutingModule,
    FormsModule,
    UiModule,
    ReactiveFormsModule
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }
