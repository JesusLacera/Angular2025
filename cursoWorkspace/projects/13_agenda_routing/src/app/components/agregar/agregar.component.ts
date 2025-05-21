import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../../model/Contacto';
import { AgendaService } from '../../Service/agenda.service';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css',
})
export class AgregarComponent {
  nombre: string;
  email: string;
  telefono: string;

  mensaje: string;

  constructor(private agregarComponent: AgendaService) {}
  guardar(): void {
    let c: Contacto = new Contacto(this.nombre, this.email, this.telefono);
    let r: boolean = this.agregarComponent.guardar(c);
    if (r) {
      this.mensaje = 'Se a guardado el contacto';
    } else {
      this.mensaje = 'No se admiten emails repetidos';
    }
  }
}
