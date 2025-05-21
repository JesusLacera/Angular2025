import { Component } from '@angular/core';
import { Contacto } from '../module/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../Service/agenda.service';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule, CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css',
})
export class AgendaComponent {
  nombre: string = '';
  telefono: string = '';
  email: string = '';
  contactos: Contacto[];
  constructor(private agenda: AgendaService) {}
  guardar() {
    let contactos = new Contacto(this.nombre, this.email, this.telefono);
    this.agenda.guardar(contactos);
  }
  eliminar(c) {
    this.agenda.eliminar(c);
  }
  mostrar() {
    this.contactos = this.agenda.mostrar();
  }
}
