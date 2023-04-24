import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../modelos/usuario/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {

  constructor(private http:HttpClient) { }
  
  public crearExperiencia(experiencia:Experiencia):Observable<Experiencia>{
  return this.http.post<Experiencia>("http://localhost:8080/api/experiencia", experiencia);  
}

  public editarExperiencia(id:number, experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>("http://localhost:8080/api/experiencia/" + id, experiencia);   

  }
  public eliminarExperiencia(id:number):Observable<void>{
     return this.http.delete<void>("http://localhost:8080/api/experiencia/" + id);   
  }
}
