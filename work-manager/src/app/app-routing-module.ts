import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente-module').then(m => m.ClienteModule)
  },
  {
    path: 'contrato',
    loadChildren: () => import('./contrato/contrato-module').then(m => m.ContratoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
