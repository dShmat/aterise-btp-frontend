import {Component} from '@angular/core';
import {UntypedFormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-online-form-page',
  templateUrl: './online-form-page.component.html',
  styleUrls: ['./online-form-page.component.scss']
})
export class OnlineFormPageComponent {

  entityForm = this.fb.group({
    fullName: [null, [Validators.required, Validators.maxLength(50)]],
    shortName: [null, [Validators.required, Validators.maxLength(50)]],
    accNumber: [null, [Validators.required, Validators.maxLength(50)]],
    registrationAuthority: [null, [Validators.required, Validators.maxLength(50)]],
    registrationNumber: [null, [Validators.required, Validators.maxLength(50)]],
    registrationDate: [null, [Validators.required, Validators.maxLength(50)]],
  })

  legalForm = this.fb.group({
    country: [null, [Validators.required, Validators.maxLength(30)]],
    locality: [null, [Validators.required, Validators.maxLength(30)]],
    region: [null, [Validators.required, Validators.maxLength(30)]],
    district: [null, [Validators.required, Validators.maxLength(10)]],
    localityType: [null, [Validators.required, Validators.maxLength(10)]],
    zip: [null, [Validators.required, Validators.maxLength(50)]],
    street: [null, [Validators.required, Validators.maxLength(20)]],
    house: [null, [Validators.required, Validators.maxLength(50)]],
    building: [null, [Validators.required, Validators.maxLength(50)]],
    office: [null, [Validators.required, Validators.maxLength(50)]],
  })

  constructor(private fb: UntypedFormBuilder, private router: Router) {
  }
}
