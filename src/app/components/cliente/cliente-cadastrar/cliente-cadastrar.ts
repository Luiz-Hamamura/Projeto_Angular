import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente';

@Component({
  selector: 'app-cliente-cadastrar',

  imports: [
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],

  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.css'
})
export class ClienteCadastrar {

  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService) {
  }

  salvar(): void {

    this.clienteService.salvar(this.cliente);

    alert('Cliente cadastrado com sucesso!');

    this.cliente = new Cliente();
  }
}
