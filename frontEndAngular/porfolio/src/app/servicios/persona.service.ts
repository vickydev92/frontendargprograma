import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/usuario/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  persona:Persona | undefined;
  constructor(private http:HttpClient) { }
  
  // public crearPersona(persona:Persona):Observable<Persona>{
  //   return this.http.post<Persona>("http://localhost:8080/api/personas", persona);  
  // }
  public editarPersona(id:number, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>("http://localhost:8080/api/personas/" + id, persona);   

  }
  // public eliminarPersona(persona:Persona):Observable<Persona>{
  //   return this.http.delete<Persona>("http://localhost:8080/api/personas/" + persona.id);   
  // }
  
}
