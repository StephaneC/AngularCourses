import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { UiModule } from '@app/core/ui/ui.module';
import { SignupRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    UiModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
