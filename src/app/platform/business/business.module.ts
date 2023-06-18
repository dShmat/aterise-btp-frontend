import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusinessLayoutComponent} from './business-layout/business-layout.component';
import {BusinessRoutingModule} from './business-routing.module';


@NgModule({
  declarations: [
    BusinessLayoutComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule {
}
