import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-shared-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  siteName: string = "M Conception"

  constructor(private navbarService: NavbarService) {}

  isActiveRoute(route: string): boolean {
    return route === this.navbarService.getActiveMenuItem();
  }

}
