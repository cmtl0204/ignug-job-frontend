import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseRoutingModule} from './course-routing.module';
import {CourseFormComponent} from "./course-form/course-form.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {TableModule} from "primeng/table";
import {SidebarModule} from "primeng/sidebar";
import {PanelMenuModule} from "primeng/panelmenu";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [CourseFormComponent, CourseListComponent],
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
export class CourseModule {
}
