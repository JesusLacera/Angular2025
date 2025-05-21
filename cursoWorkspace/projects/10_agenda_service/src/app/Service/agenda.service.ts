import { Injectable } from '@angular/core';
import { Contacto } from '../module/Contacto';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  constructor() {}

  agenda: Contacto[] = [];
  guardar(contacto: Contacto): void {
    this.agenda.push(contacto);
  }
  eliminar(c): void {
    let posicion = this.agenda.indexOf(c);
    this.agenda.splice(posicion, 1);
  }
  mostrar(): Contacto[] {
    return this.agenda;
  }
}
