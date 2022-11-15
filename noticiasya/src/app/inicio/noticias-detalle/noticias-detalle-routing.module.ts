import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoticiasDetallePage } from './noticias-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: NoticiasDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoticiasDetallePageRoutingModule {}
