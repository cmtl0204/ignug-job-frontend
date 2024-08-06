import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule } from '@angular/common/http';

// PrimeNG Modules
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import {CheckboxModule} from 'primeng/checkbox';
import {RippleModule} from 'primeng/ripple';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';

import {SharedModule} from '@shared/shared.module';
import { LanguageRoutingModule } from './language-routing.module';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageFormComponent } from './language-form/language-form.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';



@NgModule({
    declarations: [LanguageFormComponent,LanguageListComponent],
    imports: [
        CommonModule,
        LanguageRoutingModule,
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
export class LanguageModule { }
