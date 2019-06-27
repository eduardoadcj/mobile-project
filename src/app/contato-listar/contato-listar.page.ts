import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../modelo/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contato-listar',
  templateUrl: './contato-listar.page.html',
  styleUrls: ['./contato-listar.page.scss'],
})
export class ContatoListarPage implements OnInit {

  listaContatos: Observable<Contato[]>;

  constructor(private fire: AngularFireDatabase){
    this.listaContatos = this.fire.list<Contato>('contato').snapshotChanges().pipe(
      map( lista => lista.map( linha => ({key: linha.payload.key, ... linha.payload.val() }) ))
    );
  }

  ngOnInit(){

  }

}
