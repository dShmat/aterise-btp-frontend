import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndividualRoutingModule} from './individual-routing.module';
import { IndividualLayoutComponent } from './individual-layout/individual-layout.component';


@NgModule({
  declarations: [
    IndividualLayoutComponent
  ],
  imports: [
    CommonModule,
    IndividualRoutingModule
  ]
})
export class IndividualModule {
}
