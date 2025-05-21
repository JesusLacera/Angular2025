import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { AgendaService } from '../../Service/agenda.service';

@Component({
  selector: 'app-all',
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent {
  agenda: Contacto[] = [];
  visible: boolean = false;
  constructor(private allComponent: AgendaService) {
    this.agenda = this.allComponent.recuperar();
  }

  eliminar;

  mostrar() {
    this.agenda = this.allComponent.mostrar();
  }
}
