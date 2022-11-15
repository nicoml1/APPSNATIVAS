import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticias: Noticia[] = [
    {
      id: '1',
      title: 'Lionel Messi ya esta listo para el mundial de Qatar',
      imageURL: 'https://th.bing.com/th/id/OIP.qrLDaqCWcoKmjFB3eHrnuAHaI6?pid=ImgDet&rs=1',
      subtitle: 'Deportes',
      description: '14/11/2022: Lionel Messi ya está en Qatar y realizo su primer entrenamiento con la Seleccion Argentina, pensando en el partido amistoso contra los Emiratos Árabes de este Miércoles, y obviamente en el debut mundialista contra Arabia Saudita el 22/11. Argentina ya cuenta con sus 26 jugadores y todo su cuerpo técnico que van a competir en esta nueva copa del mundo'
    },
    {
      id: '2',
      title: 'Título de la noticia',
      imageURL: 'https://th.bing.com/th/id/OIP.qrLDaqCWcoKmjFB3eHrnuAHaI6?pid=ImgDet&rs=1',
      subtitle: 'Categoría',
      description: 'Descripción de la noticia. Descripción de la noticia. Descripción de la noticia.'
    },
    {
      id: '3',
      title: 'Título de la noticia',
      imageURL: 'https://th.bing.com/th/id/OIP.qrLDaqCWcoKmjFB3eHrnuAHaI6?pid=ImgDet&rs=1',
      subtitle: 'Categoría',
      description: 'Descripción de la noticia. Descripción de la noticia. Descripción de la noticia.'
    },
    {
      id: '4',
      title: 'Título de la noticia',
      imageURL: 'https://th.bing.com/th/id/OIP.qrLDaqCWcoKmjFB3eHrnuAHaI6?pid=ImgDet&rs=1',
      subtitle: 'Categoría',
      description: 'Descripción de la noticia. Descripción de la noticia. Descripción de la noticia.'
    },
    {
      id: '5',
      title: 'Título de la noticia',
      imageURL: 'https://th.bing.com/th/id/OIP.qrLDaqCWcoKmjFB3eHrnuAHaI6?pid=ImgDet&rs=1',
      subtitle: 'Categoría',
      description: 'Descripción de la noticia. Descripción de la noticia. Descripción de la noticia.'
    },
    {
      id: '6',
      title: 'Título de la noticia',
      imageURL: 'https://th.bing.com/th/id/OIP.qrLDaqCWcoKmjFB3eHrnuAHaI6?pid=ImgDet&rs=1',
      subtitle: 'Categoría',
      description: 'Descripción de la noticia. Descripción de la noticia. Descripción de la noticia.'
    },
  ]

  constructor() { }

  getNoticias() {
    return [...this.noticias]
  }

  getNoticia(placeId: string) {
    return {
      ...this.noticias.find(noticia => {
        return noticia.id === placeId
      })
    }
  }

  addNoticia(title:string, imageURL:string, subtitle:string, description:string) {
    this.noticias.push({
      title,
      imageURL,
      subtitle,
      description,
      id: this.noticias.length + 1 + ""
    });
  }

  deleteNoticia(noticiaId: string) {
    this.noticias = this.noticias.filter(place => {
      return place.id !== noticiaId
    })
  }
}
