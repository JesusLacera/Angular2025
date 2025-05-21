import { ClienteService as ExternalClienteService } from './cliente.service';
import { Injectable } from '@angular/core';
import { Cliente } from '../Module/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor() {}
  cliente: Cliente[] = [];

  validar(usuario: string, contrasena: string): boolean {
    //devuelve el resultado de la llamada al metodo some
    return this.cliente.some(
      (c) => c.usuario == usuario && c.contrasena == contrasena
    );
  }

  registrar(cliente: Cliente): void {
    this.cliente.push(cliente);
  }
}
