import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from '@app/features/signin/signin.component';
import { MessagesComponent } from '@app/features/messages/messages.component';

const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'messages', component: MessagesComponent },
    { path: '',
      redirectTo: '/signin',
      pathMatch: 'full'
    },
  ];
  
  
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}