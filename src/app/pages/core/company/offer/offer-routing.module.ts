import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OfferListComponent} from "../../../../../../../../../Users/cesar/Downloads/michael vivanco/offer/offer-list/offer-list.component";
import {OfferFormComponent} from "../../../../../../../../../Users/cesar/Downloads/michael vivanco/offer/offer-form/offer-form.component";

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
