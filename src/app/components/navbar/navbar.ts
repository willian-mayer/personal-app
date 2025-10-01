import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { navbarRoutes, NavRoute } from '../../data/navbar-routes';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  menuOpen = false;
  routes: NavRoute[] = navbarRoutes;
  logoPath = '/logo.png';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}