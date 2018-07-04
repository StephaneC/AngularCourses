import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { UsersComponent } from '@app/features/users/users.component';
import { MessagesComponent } from '@app/features/messages/messages.component';


@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule,
    FormsModule
  ],
  declarations: [
    UsersComponent,
    MessagesComponent,
    NavigationComponent
  ]
})
export class NavigationModule { }
