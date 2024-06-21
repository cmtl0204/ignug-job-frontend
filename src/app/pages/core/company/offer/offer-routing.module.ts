import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferFormComponent} from "./offer-form/offer-form.component";

const routes: Routes = [
  {
    path: ':id',
    component: OfferFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule {
}
