import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationFaqRoutingModule} from './registration-faq-routing.module';
import { RegistrationFaqPageComponent } from './registration-faq-page/registration-faq-page.component';
import { RegistrationFaqCardComponent } from './registration-faq-card/registration-faq-card.component';


@NgModule({
  declarations: [
    RegistrationFaqPageComponent,
    RegistrationFaqCardComponent
  ],
  imports: [
    CommonModule,
    RegistrationFaqRoutingModule
  ]
})
export class RegistrationFAQModule {
}
