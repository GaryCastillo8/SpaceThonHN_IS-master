import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './page/login/signin/signin.component';
import { MainComponent } from './page/main/main/main.component';
import { SignUpComponent } from './page/login/signup/signup.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'login', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '**' , redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
