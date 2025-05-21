import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../modelo/item';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  constructor(private http: HttpClient) {}

  import = 'http://localhost:8000/buscador/';

  buscar(tematica: string): Observable<Item[]> {
    return this.http.get<Item[]>(this.import + 'buscar', {
      params: { tematica: tematica },
    });
  }

  nuevo(item: Item) {
    let heads = new HttpHeaders();
    heads = heads.set('Content-Type', 'apliccation/json');
    return this.http.post<Item>(this.import + 'alta', item, { headers: heads });
  }

  eliminar(tematica: string): Observable<Item[]> {
    return this.http.delete<Item[]>(this.import + 'eliminar', {
      params: { tematica: tematica },
    });
  }
}
