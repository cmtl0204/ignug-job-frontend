import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfessionalComponent} from "./professional/professional.component";
import {CompanyComponent} from "./company/company.component";
import {RegistrationComponent} from "./registration.component";

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'professionals',
    component: ProfessionalComponent
  },
  {
    path: 'companies',
    component: CompanyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {
}
