import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-token-page',
  templateUrl: './token-page.component.html',
  styleUrls: ['./token-page.component.scss']
})
export class TokenPageComponent {
  @Output() tokenDeselected = new EventEmitter<any>();

  close() {
    this.tokenDeselected.emit(false);
  }
}
