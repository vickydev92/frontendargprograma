import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private miPorfolioSource = new BehaviorSubject<any>(null);
miPorfolio$ = this.miPorfolioSource.asObservable();


  constructor() {}

  setMiPorfolio(data:any){
    this.miPorfolioSource.next(data);
  }
}
