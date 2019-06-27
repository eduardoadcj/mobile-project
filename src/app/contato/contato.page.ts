import { Component, OnInit } from '@angular/core';
import { Contato } from '../modelo/contato';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  contato: Contato = new Contato();

  constructor(private service: ContatoService) { }

  ngOnInit() {
  }

  salvar() {
    this.service.salvar(this.contato);
    this.contato = new Contato();
  }

}
