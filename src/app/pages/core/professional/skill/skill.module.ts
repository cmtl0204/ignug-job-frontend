import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SkillRoutingModule} from './skill-routing.module';
import {SkillFormComponent} from "./skill-form/skill-form.component";
import {SkillListComponent} from "./skill-list/skill-list.component";


@NgModule({
  declarations: [SkillFormComponent, SkillListComponent],
  imports: [
    CommonModule,
    SkillRoutingModule
  ]
})
export class SkillModule {
}
