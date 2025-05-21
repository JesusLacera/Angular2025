import { Component } from '@angular/core';
import { ImportService } from '../../service/import.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Item } from '../../modelo/item';
@Component({
  selector: 'app-eliminar',
  imports: [FormsModule, CommonModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css',
})
export class EliminarComponent {
  tematica: string = '';
  item: Item[] = [];
  constructor(private importService: ImportService) {}

  eliminar(tematica: string): void {
    this.importService
      .eliminar(this.tematica)
      .subscribe((r) => (this.item = r));
  }
}
