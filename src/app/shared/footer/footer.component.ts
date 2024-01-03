import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  siteName: string = "M Conception"
  currentYear: number = new Date().getFullYear();

}
