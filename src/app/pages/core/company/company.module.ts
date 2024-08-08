import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { ApplyProfessionalComponent } from './apply-professional/apply-professional.component';
import { ProfessionalDetailsComponent } from './apply-professional/professional-details/professional-details.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [
  
    ApplyProfessionalComponent,
    ProfessionalDetailsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    CommonModule,
    CompanyRoutingModule,
    CardModule,
    PanelModule,
    ButtonModule,
    MenubarModule,
    ToastModule,
    AvatarModule,
    OrderListModule
    
  ]
})
export class CompanyModule { }
