import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradingFaqRoutingModule} from './trading-faq-routing.module';
import {TradingFaqPageComponent} from './trading-faq-page/trading-faq-page.component';
import {TradingFaqCardComponent} from './trading-faq-card/trading-faq-card.component';


@NgModule({
  declarations: [
    TradingFaqPageComponent,
    TradingFaqCardComponent
  ],
  imports: [
    CommonModule,
    TradingFaqRoutingModule
  ]
})
export class TradingFAQModule {
}
