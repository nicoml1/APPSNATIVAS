import { Injectable } from '@angular/core';
//import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  noticias = [    
  
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

  async registrar (noticia) {
    const res = await fetch("http://localhost:8080/noticia", {method: "POST", body:JSON.stringify(noticia), headers: {'Content-Type': 'application/json'}})
        const resjson = (await res).json()
        return resjson
    }

}
