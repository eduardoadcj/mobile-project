import { Component, OnInit } from '@angular/core';
import { Contato } from '../modelo/contato';
import { ContatoService } from '../service/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  contato: Contato = new Contato();

  constructor(private service: ContatoService, private rota: Router) { }

  ngOnInit() {
  }

  salvar() {
    this.service.salvar(this.contato);
    this.contato = new Contato();
    this.rota.navigate(['contato-listar']);
  }

}
