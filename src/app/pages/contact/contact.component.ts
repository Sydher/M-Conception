import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  siteName: string = "M Conception"
  contactEmail: string = "contact@example.com"
  formData: FormGroup;

  constructor(private router: Router, private navbarService: NavbarService, private formBuilder: FormBuilder) {
    this.navbarService.setActiveMenuItem(this.router.url);
    this.formData = this.initForm();
  }

  ngOnInit() {
    this.formData = this.initForm();
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      subject: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    });
  }

  mailTo(): string {
    // %0D%0A = <br>
    const body = this.formData.get('body')?.value.replace(/\n/g, '%0D%0A');
    return `mailto:${this.contactEmail}?subject=[${this.siteName}] ${this.formData.get('subject')}&body=${body}`;
  }

}
