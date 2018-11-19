import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { UsersComponent } from '@app/features/users/users.component';
import { MessagesComponent } from '@app/features/messages/messages.component';
import {MatTabsModule} from '@angular/material/tabs';

import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule,
    FormsModule,
    MatTabsModule,
    MatListModule
  ],
  declarations: [
    UsersComponent,
    MessagesComponent,
    NavigationComponent
  ]
})
export class NavigationModule { }
