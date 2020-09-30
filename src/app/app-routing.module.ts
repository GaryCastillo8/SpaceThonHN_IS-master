import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './page/login/form/form.component';
import { MainComponent } from './page/main/main/main.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'login', component: FormComponent},
  {path: '**' , redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
