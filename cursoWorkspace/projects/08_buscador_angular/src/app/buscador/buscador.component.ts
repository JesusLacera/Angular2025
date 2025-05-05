import { Pagina } from '../model/Pagina';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
  datos: Pagina[] = [
    new Pagina('deportes', 'https://www.marca.es'),
    new Pagina('deportes', 'https://www.todoFutbol.es'),
    new Pagina('deportes', 'https://www.topGool.es'),
    new Pagina('juegos', 'https://www.mtgStore.es'),
    new Pagina('juegos', 'https://www.stream.es'),
    new Pagina('cocina', 'https://www.resetas.es'),
    new Pagina('juegos', 'https://www.topGuild.es'),
    new Pagina('cocina', 'https://www.cocinaDeLaAbuela.es'),
  ];
  //Para guardar la tematica seleccionada
  temas: string;
  //Para guardar los resultados de la busqueda
  resultado: Pagina[];
  visible: boolean;

  buscar(): void {}

  filtrar() {
    this.visible = true;
    this.resultado = this.datos.filter(
      (pagina) => pagina.tematica == this.temas
    );
    this.temas = '';
  }
}
