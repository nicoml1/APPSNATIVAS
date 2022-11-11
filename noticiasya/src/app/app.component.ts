import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Mi perfil', url: '/perfil', icon: 'person' },
    { title: 'Guardadas', url: '/guardadas', icon: 'bookmark' },
    { title: 'Cerrar sesión', url: '/cerrar', icon: 'log-out' }
  ];
  constructor() {}
}
