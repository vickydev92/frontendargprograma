import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../modelos/usuario/skills';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  public url=this.gService.backUrl;
constructor(private http:HttpClient, private gService:GeneralService) { }
  
  public crearSkills(skills:Skills):Observable<Skills>{
  return this.http.post<Skills>(this.url+"/api/skills", skills);  
}

  public editarSkills(id:number, skills: Skills):Observable<Skills>{
    return this.http.put<Skills>(this.url+"/api/skills/" + id, skills);   

  }
  public eliminarSkills(id:number):Observable<void>{
     return this.http.delete<void>(this.url+"/api/skills/" + id);   
  }
}
