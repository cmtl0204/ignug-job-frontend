import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// PrimeNG Modules
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule} from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';




import {SharedModule} from '@shared/shared.module';



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
    OfferRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ToolbarModule,
    PanelModule,
    ButtonModule,     
    SharedModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    PasswordModule,
    RippleModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
    SidebarModule,
    PanelMenuModule
   
  ]
})
export class OfferModule { }
