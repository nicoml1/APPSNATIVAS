import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Agregar noticia', url: './inicio/addnoticia', icon: 'add' },
    { title: 'Favoritas', url: './inicio/addnoticia', icon: 'heart' }
  ];
  constructor() {}
}


