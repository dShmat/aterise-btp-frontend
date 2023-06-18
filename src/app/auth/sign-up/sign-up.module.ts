import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpPageComponent} from './sign-up-page/sign-up-page.component';
import {SignUpRoutingModule} from './sign-up-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule {
}
