import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  siteName: string = "M Conception"

}
