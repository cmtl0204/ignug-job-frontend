import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
