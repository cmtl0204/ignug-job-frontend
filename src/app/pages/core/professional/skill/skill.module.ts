import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SkillRoutingModule } from './skill-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '@shared/shared.module';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { SkeletonModule } from 'primeng/skeleton';




@NgModule({
  declarations: [SkillFormComponent, SkillListComponent],
  imports: [
    CommonModule,
    SkillRoutingModule,
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
        PanelMenuModule,
        SkeletonModule
   
  ]
})
export class SkillModule {
}
