import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AcademicFormationListComponent} from "./academic-formation-list/academic-formation-list.component";
import {AcademicFormationFormComponent} from "./academic-formation-form/academic-formation-form.component";

const routes: Routes = [
  {
    path: '',
    component: AcademicFormationListComponent
  },
  {
    path: ':id',
    component: AcademicFormationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicFormationRoutingModule {
}
