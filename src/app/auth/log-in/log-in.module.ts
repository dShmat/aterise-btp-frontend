import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogInPageComponent} from './sign-in-page/log-in-page.component';
import {LogInRoutingModule} from './log-in-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({

  declarations: [
    LogInPageComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    ReactiveFormsModule
  ]
})
export class LogInModule {
}
