import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Contato } from '../modelo/contato';

@Injectable()
export class ContatoService {

  constructor(private fire: AngularFireDatabase ) { }

  salvar(contato: Contato){
    this.fire.list('contato').push(contato);
  }

}
