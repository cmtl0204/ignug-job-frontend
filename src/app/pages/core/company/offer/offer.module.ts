import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseRoutingModule} from './offer-routing.module';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {TableModule} from "primeng/table";
import {SidebarModule} from "primeng/sidebar";
import {PanelMenuModule} from "primeng/panelmenu";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import { OfferListComponent } from '../../../../../../../../../Users/cesar/Downloads/michael vivanco/offer/offer-list/offer-list.component';
import { OfferFormComponent } from '../../../../../../../../../Users/cesar/Downloads/michael vivanco/offer/offer-form/offer-form.component';



@NgModule({
  declarations: [OfferListComponent, OfferFormComponent ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    ToolbarModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    TableModule,
    SidebarModule,
    PanelMenuModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class OfferModule {
}
