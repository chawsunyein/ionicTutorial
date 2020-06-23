import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segmentbutton',
  templateUrl: './segmentbutton.component.html',
  styleUrls: ['./segmentbutton.component.scss'],
})
export class SegmentbuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
