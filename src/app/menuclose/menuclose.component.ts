import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuclose',
  templateUrl: './menuclose.component.html',
  styleUrls: ['./menuclose.component.scss'],
})
export class MenucloseComponent implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {}
  openMenu() {
    this.menuController.open();
 }
 closeMenu() {
   this.menuController.close();
}
}
