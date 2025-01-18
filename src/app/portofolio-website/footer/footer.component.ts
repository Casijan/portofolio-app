import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  youtubeLink = 'https://youtu.be/ZcOmw4rDCQU?si=lxfUIIVuiiC--dJm'; 
  contactLink = 'http://localhost:4200/portofolio-website/contact';
  skillsLink = 'http://localhost:4200/portofolio-website/skills';
  homeLink = 'http://localhost:4200/portofolio-website/home';
  emailAddress = 'hahaha@gmail.com';


  constructor(public router:Router){

  }

onHome(){
  window.scrollTo({top:0,behavior:'smooth'})
  this.router.navigate(['./portfolio-website/home'])
    }

    onAbout(){
  
      this.router.navigate(['./portfolio-website/about'])
      
    }
    onContact(){
  
      this.router.navigate(['./portfolio-website/contact'])
    }
}
