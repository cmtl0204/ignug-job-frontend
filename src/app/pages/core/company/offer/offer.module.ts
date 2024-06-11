import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferRoutingModule } from './offer-routing.module';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferFormComponent } from './offer-form/offer-form.component';

@NgModule({
  declarations: [
    OfferListComponent,
    OfferFormComponent
  ],
  imports: [
    CommonModule,
    OfferRoutingModule
  ]
})
export class OfferModule { }
