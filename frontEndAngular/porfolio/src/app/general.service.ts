import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
 public vistabtn: boolean = false;
 public iniciar: boolean = false;
 public btnLog: boolean =true;
 public backUrl:string = "http://localhost:8080"

  constructor(private http:HttpClient) { }


public obtenerInfo(): Observable<any>{
  return this.http.get(this.backUrl+"/api/personas")

}

public obtenerInfoEdu(): Observable<any>{
  return this.http.get(this.backUrl+"/api/educacion")
  
}
public obtenerInfoExp(): Observable<any>{
  return this.http.get(this.backUrl+"/api/experiencia")

}
public obtenerInfoSkills(): Observable<any>{
  return this.http.get(this.backUrl+"/api/skills")

}
public obtenerInfoProy(): Observable<any>{
  return this.http.get(this.backUrl+"/api/proyectos")

}

}
