import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoticiasService } from './noticias.service';
import { NoticiaService } from './noticia.service';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public toastCtrl: ToastController, private noticiasService: NoticiasService, private router: Router, private noticiaService: NoticiaService, private alertController: AlertController) { }


  noticias = [this.getNoticias()]
  todasLasNoticias = []
  private idNoticia = null;

  ngOnInit() {
    this.getNoticias()
  }

  addNewNoticia(){
    this.router.navigate(['/new-noticia']);
  }
  
  async presentToast(position: 'top') {
    const toast = await this.toastCtrl.create({
      message: "La noticia ha sido agregada a favoritos",
      duration: 1000,
      position: position
    })
    await toast.present();
  }

  async getNoticias() {
    this.noticias = await this.noticiaService.getNoticias()
    console.table(this.noticias);
    this.todasLasNoticias = Array.from(this.noticias)
  }

  async elimNoticia() {
    const alert = await this.alertController.create({
      header: "Seguro que desea eliminar esta noticia?",
      message: "Una vez que confirme esta acción, la noticia se borrará de forma permanente.",
      buttons: ["Cancelar","ELIMINAR"]
    })
    await alert.present();
  }

}
