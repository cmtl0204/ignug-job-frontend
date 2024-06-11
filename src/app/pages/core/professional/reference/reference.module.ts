import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReferenceRoutingModule} from './reference-routing.module';
import {ReferenceFormComponent} from "./reference-form/reference-form.component";
import {ReferenceListComponent} from "./reference-list/reference-list.component";


@NgModule({
  declarations: [ReferenceFormComponent, ReferenceListComponent],
  imports: [
    CommonModule,
    ReferenceRoutingModule
  ]
})
export class ReferenceModule {
}
