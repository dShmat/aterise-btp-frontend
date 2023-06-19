import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TokensPageComponent} from './tokens-page/tokens-page.component';
import {TokensRoutingModule} from './tokens-routing.module';
import { TokenPageComponent } from './token-page/token-page.component';


@NgModule({
  declarations: [
    TokensPageComponent,
    TokenPageComponent
  ],
  imports: [
    CommonModule,
    TokensRoutingModule
  ]
})
export class TokensModule {
}
