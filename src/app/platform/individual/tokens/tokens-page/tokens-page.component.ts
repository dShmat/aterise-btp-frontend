import { Component } from '@angular/core';

@Component({
  selector: 'app-tokens-page',
  templateUrl: './tokens-page.component.html',
  styleUrls: ['./tokens-page.component.scss']
})
export class TokensPageComponent {

  _token: any;
  get selectedToken () {
    return null
  }

  set selectedToken(token: any) {
    this._token = token;
  }
}
