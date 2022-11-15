import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnoticiaPageRoutingModule } from './addnoticia-routing.module';

import { AddnoticiaPage } from './addnoticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnoticiaPageRoutingModule
  ],
  declarations: [AddnoticiaPage]
})
export class AddnoticiaPageModule {}
