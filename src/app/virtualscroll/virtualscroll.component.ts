import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.scss'],
})
export class VirtualscrollComponent implements OnInit {
  item: any[] = ['11' , '2' ];
  constructor() {
   }

  ngOnInit() {}
myHeaderFn(record, recordIndex, records) {
  if (recordIndex % 20 === 0) {
    return 'Header ' + recordIndex;
  }
  return null;
}
}
