import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  imports: [FormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css',
})
export class NotasComponent {
  //Declaracion de variables
  notas: number[] = [];
  nota: number;
  media: number;
  alta: number;
  baja: number;
  aprobados: number;

  //metodos de respuesta de eventos
  guardar(): void {
    this.notas.push(this.nota);
  }

  datos(): void {
    this.media = this.calculaMedia();
    this.alta = this.calculaAlta();
    this.baja = this.calculaBaja();
    this.aprobados = this.totalAprobados();
  }

  //Estos metodos son para uso interno de los metodos
  //de evento

  calculaMedia(): number {
    let suma: number = this.notas.reduce((a, b) => a + b);
    return suma / this.notas.length;
  }

  calculaAlta(): number {
    let max = this.notas[0];
    this.notas.forEach((n) => {
      if (n > max) {
        max = n;
      }
    });
    return max;
  }

  calculaBaja(): number {
    let min = this.notas[0];
    this.notas.forEach((n) => {
      if (n < min) {
        min = n;
      }
    });
    return min;
  }

  totalAprobados(): number {
    let total = 0;
    this.notas.forEach((n) => {
      if (n >= 5) {
        total++;
      }
    });
    return total;

    //Esta es otra forma de hacerlo,pero no es tan legible
    //  return this.notas.filter(n=>n=5).length;
  }
}
