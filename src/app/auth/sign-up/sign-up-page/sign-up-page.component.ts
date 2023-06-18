import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  private _isIndividual: boolean = true;
  private _isBusiness: boolean;

  signUpForm = this.fb.group({
    country: [null, [Validators.required, Validators.maxLength(30)]],
    login: [null, [Validators.required, Validators.maxLength(30)]],
    password: [null, [Validators.required, Validators.maxLength(30)]],
    confirmPassword: [null, [Validators.required, Validators.maxLength(30)]],
    email: [null, [Validators.required, Validators.maxLength(30)]],
    phoneNumber: [null, [Validators.required, Validators.maxLength(30)]],
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

  osSignUp() {
    if (!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
      return;
    }
    if (this.isIndividual) {
      this.router.navigate(['platform/individual/online-form']);
    } else {
      this.router.navigate(['platform/business/online-form']);
    }
  }
}
