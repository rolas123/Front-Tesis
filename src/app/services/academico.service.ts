import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from './../models/Estudiante';

@Injectable({
  providedIn: 'root'
})
export class AcademicoService {

  urlBackEnd: string;

  constructor(private http: HttpClient) {this.urlBackEnd = environment.backEndURL;}

  
  getTodosEstudiantes(): Observable<any> {
    return this.http.get(this.urlBackEnd + '/estudiantes');
  }

  /*
  //TODO: probar para insertar estudinate, con numeroPersonal 
  getTodosEstudiantes(estudiante: Estudiante, numeroPersonal:String): Observable<any> {
    return this.http.get(this.urlBackEnd + '/estudiantes' + estudiante + numeroPersonal);
  }*/
/*
  nuevoEstudiante(estudiante: Estudiante, numeroPersonal: string): Observable<any>{ // cambiar datos para enviar 
    return this.http.put(this.urlBackEnd + '/estudiantes/' , estudiante + numeroPersonal);
  }*/


  nuevoEstudiante(npp: number, estudiante: Estudiante): Observable<any>{ // cambiar datos para enviar 
    return this.http.post(this.urlBackEnd + '/estudiantes/${npp}/estudiante/' , estudiante);
  }

  actualizarEstudiante(estudiante: Estudiante): Observable<any>{
    return this.http.put(this.urlBackEnd + '/estudiantes/' + estudiante.matricula , estudiante);
  }

  deleteEstudiante(estudiante: Estudiante): Observable<any>{
    return this.http.delete(this.urlBackEnd + '/estudiantes/' + estudiante.matricula);
  }
}
