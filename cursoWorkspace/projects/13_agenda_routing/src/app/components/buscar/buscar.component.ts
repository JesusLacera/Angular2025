import { Component } from '@angular/core';
import { AgendaService } from '../../Service/agenda.service';
import { Contacto } from '../../model/Contacto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css',
})
export class BuscarComponent {
  email: string;
  contactoEncontrado: Contacto;
  constructor(private agendaService: AgendaService) {}
  buscar() {
    this.contactoEncontrado = this.agendaService.buscar(this.email);
  }
}
