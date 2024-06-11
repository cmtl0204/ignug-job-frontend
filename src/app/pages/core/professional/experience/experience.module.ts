import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExperienceRoutingModule} from './experience-routing.module';
import {ExperienceFormComponent} from "./experience-form/experience-form.component";
import {ExperienceListComponent} from "./experience-list/experience-list.component";


@NgModule({
  declarations: [ExperienceFormComponent, ExperienceListComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule {
}
