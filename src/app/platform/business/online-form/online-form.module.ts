import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OnlineFormPageComponent} from './online-form-page/online-form-page.component';
import {OnlineFormRoutingModule} from './online-form-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    OnlineFormPageComponent
  ],
  imports: [
    CommonModule,
    OnlineFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OnlineFormModule {
}
