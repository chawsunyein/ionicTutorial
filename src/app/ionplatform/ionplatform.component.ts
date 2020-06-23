import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-ionplatform',
  templateUrl: './ionplatform.component.html',
  styleUrls: ['./ionplatform.component.scss'],
})
export class IonplatformComponent implements OnInit {

  constructor(public plt: Platform) {
    if (this.plt.is('ios')) {
      // This will only print when on iOS
      console.log('I am an iOS device!');
    }
    if (this.plt.is('android')) {
      // This will only print when on iOS
      console.log('I am an Android device!');
    }
    if (this.plt.is('desktop')) {
      // This will only print when on iOS
      console.log('I am an desktop device!');
    }
   }

  ngOnInit() {}

}
