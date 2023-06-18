import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnlineFormPageComponent} from './online-form-page/online-form-page.component';
import {OnlineFormRoutingModule} from './online-form-routing.module';


@NgModule({
  declarations: [
    OnlineFormPageComponent
  ],
  imports: [
    CommonModule,
    OnlineFormRoutingModule
  ]
})
export class OnlineFormModule {
}
