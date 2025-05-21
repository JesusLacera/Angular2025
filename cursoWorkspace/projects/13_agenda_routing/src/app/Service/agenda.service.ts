import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  constructor() {}

  agenda: Contacto[] = [];
  guardar(contacto: Contacto): boolean {
    //llamamso a buscar para que nos de un contacto con ese email
    //si no hay ninguno guardamos y devolvemos true
    //pero si encuentra uno, no guardamos y devolvemos false

    let c = this.buscar(contacto.email);
    if (c) {
      return false;
    } else {
      this.agenda.push(contacto);
      return true;
    }
  }
  eliminar(c): void {
    let posicion = this.agenda.indexOf(c);
    this.agenda.splice(posicion, 1);
  }
  mostrar(): Contacto[] {
    return this.agenda;
  }

  buscar(email: string): Contacto {
    return this.agenda.find((n) => n.email == email);
  }

  recuperar(): Contacto[] {
    return this.agenda;
  }
}
