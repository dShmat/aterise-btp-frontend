import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-token-page',
  templateUrl: './token-page.component.html',
  styleUrls: ['./token-page.component.scss']
})
export class TokenPageComponent {
  @Output() tokenDeselected = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  close() {
    this.tokenDeselected.emit(false);
  }

  topUp() {
    this.router.navigate(['platform/individual/wallet']);
  }
}
