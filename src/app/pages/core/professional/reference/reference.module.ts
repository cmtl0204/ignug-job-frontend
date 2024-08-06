import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReferenceRoutingModule} from './reference-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import {SharedModule} from '@shared/shared.module';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

import { ReferenceListComponent } from './reference-list/reference-list.component';
import { ReferenceFormComponent} from './reference-form/reference-form.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
  declarations: [ReferenceFormComponent , ReferenceListComponent],
  imports: [
      CommonModule,
      ReferenceRoutingModule,
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
        MenubarModule,
        TableModule,
        SidebarModule,
        PanelMenuModule

  ]
})
export class ReferenceModule {
}
