import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlatformLayoutComponent} from "./platform-layout/platform-layout.component";

const routes: Routes = [
  {
    path: '',
    component: PlatformLayoutComponent,
    children: [
      {
        path: 'individual',
        loadChildren: () => import('./individual/individual.module').then(m => m.IndividualModule)
      },
      {
        path: 'business',
        loadChildren: () => import('./business/business.module').then(m => m.BusinessModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule {
}
