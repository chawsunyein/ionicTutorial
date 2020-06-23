import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemreorder',
  templateUrl: './itemreorder.component.html',
  styleUrls: ['./itemreorder.component.scss'],
})
export class ItemreorderComponent implements OnInit {

  items = [1, 2, 3, 4, 5 ];

  constructor() {
    for (let x = 0; x < 5; x++) {
      this.items.push(x);
    }
  }

  reorderItems(indexes) {
    const element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  ngOnInit() {}

}
