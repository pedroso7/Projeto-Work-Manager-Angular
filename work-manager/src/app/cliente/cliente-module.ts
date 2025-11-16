import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing-module';
import { Tela } from './tela/tela';
import { Cadastro } from './cadastro/cadastro';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    Tela,
    Cadastro,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatToolbarModule
  ]
})
export class ClienteModule { }
