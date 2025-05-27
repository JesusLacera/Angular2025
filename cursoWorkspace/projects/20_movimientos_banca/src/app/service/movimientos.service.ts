import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movimiento } from '../model/movimiento';

@Injectable({
  providedIn: 'root',
})
export class MovimientosService {
  url = 'http://localhost:3000/movimientos';
  constructor(private http: HttpClient) {}

  alta(movimiento: Movimiento): Observable<any> {
    return this.http.post(this.url + '/movimiento', movimiento);
  }

  BuscarPorId(idcuenta: number): Observable<any> {
    return this.http.get(`${this.url}/cuenta/${idcuenta}`);
  }

  BuscarPorFechas(fecha1: Date, fecha2: Date): Observable<Movimiento[]> {
    return this.http.get<Movimiento[]>(
      `${this.url}fechas?fechaInicial=${fecha1}&fechaFinal=${fecha2}`
    );
  }
}
