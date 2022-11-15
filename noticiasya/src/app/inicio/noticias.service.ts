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
      imageURL: 'https://cdn1.eldia.com/092022/1663987008313.jpg',
      subtitle: 'Deportes',
      description: '14/11/2022: Lionel Messi ya está en Qatar y realizo su primer entrenamiento con la Seleccion Argentina, pensando en el partido amistoso contra los Emiratos Árabes de este Miércoles, y obviamente en el debut mundialista contra Arabia Saudita el 22/11. Argentina ya cuenta con sus 26 jugadores y todo su cuerpo técnico que van a competir en esta nueva copa del mundo.'
    },
    {
      id: '2',
      title: 'La sostenibilidad del medio ambiente afectada por la población',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VgiMZRcxBTkVjLlnL8ranLiv6zJLLQ1VTQ&usqp=CAU',
      subtitle: 'Medio Ambiente',
      description: '14/11/2022: A día de hoy, el gran aumento de la población afecta gravemente al medio ambiente. Según la ONU, en el mundo ya viven 8.000 millones de personas, y que para el 2100 se prevé que aumente en un 40%. Este incremento de la poblacion podría generar un fuerte impacto negativo sobre muchas especies, o también en varios ecosistemas.'
    },
    {
      id: '3',
      title: 'Problemas de salud para Alberto Fernández',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsa5vbD-Un72xgp6wX5hIO9Tk6qVhN5mRaw&usqp=CAU',
      subtitle: 'Política',
      description: '15/11/2022: El Presidente de la república Argentina se descompenso mientras estaba en la cumbre del G20, que se está realizando en Indonesia. Empezó teniendo mareos y nauseas, por ende se activó el protocolo de emergencia y fue llevado directamente al hospital de la ciudad de Bali. El diagnóstico dio que tuvo una gastritis erosiva, la cual le generó un sangrado interno. Sin embargo, Fernández ya se encuentra en buenas condiciones y pudo retomar sus actividades en el G20. Por ejemplo, se reunió con Xi Jiping, presidente de China.'
    },
    {
      id: '4',
      title: 'Nuevo Album de YSY A',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQ9sbX0irlMFcdu0DX_8IGcgcGALSsUdUGQ&usqp=CAU',
      subtitle: 'Música',
      description: '16/11/2022: El pasado 11 de Noviembre, el artista Argentino Alejo Nahuel Acosta o mejor conocido como "YSY A" lanzo su nuevo y cuarto album llamado "YSYSISMO", que tiene 12 canciones de estilos muy variados como Trap y Rap. La respuesta del publico hacia este disco fue muy positiva, siendo el album Argentino con más reproducciones en su primera semana desde su lkanzamiento, acumuluando 11 millones de reproducciones. Las canciones mas populares hasta ahora fueron "Todo Pago", "Reventando Relojes" y "Cuantos Terminos"'
    },
    {
      id: '5',
      title: 'Posible Ataque de Rusia a Polonia',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQ3H60IbqMOFJ2Zs0kQynXZV6hZFuYJzzhA&usqp=CAU',
      subtitle: 'Guerra',
      description: '17/11/2022: En la madrugada del día de ayer, un misil ruso impacto en una zona rural de Polonia, dejanndo así 2 víctimas fatales. Esto fue muy cerca de la frontera entre Polonia y Ucrania (País que esta en guerra con Rusia). La situación creó mucha incertidumbre en el gobierno Polaco, por lo tanto, su Primer Ministro convoco a una reunión de urgencia, con su gabinete de seguridad para ver que medidad o decisones tomar al respecto, ya que Polonia es un país de la Otan.'
    },
    {
      id: '6',
      title: 'Pronostico desalentador de la economía Argentina en 2023',
      imageURL: 'https://resizer.glanacion.com/resizer/cACXZavehmF4xitl0Beal9GhJrI=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/ZXSOZVGCYBFFLJXWNUIBPKK4AM.jpeg',
      subtitle: 'Economía',
      description: '17/11/2022: Más de 50 consultoras argentinas y extranjeras pronosticaron una inflación mayor en un 90%. Los principales estudios detectaron una posible caída en el crecimiento economicó, riesgos para el pago de la deuda externa y mayor devaluación de la moneda. Con respecto a la divisa estadounidense, anticipan un valor de 318 pesos por dolar, además los impuestos aumentarían en un 35%.'
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
