import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
 public vistabtn: boolean = false;

  constructor(private http:HttpClient) { }


public obtenerInfo(): Observable<any>{
  return this.http.get("./assets/db.json")

}


}
