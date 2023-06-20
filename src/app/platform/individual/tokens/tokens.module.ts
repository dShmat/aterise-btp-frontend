import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensPageComponent} from './tokens-page/tokens-page.component';
import {TokensRoutingModule} from './tokens-routing.module';
import {TokenPageComponent} from './token-page/token-page.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    TokensPageComponent,
    TokenPageComponent
  ],
  imports: [
    CommonModule,
    TokensRoutingModule,
    ReactiveFormsModule
  ]
})
export class TokensModule {
}
