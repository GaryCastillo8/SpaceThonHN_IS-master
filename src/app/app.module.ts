import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page/main/navbar/navbar.component';
import { HeaderComponent } from './page/main/header/header.component';
import { TeamComponent } from './page/main/team/team.component';
import { FooterComponent } from './page/main/footer/footer.component';
import { FormComponent } from './page/login/form/form.component';
import { SidebarComponent } from './page/spacethon/sidebar/sidebar.component';
import { ContactUsComponent } from './page/main/contact-us/contact-us.component';
import { MainComponent } from './page/main/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TeamComponent,
    FooterComponent,
    FormComponent,
    SidebarComponent,
    ContactUsComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
