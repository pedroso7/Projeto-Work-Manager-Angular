import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratoRoutingModule } from './contrato-routing-module';
import { Tela } from './tela/tela';


@NgModule({
  declarations: [
    Tela
  ],
  imports: [
    CommonModule,
    ContratoRoutingModule
  ]
})
export class ContratoModule { }
