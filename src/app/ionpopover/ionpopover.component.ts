import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ItemComponent } from '../item/item.component';
@Component({
  selector: 'app-ionpopover',
  templateUrl: './ionpopover.component.html',
  styleUrls: ['./ionpopover.component.scss'],
})
export class IonpopoverComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {}
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ItemComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
