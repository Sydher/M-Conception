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
    {id: 0, title: "Projet 1", img: "/assets/images/projects/000.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ipsum odio, gravida a gravida quis, bibendum nec neque. Integer blandit sollicitudin dolor ut pharetra. Nam vulputate urna et diam venenatis viverra. Nullam non sollicitudin tellus. Praesent in erat a elit elementum mollis sed in diam. Nullam mollis, ligula sed iaculis suscipit, nisl eros pellentesque enim, sed mollis tortor ligula quis turpis. Aenean eu cursus nulla, vel interdum dui."},
    {id: 1, title: "Projet 2", img: "/assets/images/projects/001.jpg", desc: "Cras gravida placerat pulvinar. Nulla id iaculis enim, id efficitur felis. Ut metus lectus, iaculis id tellus non, rutrum vulputate quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."},
    {id: 2, title: "Projet 3", img: "/assets/images/projects/002.jpg", desc: "In fringilla mi nec diam elementum, in fringilla orci cursus. Proin porta placerat dui, ut elementum purus ullamcorper a. Etiam elit eros, viverra non diam a, ornare dapibus ligula. Suspendisse vestibulum massa mi. Mauris eget enim odio. Fusce ut ullamcorper turpis. Etiam euismod purus tincidunt gravida lacinia."},
    {id: 3, title: "Sabre Laser", img: "/assets/images/projects/003.jpg", desc: "Un sabre laser pour tout fan de Star Wars qui se respecte !"},
  ]

  constructor(private router: Router, private navbarService: NavbarService) {
    this.navbarService.setActiveMenuItem(this.router.url);
  }

}
