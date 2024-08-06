import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExperienceRoutingModule} from './experience-routing.module';
import {ExperienceFormComponent} from "./experience-form/experience-form.component";
import {ExperienceListComponent} from "./experience-list/experience-list.component";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {RippleModule} from "primeng/ripple";
import {ReactiveFormsModule} from "@angular/forms";

import {SharedModule} from "@shared/shared.module";

import {DropdownModule} from "primeng/dropdown";
import {MessageModule} from "primeng/message";
import {PanelModule} from "primeng/panel";
import {AvatarModule} from "primeng/avatar";
import {ToolbarModule} from "primeng/toolbar";
import {OverlayPanelModule} from "primeng/overlaypanel";
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [ExperienceFormComponent, ExperienceListComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule,
    CommonModule,
    SharedModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    InputTextModule,
    PasswordModule,
    RippleModule,
    DropdownModule,
    MessageModule,
    PanelModule,
    AvatarModule,
    ToolbarModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    CalendarModule,
    InputSwitchModule,
    TableModule,
    PanelMenuModule,
    SidebarModule
  ]
})
export class ExperienceModule {
}
