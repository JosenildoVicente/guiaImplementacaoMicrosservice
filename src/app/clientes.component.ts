import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
   constructor(private clienteService: ClienteService) {}

   cliente: Cliente = new Cliente();
   clientes: Cliente[] = [];
   cpfduplicado: boolean = false;

   criarCliente(a: Cliente): void {
     if (this.clienteService.criar(a)) {
       this.clientes.push(a);
       this.cliente = new Cliente();
     } else {
       this.cpfduplicado = true;
     }
   }

   onMove(): void {
      this.cpfduplicado = false;
   }

   ngOnInit(): void {
     this.clientes = this.clienteService.getAlunos();
   }

}