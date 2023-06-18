import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndividualLayoutComponent} from './individual-layout/individual-layout.component';

const routes: Routes = [
  {
    path: '',
    component: IndividualLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'tokens',
        pathMatch: 'full'
      },
      {
        path: 'online-form',
        loadChildren: () => import('./online-form/online-form.module').then(m => m.OnlineFormModule)
      },
      {
        path: 'tokens',
        loadChildren: () => import('./tokens/tokens.module').then(m => m.TokensModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndividualRoutingModule {
}
