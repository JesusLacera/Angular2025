import { ImportService } from './../../service/import.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../modelo/item';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule, CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css',
})
export class BuscarComponent {
  tematica: string = '';
  resultado: Item[] = [];

  constructor(private importService: ImportService) {}

  buscar(tematica: string) {
    this.importService.buscar(tematica).subscribe(t=>this.resultado=t)
  }
}
