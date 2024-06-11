import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AcademicFormationRoutingModule} from './academic-formation-routing.module';
import {AcademicFormationFormComponent} from "./academic-formation-form/academic-formation-form.component";
import {AcademicFormationListComponent} from "./academic-formation-list/academic-formation-list.component";


@NgModule({
  declarations: [AcademicFormationFormComponent, AcademicFormationListComponent],
  imports: [
    CommonModule,
    AcademicFormationRoutingModule
  ]
})
export class AcademicFormationModule {
}
