import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  showToolbar = false;
  constructor() { }

  ngOnInit() {}

  toggleToolbar() {
    this.showToolbar = !this.showToolbar;
  }
}
