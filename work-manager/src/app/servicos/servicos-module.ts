import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Editar } from './editar/editar';
import { Listagem } from './listagem/listagem';


@NgModule({
  declarations: [
    Cadastro,
    Editar,
    Listagem
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }
