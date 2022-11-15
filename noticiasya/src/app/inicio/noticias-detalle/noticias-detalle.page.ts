import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Noticia } from '../noticia.model';
import { NoticiasService } from '../noticias.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-noticias-detalle',
  templateUrl: './noticias-detalle.page.html',
  styleUrls: ['./noticias-detalle.page.scss'],
})
export class NoticiasDetallePage implements OnInit {

  noticia: Noticia;

  constructor(private activatedRoute: ActivatedRoute, private noticiasService: NoticiasService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      // redirect
      const recipeId = paramMap.get('noticiaId')
      this.noticia = this.noticiasService.getNoticia(recipeId);
    })
  }

  async deleteNoticia() {
    const alertElement = await this.alertCtrl.create({
      header: '¿Seguro que deseas eliminar esta noticia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.noticiasService.deleteNoticia(this.noticia.id);
            this.router.navigate(['/inicio'])
          }
        }
      ]
    });
    await alertElement.present();
    
  }

}
