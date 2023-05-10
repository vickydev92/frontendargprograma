import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../modelos/usuario/experiencia';
import { Observable } from 'rxjs';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciasService {
public url=this.gService.backUrl;
  constructor(private http:HttpClient, private gService:GeneralService) { }
  
  public crearExperiencia(experiencia:Experiencia):Observable<Experiencia>{
  return this.http.post<Experiencia>(this.url+"/api/experiencia", experiencia);  
}

  public editarExperiencia(id:number, experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(this.url+"/api/experiencia/" + id, experiencia);   

  }
  public eliminarExperiencia(id:number):Observable<void>{
     return this.http.delete<void>(this.url+"/api/experiencia/" + id);   
  }
}
