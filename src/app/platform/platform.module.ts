import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlatformRoutingModule} from './platform-routing.module';
import { PlatformLayoutComponent } from './platform-layout/platform-layout.component';


@NgModule({
  declarations: [
    PlatformLayoutComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule
  ]
})
export class PlatformModule {
}
