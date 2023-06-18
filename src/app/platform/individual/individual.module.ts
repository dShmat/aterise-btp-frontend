import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndividualRoutingModule} from './individual-routing.module';
import { IndividualLayoutComponent } from './individual-layout/individual-layout.component';
import { IndividaulHeaderComponent } from './individaul-header/individaul-header.component';


@NgModule({
  declarations: [
    IndividualLayoutComponent,
    IndividaulHeaderComponent
  ],
  imports: [
    CommonModule,
    IndividualRoutingModule
  ]
})
export class IndividualModule {
}
