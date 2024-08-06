import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferFormComponent} from "./offer-form/offer-form.component";
import { OfferListComponent } from './offer-list/offer-list.component';

const routes: Routes = [
  {
    path: ':id',
    component: OfferFormComponent
  },
  {
    path: '',
    component: OfferListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule {
}
