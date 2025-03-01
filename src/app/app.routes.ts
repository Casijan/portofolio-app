import { Routes } from '@angular/router';
import { HomeComponent } from './portofolio-website/home/home.component';
import { AboutComponent } from './portofolio-website/about/about.component';
import { ContactComponent } from './portofolio-website/contact/contact.component';

export const routes: Routes = [
  { path: 'portofolio-website', component: HomeComponent },
  { path: 'portofolio-website/about', component: AboutComponent },
  { path: 'portofolio-website/contact', component: ContactComponent },
  { path: '**', redirectTo: 'portofolio-website', pathMatch: 'full' },
];
