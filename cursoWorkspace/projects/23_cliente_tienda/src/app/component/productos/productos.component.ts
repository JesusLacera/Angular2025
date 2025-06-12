import { Component } from '@angular/core';
import { TiendaService } from '../../service/tienda.service';
import { Producto } from '../../module/Producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [FormsModule,CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
    productos:Producto[]
    constructor(tiendaService:TiendaService){
      tiendaService.productos().subscribe(data=>this.productos=data)
    }
}
