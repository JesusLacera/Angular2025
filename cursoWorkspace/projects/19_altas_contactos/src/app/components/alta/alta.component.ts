import { ContactosService } from './../../service/contactos.service';
import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alta',
  imports: [FormsModule, CommonModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css',
})
export class AltaComponent {
  mensaje: string;
  contacto: Contacto = new Contacto();
  constructor(private contactosService: ContactosService) {}

  alta() {
    //Si el error se controla aqui
    /*
    this.contactosService.alta(this.contacto).subscribe({
      next: (data) => (this.mensaje = 'Contacto agregado'),
      error: (error) => (this.mensaje = 'No se pudo dar de alta el contacto!!'),
    }); */
    //Si el error se controla en el service
    this.contactosService.alta(this.contacto).subscribe((data) => {
      if (data) {
        this.mensaje = 'Contacto agregado';
      } else {
        this.mensaje = 'No se pudo dar de alta el contacto!!';
      }
    });
  }
}
