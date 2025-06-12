import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Matricula } from '../models/matriculas';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  constructor(private http:HttpClient) {
    this.getDatosCurso()
   }

  getDatosCurso():Observable<Curso[]>{
    const url:string = `${urlBase}"/matriculaciones/cursos`
    return this.http.get<Curso[]>(url)
  }


  getAlumnosMatriculados(idCurso:number):Observable<Matricula[]>{
    return this.http.get<Matricula[]>(`${urlBase}/matriculaciones/matriculas/${idCurso}`)
  }
}
