import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  persona:any;
  constructor(private http:HttpClient) { }
  
  public crearPersona(persona:any):Observable<any>{
    return this.http.post<any>("http://localhost:8080/api/personas", persona);  
  }
  public editarPersona(id:number, persona:any):Observable<any>{
    return this.http.put<any>("http://localhost:8080/api/personas/" + id, persona);   
  }
  public eliminarPersona(id:number):Observable<void>{
    return this.http.delete<void>("http://localhost:8080/api/personas/" + id);   
  }
  
}
