import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page/main/navbar/navbar.component';
import { HeaderComponent } from './page/main/header/header.component';
import { TeamComponent } from './page/main/team/team.component';
import { FooterComponent } from './page/main/footer/footer.component';
import { SignInComponent } from './page/login/signin/signin.component';
import { SidebarComponent } from './page/spacethon/sidebar/sidebar.component';
import { ContactUsComponent } from './page/main/contact-us/contact-us.component';
import { MainComponent } from './page/main/main/main.component';
import { SignUpComponent } from './page/login/signup/signup.component';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';
import { MedicionesComponent } from './page/portal/mediciones/mediciones.component';
import { MedicionComponent } from './page/portal/medicion/medicion.component';
import { QueryFormComponent } from './page/portal/query-form/query-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TeamComponent,
    FooterComponent,
    SignInComponent,
    SidebarComponent,
    ContactUsComponent,
    MainComponent,
    SignUpComponent,
    MedicionesComponent,
    MedicionComponent,
    QueryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
