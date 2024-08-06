import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { ApplyQrOfferComponent } from './apply-qr-offer/apply-qr-offer.component';
import {ApplyQrProfessionalComponent} from "./apply-qr-professional/apply-qr-professional.component";
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
//import { ApplyQrOfferComponent } from './apply-qr-offer/apply-qr-offer.component';

@NgModule({
  declarations: [
    ProfessionalComponent,
    ApplyQrOfferComponent,
    ApplyQrProfessionalComponent
    //ApplyQrOfferComponent,
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule
  ]
})
export class ProfessionalModule { }
