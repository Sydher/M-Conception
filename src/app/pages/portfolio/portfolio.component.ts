import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  siteName: string = "M Conception"

  projects: any[] = [
    { id: 0, title: "Barrière", img: "/assets/images/projects/barriere.jpeg" },
    { id: 1, title: "Cache USB", img: "/assets/images/projects/cacheusb.jpeg" },
    { id: 2, title: "Cadre Ville", img: "/assets/images/projects/cadreville.jpeg" },
    { id: 3, title: "Cale", img: "/assets/images/projects/cale.jpeg" },
    { id: 4, title: "Catenaire", img: "/assets/images/projects/catenaire.jpeg" },
    { id: 5, title: "Circuit Albi", img: "/assets/images/projects/circuit albi.jpeg" },
    { id: 6, title: "Clavier", img: "/assets/images/projects/clavier.jpeg" },
    { id: 7, img: "/assets/images/projects/levaigui.jpeg" },
    { id: 8, title: "Main Support", img: "/assets/images/projects/main.jpeg" },
    { id: 9, title: "Main Support", img: "/assets/images/projects/main2.jpeg" },
    { id: 10, title: "Coopération", img: "/assets/images/projects/serragemain.jpeg" },
    { id: 11, title: "Train", img: "/assets/images/projects/train.jpeg" },
  ]

  constructor(private router: Router, private navbarService: NavbarService) {
    this.navbarService.setActiveMenuItem(this.router.url);
  }

}
