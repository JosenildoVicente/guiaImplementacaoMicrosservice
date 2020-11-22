import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'my-app'
   constructor(private alunoService: ClienteService) {}

   cliente: Cliente = new Cliente();
   clientes: Cliente[] = [];
   cpfduplicado: boolean = false;

   criarAluno(a: Cliente): void {
     if (this.alunoService.criar(a)) {
       this.clientes.push(a);
       this.cliente = new Cliente();
     } else {
       this.cpfduplicado = true;
     }
   }

   onMove(): void {
      this.cpfduplicado = false;
   }

}