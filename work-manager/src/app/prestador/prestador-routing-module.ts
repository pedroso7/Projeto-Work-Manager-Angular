import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Editar } from './editar/editar';
import { Listagem } from './listagem/listagem';

const routes: Routes = [
  {path: 'cadastro', component: Cadastro},
  {path: 'editar', component: Editar},
  {path: 'listagem', component: Listagem},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadorRoutingModule { }
