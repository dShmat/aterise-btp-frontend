import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {BusinessLayoutComponent} from './business-layout/business-layout.component';
import {BusinessRoutingModule} from './business-routing.module';
import { BusinessHeaderComponent } from './business-header/business-header.component';


@NgModule({
  declarations: [
    BusinessLayoutComponent,
    BusinessHeaderComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    NgOptimizedImage
  ]
})
export class BusinessModule {
}
