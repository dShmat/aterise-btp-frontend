import { Component } from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-online-form-page',
  templateUrl: './online-form-page.component.html',
  styleUrls: ['./online-form-page.component.scss']
})
export class OnlineFormPageComponent {

  personalForm = this.fb.group({
    surname: ['Anderson', [Validators.required, Validators.maxLength(30)]],
    name: ['Jason', [Validators.required, Validators.maxLength(30)]],
    citizenship: [null, [Validators.required, Validators.maxLength(30)]],
    dob: ['1990-10-18', [Validators.required, Validators.maxLength(10)]],
    pob: ['Philadelphia, PA, USA', [Validators.required, Validators.maxLength(50)]],
  })

  contactForm = this.fb.group({
    docType: [null, [Validators.required, Validators.maxLength(30)]],
    docNumber: ['HB3413812', [Validators.required, Validators.maxLength(30)]],
    idNumber: ['HB3413812', [Validators.required, Validators.maxLength(30)]],
    issueDate: ['1990-10-18', [Validators.required, Validators.maxLength(10)]],
    expirationDate: ['1990-10-18', [Validators.required, Validators.maxLength(10)]],
    issuedBy: ['Ministry of foreign affairs', [Validators.required, Validators.maxLength(50)]],
    mobileNumber: ['12345678910', [Validators.required, Validators.maxLength(20)]],
    email: ['jason.anderson@aterise.com', [Validators.required, Validators.maxLength(50)]],
  })

  constructor(private fb: UntypedFormBuilder, private router: Router) {
  }
}
