import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  youtubeLink = 'https://youtu.be/ZcOmw4rDCQU?si=lxfUIIVuiiC--dJm';
  emailAddress = 'hahaha@gmail.com';

  constructor(public router: Router) {}
}
