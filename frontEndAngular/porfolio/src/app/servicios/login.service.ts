import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GeneralService } from '../general.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private generalService: GeneralService, private location: Location) { }

 
  

  login(formLogin:FormGroup){
    if(formLogin.get('email')?.value === "victoria@gmail.com" && formLogin.get('password')?.value === "argentinaprog22")
    {
      this.generalService.vistabtn = true;
    }else{
      alert("Usuario no registrado");
    } 
  }

}
