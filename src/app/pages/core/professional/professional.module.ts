import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { ApplyQrOfferComponent } from './apply-qr-offer/apply-qr-offer.component';
//import { ApplyQrOfferComponent } from './apply-qr-offer/apply-qr-offer.component';

@NgModule({
  declarations: [
    ProfessionalComponent,
    ApplyQrOfferComponent,
    //ApplyQrOfferComponent,
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule
  ]
})
export class ProfessionalModule { }
