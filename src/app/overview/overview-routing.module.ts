import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OverviewLayoutComponent} from './overview-layout/overview-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'overview/welcome',
    pathMatch: 'full'
  },
  {
    path: 'overview',
    component: OverviewLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'registration',
        loadChildren: () => import('./registration-faq/registration-faq.module').then(m => m.RegistrationFAQModule)
      },
      {
        path: 'trading',
        loadChildren: () => import('./trading-faq/trading-faq.module').then(m => m.TradingFAQModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule {
}
