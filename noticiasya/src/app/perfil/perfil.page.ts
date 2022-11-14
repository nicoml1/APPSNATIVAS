import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Eliminar cuenta",
      message: "¿Estás seguro que deseas eliminar tu cuenta? Una vez que lo hagas, todos tus datos se borrarán de forma permanente.",
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log("No cancel")
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log("Cuenta eliminada")
          }
        }
    ]
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}


