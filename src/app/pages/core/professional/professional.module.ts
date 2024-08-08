import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { ApplyQrOfferComponent } from './apply-qr-offer/apply-qr-offer.component';
import {ApplyQrProfessionalComponent} from "./apply-qr-professional/apply-qr-professional.component";
import {MenubarModule} from "primeng/menubar";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import { ApplyOfferComponent } from './apply-offer/apply-offer.component';
import { OfferDetailsComponent } from './apply-offer/offer-details/offer-details.component';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
//import { ApplyQrOfferComponent } from './apply-qr-offer/apply-qr-offer.component';

@NgModule({
  declarations: [
    ProfessionalComponent,
    ApplyQrOfferComponent,
    ApplyQrProfessionalComponent,
    ApplyOfferComponent,
    OfferDetailsComponent
    //ApplyQrOfferComponent,
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    ToastModule,
    AvatarModule
  ]
})
export class ProfessionalModule { }
