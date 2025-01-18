import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './portofolio-website/home/home.component';
import { NavbarComponent } from './portofolio-website/navbar/navbar.component';
import { FooterComponent } from './portofolio-website/footer/footer.component';
import { ContactComponent } from './portofolio-website/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portofolio-app';
}
