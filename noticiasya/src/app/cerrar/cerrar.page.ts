import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.page.html',
  styleUrls: ['./cerrar.page.scss'],
})
export class CerrarPage implements OnInit {

  constructor(
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async presentToast1(){
    const toast = await this.toastController.create({
      message: "Se ha cerrado la sesión",
      duration: 2000,
      position: "bottom"
    });
    toast.present()
  }

}
