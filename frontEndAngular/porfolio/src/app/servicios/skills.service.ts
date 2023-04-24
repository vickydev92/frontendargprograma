import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../modelos/usuario/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

constructor(private http:HttpClient) { }
  
  public crearSkills(skills:Skills):Observable<Skills>{
  return this.http.post<Skills>("http://localhost:8080/api/skills", skills);  
}

  public editarSkills(id:number, skills: Skills):Observable<Skills>{
    return this.http.put<Skills>("http://localhost:8080/api/skills/" + id, skills);   

  }
  public eliminarSkills(id:number):Observable<void>{
     return this.http.delete<void>("http://localhost:8080/api/skills/" + id);   
  }
}
