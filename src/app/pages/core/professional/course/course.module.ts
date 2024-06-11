import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseRoutingModule} from './course-routing.module';
import {CourseFormComponent} from "./course-form/course-form.component";
import {CourseListComponent} from "./course-list/course-list.component";


@NgModule({
  declarations: [CourseFormComponent, CourseListComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule {
}
