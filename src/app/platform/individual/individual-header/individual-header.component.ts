import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-individual-header',
  templateUrl: './individual-header.component.html',
  styleUrls: ['./individual-header.component.scss']
})
export class IndividualHeaderComponent {
  constructor(private router: Router) {
  }

  logOut() {
    this.router.navigate(['overview']);
  }
}
