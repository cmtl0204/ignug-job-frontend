import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryFormComponent} from "./category-form/category-form.component";
import {AreaFormComponent} from "./area-form/area-form.component";

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: ':id',
    component: CategoryFormComponent
  },
  {
    path: 'areas/:id',
    component: AreaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
