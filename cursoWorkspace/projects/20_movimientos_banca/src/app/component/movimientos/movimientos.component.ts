import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimiento } from '../../model/movimiento';

@Component({
  selector: 'app-movimientos',
  imports: [FormsModule, CommonModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css',
})
export class MovimientosComponent {
  idCuenta: number;
  fechaInicial: Date;
  fechaFinal: Date;
  resultado: Movimiento[] = [];
}
