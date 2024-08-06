import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillListComponent} from "./skill-list/skill-list.component";
import { SkillFormComponent } from './skill-form/skill-form.component';

const routes: Routes = [
  {
   path: '',
    component: SkillListComponent
},
  {
    path: ':id',
    component: SkillFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule {
}
