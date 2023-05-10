import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/usuario/persona';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  persona:Persona | undefined;
  public url=this.gService.backUrl;
  constructor(private http:HttpClient,private gService:GeneralService) { }
  
  // public crearPersona(persona:Persona):Observable<Persona>{
  //   return this.http.post<Persona>("http://localhost:8080/api/personas", persona);  
  // }
  public editarPersona(id:number, persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(this.url+"/api/personas/" + id, persona);   

  }
  // public eliminarPersona(persona:Persona):Observable<Persona>{
  //   return this.http.delete<Persona>("http://localhost:8080/api/personas/" + persona.id);   
  // }
  
}
