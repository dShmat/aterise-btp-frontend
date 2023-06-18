import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OnlineFormPageComponent} from './online-form-page/online-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineFormPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineFormRoutingModule {
}
