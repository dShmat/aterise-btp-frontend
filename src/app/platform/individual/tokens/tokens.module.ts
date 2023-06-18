import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensPageComponent} from './tokens-page/tokens-page.component';
import {TokensRoutingModule} from './tokens-routing.module';


@NgModule({
  declarations: [
    TokensPageComponent
  ],
  imports: [
    CommonModule,
    TokensRoutingModule
  ]
})
export class TokensModule {
}
