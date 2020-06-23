import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navpush',
  templateUrl: './navpush.component.html',
  styleUrls: ['./navpush.component.scss'],
})
export class NavpushComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  params: Object;
  pushPage: any;
  constructor(private router: Router) {
    this.pushPage = BadgeComponent;
  }

  ngOnInit() {}
  gotoBadge(){
    this.router.navigateByUrl('/badge');
  }
}
