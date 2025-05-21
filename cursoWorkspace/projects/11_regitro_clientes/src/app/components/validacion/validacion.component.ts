import { Component } from '@angular/core';
import { ClienteService } from '../../Service/cliente.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule, CommonModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css',
})
export class ValidacionComponent {
  usuario: string;
  contrasena: string;
  constructor(private clientesService: ClienteService) {}
  validar() {
    let respuesta = this.clientesService.validar(this.usuario, this.contrasena);
    if (respuesta) {
      alert('Usuario valido!!');
    } else {
      alert('No esta registrado!!');
    }
  }
}
