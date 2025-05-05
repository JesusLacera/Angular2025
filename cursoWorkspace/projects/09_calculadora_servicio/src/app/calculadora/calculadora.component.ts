import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculadoraService } from '../service/CalculadoraService';

@Component({
  selector: 'app-calculadora',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: string;

  //variable para el objeto de servicio
  calService: CalculadoraService;
  constructor() {
    this.calService = new CalculadoraService();
  }

  sumar(): void {
    this.resultado = `La suma es ${this.calService.sumar(
      this.num1,
      this.num2
    )}`;
  }

  restar(): void {
    this.resultado = `La resta es ${this.calService.restar(
      this.num1,
      this.num2
    )}`;
  }

  multiplicar(): void {
    this.resultado = `La multiplicacion es ${this.calService.multiplicar(
      this.num1,
      this.num2
    )}`;
  }

  dividir(): void {
    this.resultado = `La dicision es ${this.calService.dividir(
      this.num1,
      this.num2
    )}`;
  }

  factorial(): void {
    this.resultado = `El factorial de num1 es ${this.calService.factorial(
      this.num1
    )}`;
  }
}
