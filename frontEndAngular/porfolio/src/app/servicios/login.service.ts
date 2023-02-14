import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AppComponent } from '../app.component';
import { GeneralService } from '../general.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private formBuilder: FormBuilder, private ruta : Router, private generalService: GeneralService) { }

 
  

  login(formLogin:FormGroup){
    console.log(formLogin.value);


    if 
    (formLogin.get('email')?.value === "victoria@gmail.com" && formLogin.get('password')?.value === "12345678")
    {
      this.generalService.vistabtn = true;
      (document.getElementById("iniciar") as HTMLElement).style.display = "none"; 
      this.ruta.navigate(['/'])

    }else{
      alert("Usuario no registrado");
    } 

  }



}
