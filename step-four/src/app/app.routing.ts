import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from '@app/features/signin/signin.component';
import { SignupModule } from '@app/features/signup/signup.module';
import { NavigationModule } from '@app/features/navigation/navigation.module';

const appRoutes: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', loadChildren: 'app/features/signup/signup.module#SignupModule' },
    { path: 'connected', loadChildren: 'app/features/navigation/navigation.module#NavigationModule' },
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