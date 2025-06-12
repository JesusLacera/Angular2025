import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimiento } from '../../model/movimiento';
import { MovimientosService } from '../../service/movimientos.service';

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
  movimientos: Movimiento[] = [];
  constructor(private movimientosService: MovimientosService) {}

  verMovimiento() {
    this.movimientosService
      .BuscarPorFechas(this.fechaInicial, this.fechaFinal)
      .subscribe((data) => this.movimientos);
  }
}
