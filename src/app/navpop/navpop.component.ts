import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navpop',
  templateUrl: './navpop.component.html',
  styleUrls: ['./navpop.component.scss'],
})
export class NavpopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  gotoitem(){
  this.router.navigateByUrl('/item');
}
}
