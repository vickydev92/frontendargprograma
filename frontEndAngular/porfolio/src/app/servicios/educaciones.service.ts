import { Injectable } from '@angular/core';
import { Educacion } from '../modelos/usuario/educacion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionesService {

  public url=this.gService.backUrl
  
  constructor(private http:HttpClient,private gService:GeneralService) { }
  
  public crearEducacion(educacion:Educacion):Observable<Educacion>{
  return this.http.post<Educacion>(this.url+"/api/educacion", educacion);  
}

  public editarEducacion(id:number, educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(this.url+"/api/educacion/" + id, educacion);   

  }
  public eliminarEducacion(id:number):Observable<void>{
     return this.http.delete<void>(this.url+"/api/educacion/" + id);   
  }
  
}
