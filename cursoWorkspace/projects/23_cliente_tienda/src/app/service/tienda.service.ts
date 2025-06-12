import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../module/Producto';
import { Observable } from 'rxjs';
import { Pedido } from '../module/Pedido';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  token:string;
  username:string="usuario1";
  password:string="usuario1";
  urlBaseRecursos:string="http://localhost:3000/tienda";
  urlAutenticar:string="http://localhost:3000/authentificacion/login";
  constructor(private http:HttpClient) {
    //nos conectamos con el recurso de login para obtener el token
    http.post<any>(this.urlAutenticar,{username:this.username,password:this.password})
    .subscribe(data=>this.token=data.access_token);
  }

  productos():Observable<Producto[]>{
    let head=new HttpHeaders();
    head = head.set("Authorization",`Bearer ${this.token}`)
    return this.http.get<Producto[]>(`${this.urlBaseRecursos}/productos`,{headers:head});
  }

  altaPedido(pedido:Pedido):Observable<void>{
    let head=new HttpHeaders();
     head = head.set("Authorization",`Bearer ${this.token}`);
    return this.http.post<void>(`${this.urlBaseRecursos}/altaPedido`,pedido,{headers:head})
  }
}
