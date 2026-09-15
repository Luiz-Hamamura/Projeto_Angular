export class Cliente {

  id?: number;
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  endereco: string;

  constructor() {
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.email = '';
    this.endereco = '';
  }
}
