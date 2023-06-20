import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-token-page',
  templateUrl: './token-page.component.html',
  styleUrls: ['./token-page.component.scss']
})
export class TokenPageComponent implements OnInit {

  @Output() tokenDeselected = new EventEmitter<any>();

  valueForm = this.fb.group({
    value: [null, [Validators.required, Validators.maxLength(30)]],
  })

  income: number = 0;
  price: number = 0;
  needToBeeTopUp: number = 0;

  constructor(private router: Router, private fb: UntypedFormBuilder) {
  }

  close() {
    this.tokenDeselected.emit(false);
  }

  topUp() {
    this.router.navigate(['platform/individual/wallet']);
  }

  ngOnInit() {
    this.valueForm.get("value")?.valueChanges.subscribe(val => {
      if (val > 0) {
        this.income = val * 100 * 3 * 0.12;
        this.price = val * 100;
        this.needToBeeTopUp = val * 100;
      } else {
        this.income = 0;
        this.price = 0;
        this.needToBeeTopUp = 0;
      }
    })
  }
}
