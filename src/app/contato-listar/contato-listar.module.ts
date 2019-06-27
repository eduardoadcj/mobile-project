import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Contato } from '../modelo/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

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

  constructor(private fire: AngularFireDatabase){
    this.listaContatos = this.fire.list<Contato>('contato').snapshotChanges().pipe(
      map( lista => lista.map( lista => ({  key: lista.payload.key,... lista.payload.val() }) ))
    );
  }

  ngOnInit(){

  }

}
