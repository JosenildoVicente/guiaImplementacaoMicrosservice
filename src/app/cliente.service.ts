import { Injectable } from '@angular/core';

import { Cliente } from './cliente';

@Injectable()
export class ClienteService {
  clientes: Cliente[] = [];

  criar(cliente: Cliente): Cliente {
    cliente = cliente.clone();
    var result = null;
    if (this.cpfNaoCadastrado(cliente.cpf)) {
      this.clientes.push(cliente);
      result = cliente;
    }
    else{
      result = new Cliente();
    }
    return result;
  }

  cpfNaoCadastrado(cpf: string): boolean {
     return !this.clientes.find(a => a.cpf == cpf);
  }

  getAlunos(): Cliente[] {
    var result: Cliente[] = [];
    for (let a of this.clientes) {
      result.push(a.clone());
    }
    return result;
  }
}