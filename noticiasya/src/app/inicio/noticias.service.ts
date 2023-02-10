import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  noticias: Noticia[] = [
  
  ]

  constructor() { }

  leerNoticias() {
    return [...this.noticias]
  }

  getNoticia(placeId: string) {
    return {
      ...this.noticias.find(noticia => {
        return noticia.id === placeId
      })
    }
  }

  deleteNoticia(noticiaId: string) {
    this.noticias = this.noticias.filter(place => {
      return place.id !== noticiaId
    })
  }

  async getNoticias() {
        const res = await fetch("http://localhost:8080/noticia")
        const resjson = (await res).json()
        return resjson
    }
  
  async registrar (noticia) {
        const res = await fetch("http://localhost:8080/noticia", {method: "POST", body:JSON.stringify(noticia), headers: {'Content-Type': 'application/json'}})
        const resjson = (await res).json()
        return resjson
    }

}
