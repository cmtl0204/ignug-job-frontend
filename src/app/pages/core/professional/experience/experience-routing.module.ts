import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperienceListComponent} from "./experience-list/experience-list.component";
import {ExperienceFormComponent} from "./experience-form/experience-form.component";

const routes: Routes = [
  {
    path: '',
    component: ExperienceListComponent
  },
  {
    path: ':id',
    component: ExperienceFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule {
}
