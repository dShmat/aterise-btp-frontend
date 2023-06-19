import { Component } from '@angular/core';

@Component({
  selector: 'app-tokens-page',
  templateUrl: './tokens-page.component.html',
  styleUrls: ['./tokens-page.component.scss']
})
export class TokensPageComponent {

  _token: boolean;
  isSelectedToken () {
    return this._token;
  }

  selectToken() {
    this._token = !this._token;
  }
}
