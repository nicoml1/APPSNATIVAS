import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'noticias-detalle',
    loadChildren: () => import('./noticias-detalle/noticias-detalle.module').then( m => m.NoticiasDetallePageModule)
  },
  {
    path: 'addnoticia',
    loadChildren: () => import('./addnoticia/addnoticia.module').then( m => m.AddnoticiaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
