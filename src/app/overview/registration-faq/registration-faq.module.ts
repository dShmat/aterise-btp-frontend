import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationFaqRoutingModule} from './registration-faq-routing.module';
import { RegistrationFaqPageComponent } from './registration-faq-page/registration-faq-page.component';


@NgModule({
  declarations: [
    RegistrationFaqPageComponent
  ],
  imports: [
    CommonModule,
    RegistrationFaqRoutingModule
  ]
})
export class RegistrationFAQModule {
}
