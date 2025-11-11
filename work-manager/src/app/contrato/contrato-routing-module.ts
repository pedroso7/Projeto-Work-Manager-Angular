import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tela } from './tela/tela';

const routes: Routes = [
  {path: 'tela', component: Tela}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratoRoutingModule { }
