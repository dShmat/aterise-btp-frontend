import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletPageComponent} from './wallet-page/wallet-page.component';
import {WalletRoutingModule} from './wallet-routing.module';
import {CurrencyTopUpComponent} from './wallet-page/currency-top-up/currency-top-up.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    WalletPageComponent,
    CurrencyTopUpComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    ReactiveFormsModule
  ]
})
export class WalletModule {
}
