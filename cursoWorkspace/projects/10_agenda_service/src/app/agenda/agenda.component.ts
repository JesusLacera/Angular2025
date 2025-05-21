import { Component } from '@angular/core';
import { AgendaService } from '../service/AgendaService';
import { Contacto } from '../module/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  agenda: AgendaService;
  constructor() {
    this.agenda = new AgendaService();
  }
  guardar() {
    let contactos = new Contacto(this.nombre, this.email, this.telefono);
    this.agenda.guardar(contactos);
  }
  eliminar(indice: number) {
    this.agenda.eliminar(indice);
  }
  mostrar() {
    this.contactos = this.agenda.recuperar();
  }
}
