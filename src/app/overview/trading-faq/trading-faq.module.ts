import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradingFaqRoutingModule} from './trading-faq-routing.module';
import {TradingFaqPageComponent} from './trading-faq-page/trading-faq-page.component';


@NgModule({
  declarations: [
    TradingFaqPageComponent
  ],
  imports: [
    CommonModule,
    TradingFaqRoutingModule
  ]
})
export class TradingFAQModule {
}
