import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TokensPageComponent} from './tokens-page/tokens-page.component';

const routes: Routes = [
  {
    path: '',
    component: TokensPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokensRoutingModule {
}
