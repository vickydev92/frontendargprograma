import { Injectable } from '@angular/core';
import { Proyectos } from '../modelos/proyectos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  public url=this.gService.backUrl

  constructor(private http:HttpClient,private gService:GeneralService) { }
  
  public crearProyecto(proyecto:Proyectos):Observable<Proyectos>{
  return this.http.post<Proyectos>(this.url+"/api/proyectos", proyecto);  
}

  public editarProyectos(id:number, proyecto: Proyectos):Observable<Proyectos>{
    return this.http.put<Proyectos>(this.url+"/api/proyectos/" + id, proyecto);   

  }
  public eliminarProyecto(id:number):Observable<void>{
     return this.http.delete<void>(this.url+"/api/proyectos/" + id);   
  }
}

