import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RegistrationRoutingModule} from './registration-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {RippleModule} from "primeng/ripple";

import {SharedModule} from "@shared/shared.module";

import {DropdownModule} from "primeng/dropdown";
import {MessageModule} from "primeng/message";
import {PanelModule} from "primeng/panel";
import {AvatarModule} from "primeng/avatar";
import {ProfessionalComponent} from './professional/professional.component';
import {CompanyComponent} from './company/company.component';
import {RegistrationComponent} from './registration.component';
import {ToolbarModule} from "primeng/toolbar";
import {OverlayPanelModule} from "primeng/overlaypanel";


@NgModule({
  declarations: [ProfessionalComponent, CompanyComponent, RegistrationComponent],
  exports: [],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    DividerModule,
    InputTextModule,
    PasswordModule,
    RippleModule,
    DropdownModule,
    NgOptimizedImage,
    MessageModule,
    PanelModule,
    AvatarModule,
    ToolbarModule,
    OverlayPanelModule,
  ]
})
export class RegistrationModule {
}
