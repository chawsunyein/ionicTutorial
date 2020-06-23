import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menutoggle',
  templateUrl: './menutoggle.component.html',
  styleUrls: ['./menutoggle.component.scss'],
})
export class MenutoggleComponent implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {}
  openMenu() {
    this.menuController.open();
 }
}
