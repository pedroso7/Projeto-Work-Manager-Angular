import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prestador',
    loadChildren: () => import('./prestador/prestador-module').then(m => m.PrestadorModule)
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos-module').then(m => m.ServicosModule)
  },
  {
    path: '', redirectTo: 'servicos', pathMatch: 'full'
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
