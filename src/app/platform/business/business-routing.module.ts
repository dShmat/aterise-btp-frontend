import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BusinessLayoutComponent} from './business-layout/business-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'online-form',
        pathMatch: 'full'
      },
      {
        path: 'online-form',
        loadChildren: () => import('./online-form/online-form.module').then(m => m.OnlineFormModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule {
}
