import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SignoutComponent} from './signout/signout.component';


const routes: Routes = [
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: '', component: SigninComponent
  },
  {
    path: 'signout', component: SignoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
