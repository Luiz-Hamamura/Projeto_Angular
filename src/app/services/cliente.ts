import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientes: Cliente[] = [];

  constructor() {
  }

  salvar(cliente: Cliente): void {
    cliente.id = this.clientes.length + 1;

    this.clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  listar(): Cliente[] {
    return this.clientes;
  }
}
