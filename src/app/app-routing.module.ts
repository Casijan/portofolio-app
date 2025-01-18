import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio-website/home', pathMatch: 'full' },
  {
    path: 'portfolio-website',
    loadChildren: () => import('./portofolio-website/portofolio-website-routing.module')
      .then(m => m.PortfolioWebsiteRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
