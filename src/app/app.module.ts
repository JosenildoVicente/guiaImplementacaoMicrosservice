import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes.component';
import { ClienteService } from './cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'clientes',
        component: ClientesComponent
      }
    ])
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }