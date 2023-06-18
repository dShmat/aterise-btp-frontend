import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-business-header',
  templateUrl: './business-header.component.html',
  styleUrls: ['./business-header.component.scss']
})
export class BusinessHeaderComponent {

  constructor(private router: Router) {
  }


  logOut() {
    this.router.navigate(['overview']);
  }
}
