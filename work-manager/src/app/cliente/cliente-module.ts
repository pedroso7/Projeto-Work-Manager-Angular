import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing-module';
import { Tela } from './tela/tela';
import { Cadastro } from './cadastro/cadastro';


@NgModule({
  declarations: [
    Tela,
    Cadastro
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
