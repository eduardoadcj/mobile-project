import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Contato } from '../modelo/contato';

import { IonicModule } from '@ionic/angular';

import { ContatoListarPage } from './contato-listar.page';

const routes: Routes = [
  {
    path: '',
    component: ContatoListarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContatoListarPage]
})
export class ContatoListarPageModule implements OnInit{

  listaContatos: Observable<Contato[]>;

  ngOnInit(){

  }

}
