import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;
  user: any;
  navFixed: string;

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {}

  goToComponent(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
    let token: string = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;

      this.user = JSON.parse(localStorage.getItem('user'));
    }

    this.navFixed = this.router.url == '/main' ? 'fixed-top' : '';
  }

  private onLogout(): void {
    localStorage.clear();
    this.isLogged = false;
    this.router.navigate(['main']);
  }
}
