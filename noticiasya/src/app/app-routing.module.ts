import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'guardadas',
    loadChildren: () => import('./guardadas/guardadas.module').then( m => m.GuardadasPageModule)
  },
  {
    path: 'cerrar',
    loadChildren: () => import('./cerrar/cerrar.module').then( m => m.CerrarPageModule)
  },
  {
    path: 'inicio',
    children: [
      {
        path: "",
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: ":noticiaId",
        loadChildren: () => import('./inicio/noticias-detalle/noticias-detalle.module').then(m => m.NoticiasDetallePageModule)
      }
    ]
  },
  {
    path: 'new-noticia',
    loadChildren: () => import('./inicio/addnoticia/addnoticia.module').then(m => m.AddnoticiaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
