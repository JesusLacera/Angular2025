import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root',
})
export class ContactosService {
  url = 'http://localhost:3000/contactos';
  constructor(private http: HttpClient) {}

  // alta(contacto: Contacto): Observable<any> {
  // return this.http.post(this.url + '/alta', contacto);
  // }
  //El posible error se captura en el back

  alta(contacto: Contacto): Observable<boolean> {
    return this.http.post(this.url + '/alta', contacto).pipe(
      map(() => true),
      catchError((e) => of(false))
    );
  }
}
