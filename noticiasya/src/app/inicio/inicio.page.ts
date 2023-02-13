import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from './noticias.service';
import { NoticiaService } from './noticia.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private noticiasService: NoticiasService, private router: Router, private noticiaService: NoticiaService) { }


  noticias = [this.getNoticias()]
  todasLasNoticias = []

  ngOnInit() {
    this.getNoticias()
  }

  ionViewWillEnter() {
    this.noticias = this.noticiasService.leerNoticias();
  }

  addNewNoticia(){
    this.router.navigate(['/new-noticia']);
  }

  async getNoticias() {
    this.noticias = await this.noticiaService.getNoticias()
    console.table(this.noticias);
    this.todasLasNoticias = Array.from(this.noticias)
  }

}
