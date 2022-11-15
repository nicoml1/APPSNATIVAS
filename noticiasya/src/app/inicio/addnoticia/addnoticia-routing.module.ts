import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnoticiaPage } from './addnoticia.page';

const routes: Routes = [
  {
    path: '',
    component: AddnoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddnoticiaPageRoutingModule {}
