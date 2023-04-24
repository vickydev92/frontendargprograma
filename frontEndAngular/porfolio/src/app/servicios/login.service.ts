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
    console.log(formLogin.value);


    if 
    (formLogin.get('email')?.value === "victoria@gmail.com" && formLogin.get('password')?.value === "argentinaprog22")
    {
      this.generalService.vistabtn = true;
      (document.getElementById("iniciar") as HTMLElement).style.display = "none"; 
      this.location.back();

    }else{
      alert("Usuario no registrado");
    } 

  }



}
