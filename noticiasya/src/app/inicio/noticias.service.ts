import { Injectable } from '@angular/core';
import { Noticia } from './noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticias: Noticia[] = [
    {
      id: '1',
      title: 'Título de la noticia',
      imageURL: 'https://th.bing.com/th/id/OIP.qrLDaqCWcoKmjFB3eHrnuAHaI6?pid=ImgDet&rs=1',
      subtitle: 'Categoría',
      description: 'Fecha, ciudad. Descripción de la noticia. Descripción de la noticia. Descripción de la noticia.'
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
