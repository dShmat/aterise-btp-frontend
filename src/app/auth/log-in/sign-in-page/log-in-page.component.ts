import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent {

  private _isIndividual: boolean = true;
  private _isBusiness: boolean;

  loginForm = this.fb.group({
    login: [null, [Validators.required, Validators.maxLength(30)]],
    password: [null, [Validators.required, Validators.maxLength(30)]],
    smsCode: [null, [Validators.required, Validators.maxLength(10)]],
  })

  constructor(private fb: UntypedFormBuilder, private router: Router) {
  }

  get isIndividual() {
    return this._isIndividual;
  }

  set isIndividual(value: boolean) {
    this._isIndividual = value;
  }

  get isBusiness() {
    return this._isBusiness;
  }

  set isBusiness(value: boolean) {
    this._isBusiness = value;
  }

  selectIndividual(): void {
    this.isIndividual = true;
    this.isBusiness = false;
  }

  selectBusiness(): void {
    this.isBusiness = true;
    this.isIndividual = false;
  }

  onLogin() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    if (this.isIndividual) {
      this.router.navigate(['platform/individual/tokens']);
    } else {
      this.router.navigate(['platform/business/online-form']);
    }
  }

}
