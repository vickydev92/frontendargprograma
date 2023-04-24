import { Injectable } from '@angular/core';
import { Proyectos } from '../modelos/proyectos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }
  
  public crearProyecto(proyecto:Proyectos):Observable<Proyectos>{
  return this.http.post<Proyectos>("http://localhost:8080/api/proyectos", proyecto);  
}

  public editarProyectos(id:number, proyecto: Proyectos):Observable<Proyectos>{
    return this.http.put<Proyectos>("http://localhost:8080/api/proyectos/" + id, proyecto);   

  }
  public eliminarProyecto(id:number):Observable<void>{
     return this.http.delete<void>("http://localhost:8080/api/proyectos/" + id);   
  }
}

