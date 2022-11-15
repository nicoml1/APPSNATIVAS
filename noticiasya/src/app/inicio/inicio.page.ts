import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  noticias = []

  constructor(private noticiaService: NoticiasService, private router: Router) { }

  ngOnInit() {
    this.noticias = this.noticiaService.getNoticias();
  }

  ionViewWillEnter() {
    this.noticias = this.noticiaService.getNoticias();
  }

  addNewNoticia(){
    this.router.navigate(['/new-noticia']);
  }

}
