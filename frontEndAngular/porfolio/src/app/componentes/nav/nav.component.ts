import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/general.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public rutaImagen="../../../assets/img/usuario.png";
  public formulario!: FormGroup;

  constructor(private ruta : Router, public generalService: GeneralService, private formBuilder:FormBuilder){
    this.formulario= this.formBuilder.group ({
      nuevaRutaImagen: ['']
    });
  }

  ngOnInit(){
  }

  cerrarSesion(){
    this.generalService.vistabtn = false;
    (document.getElementById("iniciar") as HTMLElement).style.display = "block"; 
    this.ruta.navigate(['/'])
  }

  cambiarImagen(){
    this.rutaImagen = this.formulario.value.nuevaRutaImagen;
    this.formulario.reset () ;
    
  }
}

