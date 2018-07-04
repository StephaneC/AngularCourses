import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from '@app/features/signin/signin.component';
import { SignupComponent } from '@app/features/signup/signup.component';
import { NavigationComponent } from '@app/features/navigation/navigation.component';

const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'connected', component: NavigationComponent },
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