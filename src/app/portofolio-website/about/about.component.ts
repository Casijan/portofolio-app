import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  showEducation:boolean=true
  showProjects:boolean=true

   
  projects = [
    { name: 'Portofolio-Project', description: 'WebApp pentru laboratorul de la facultate' },
    { name: 'More Projects to be Soon', description: 'Next Year' },
    { name: 'More Projects to be Soon', description: 'Next Year' },
  ];
}
