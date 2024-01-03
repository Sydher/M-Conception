import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  siteName: string = "M Conception"

  constructor(private router: Router, private navbarService: NavbarService) {
    this.navbarService.setActiveMenuItem(this.router.url);
  }

}
