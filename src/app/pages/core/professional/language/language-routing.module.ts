import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LanguageListComponent} from "./language-list/language-list.component";
import {LanguageFormComponent} from "./language-form/language-form.component";
import { ApplyQrProfessionalComponent } from './apply-qr-professional/apply-qr-professional.component';

const routes: Routes = [
  {
    path: '',
    component: LanguageListComponent
  },
  {
    path: ':id',
    component: LanguageFormComponent
  },
  {
    path: ':id/apply-qr',
    component: ApplyQrProfessionalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageRoutingModule {
}
