import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TradingFaqPageComponent} from './trading-faq-page/trading-faq-page.component';

const routes: Routes = [
  {
    path: '',
    component: TradingFaqPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingFaqRoutingModule {
}
