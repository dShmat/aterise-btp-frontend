import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {WalletPageComponent} from './wallet-page/wallet-page.component';

const routes: Routes = [
  {
    path: '',
    component: WalletPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule {
}
