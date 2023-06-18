import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndividualRoutingModule} from './individual-routing.module';
import { IndividualLayoutComponent } from './individual-layout/individual-layout.component';
import { IndividualHeaderComponent } from './individual-header/individual-header.component';


@NgModule({
  declarations: [
    IndividualLayoutComponent,
    IndividualHeaderComponent
  ],
  imports: [
    CommonModule,
    IndividualRoutingModule
  ]
})
export class IndividualModule {
}
