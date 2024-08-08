import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ApplyProfessionalComponent } from './apply-professional/apply-professional.component';

const routes: Routes = [
  {
    path: 'offers',
    loadChildren: () => import('./offer/offer.module').then(m => m.OfferModel),
  },
  {
    path: 'professionals',
    loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },

  {
    path: 'apply-curriculum/:id',
    component: ApplyProfessionalComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
