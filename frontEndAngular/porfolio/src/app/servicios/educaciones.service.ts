import { Injectable } from '@angular/core';
import { Educacion } from '../modelos/usuario/educacion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionesService {
  educacion:Educacion | undefined;
  constructor(private http:HttpClient) { }
  
  public crearEducacion(educacion:Educacion):Observable<Educacion>{
  return this.http.post<Educacion>("http://localhost:8080/api/educacion", educacion);  
}

  public editarEducacion(id:number, educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>("http://localhost:8080/api/educacion/" + id, educacion);   

  }
  public eliminarEducacion(educacion:Educacion):Observable<Educacion>{
     return this.http.delete<Educacion>("http://localhost:8080/api/educacion/" + educacion.id);   
  }
  
}
