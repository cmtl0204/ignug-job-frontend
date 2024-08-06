import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { SharedModule } from "../../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';


@NgModule({
    declarations: [
        CategoryListComponent,
        CategoryFormComponent,
        AreaFormComponent
    ],
    imports: [
        CommonModule,
        CategoryRoutingModule,
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
export class CategoryModule { }
