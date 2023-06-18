import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletPageComponent} from './wallet-page/wallet-page.component';
import {WalletRoutingModule} from './wallet-routing.module';


@NgModule({
  declarations: [
    WalletPageComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ]
})
export class WalletModule {
}
