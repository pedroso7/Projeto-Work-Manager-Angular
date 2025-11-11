import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tela } from './tela/tela';
import { Cadastro } from './cadastro/cadastro';

const routes: Routes = [
  {path: 'tela', component: Tela},
  {path: 'cadastro', component: Cadastro}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
