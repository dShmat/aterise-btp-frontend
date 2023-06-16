import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewLayoutComponent} from './overview-layout/overview-layout.component';
import {OverviewRoutingModule} from './overview-routing.module';
import { OverviewHeaderComponent } from './overview-header/overview-header.component';


@NgModule({
  declarations: [
    OverviewLayoutComponent,
    OverviewHeaderComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule {
}
