import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  constructor(private toastCtrl: ToastController) { }
  ngOnInit() {}
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Pair was  successfully',
      duration: 3000,
      position: 'top'
    });
    toast.present();
}
}
