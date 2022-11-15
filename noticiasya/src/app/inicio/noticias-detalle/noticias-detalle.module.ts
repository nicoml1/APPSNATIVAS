import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasDetallePageRoutingModule } from './noticias-detalle-routing.module';

import { NoticiasDetallePage } from './noticias-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasDetallePageRoutingModule
  ],
  declarations: [NoticiasDetallePage]
})
export class NoticiasDetallePageModule {}
