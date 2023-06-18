import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensPageComponent} from './tokens-page/tokens-page.component';
import {OnlineFormRoutingModule} from './tokens-routing.module';


@NgModule({
  declarations: [
    TokensPageComponent
  ],
  imports: [
    CommonModule,
    OnlineFormRoutingModule
  ]
})
export class TokensModule {
}
