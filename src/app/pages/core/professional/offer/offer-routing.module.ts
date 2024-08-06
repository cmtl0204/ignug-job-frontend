import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferListComponent} from "./offer-list/offer-list.component";
import {OfferFormComponent} from "./offer-form/offer-form.component";

const routes: Routes = [
  {
    path: '',
    component: OfferListComponent
  },
  {
    path: ':id',
    component: OfferFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule {
}
