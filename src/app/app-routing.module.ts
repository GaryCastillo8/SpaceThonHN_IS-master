import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './page/login/signin/signin.component';
import { MainComponent } from './page/main/main/main.component';
import { SignUpComponent } from './page/login/signup/signup.component';
import { MedicionesComponent } from './page/portal/mediciones/mediciones.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'login', component: SignInComponent, canLoad: [AuthGuard] },
  { path: 'signup', component: SignUpComponent, canLoad: [AuthGuard] },
  {
    path: 'mediciones',
    component: MedicionesComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
