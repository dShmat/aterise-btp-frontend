import {Component, Input, OnInit} from '@angular/core';
import {Currency} from "../../../../../shared/models/currency.model";
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-currency-top-up',
  templateUrl: './currency-top-up.component.html',
  styleUrls: ['./currency-top-up.component.scss']
})
export class CurrencyTopUpComponent implements OnInit {

  valueForm = this.fb.group({
    value: [null, [Validators.required, Validators.maxLength(30)]],
  })

  totalValue: number = 0;

  constructor(private fb: UntypedFormBuilder, private router: Router) {
  }

  private _currency: Currency;
  amount: number = 0;
  @Input() set selectedCurrency(currency: Currency) {
    this._currency = currency;
  }

  get selectedCurrency() {
    return this._currency;
  }

  ngOnInit() {
    this.valueForm.get("value")?.valueChanges.subscribe( val => {
      if (val > 0) {
        this.totalValue = val;
      } else {
        this.totalValue = 0;
      }
    })
  }
}
