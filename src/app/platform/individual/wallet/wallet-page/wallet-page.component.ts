import {Component, OnInit} from '@angular/core';
import {Currency} from '../../../../shared/models/currency.model';

@Component({
  selector: 'app-wallet-page',
  templateUrl: './wallet-page.component.html',
  styleUrls: ['./wallet-page.component.scss']
})
export class WalletPageComponent implements OnInit {

  private _selectedCurrency: Currency;
  public currencies: Currency[] = [
    {
      id: '1',
      name: 'RUB.sc',
      usdValue: 0.00,
      totalValue: 0.00
    },
    {
      id: '2',
      name: 'BYN.sc',
      usdValue: 0.00,
      totalValue: 0.00
    },
    {
      id: '3',
      name: 'USD.sc',
      usdValue: 0.00,
      totalValue: 0.00
    },
    {
      id: '4',
      name: 'EUR.sc',
      usdValue: 0.00,
      totalValue: 0.00
    }
  ];

  get selectedCurrency() {
    return this._selectedCurrency;
  }

  set selectedCurrency(currency: Currency) {
    this._selectedCurrency = currency;
  }

  selectCurrency(currency: Currency) {
    this.selectedCurrency = currency;
  }

  isCurrencySelected(currency: Currency) {
    return this._selectedCurrency.id === currency.id;
  }

  ngOnInit() {
    this.selectedCurrency = this.currencies[2];
  }
}
