import { Component } from '@angular/core';
import { ImportService } from '../../service/import.service';
import { Item } from '../../modelo/item';

@Component({
  selector: 'app-nuevo',
  imports: [],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css',
})
export class NuevoComponent {
  urlNuevo: string;
  tematicaNuevo: string;
  descripcionNuevo: string;

  constructor(private importService: ImportService) {}

  nuevo(): void {
    const anadir: Item = {
      url: this.urlNuevo,
      tematica: this.tematicaNuevo,
      descripcion: this.descripcionNuevo,
    };
    this.importService.nuevo(anadir).subscribe();
  }
}
