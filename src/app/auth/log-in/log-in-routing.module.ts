import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LogInPageComponent} from './sign-in-page/log-in-page.component';

const routes: Routes = [
  {
    path: '',
    component: LogInPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogInRoutingModule {
}
