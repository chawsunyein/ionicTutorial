import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.component.html',
  styleUrls: ['./infinitescroll.component.scss'],
})
export class InfinitescrollComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = ['AAA' , 'BBB', 'CCC', 'DDD', 'AAA' , 'BBB', 'CCC', 'DDD'];
  constructor() {
   }

  ngOnInit() {}
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
