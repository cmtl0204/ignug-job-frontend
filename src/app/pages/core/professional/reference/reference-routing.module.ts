import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReferenceListComponent} from "./reference-list/reference-list.component";
import {ReferenceFormComponent} from "./reference-form/reference-form.component";

const routes: Routes = [
  {
    path: '',
    component: ReferenceListComponent
  },
  {
    path: ':id',
    component: ReferenceFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferenceRoutingModule {
}
