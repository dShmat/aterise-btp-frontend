import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegistrationFaqPageComponent} from './registration-faq-page/registration-faq-page.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationFaqPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationFaqRoutingModule {
}
