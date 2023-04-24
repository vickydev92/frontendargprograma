import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/general.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  public rutaImagen="../../../assets/img/usuario.png";
  fotoPerfil:any

  constructor(private ruta : Router, public generalService: GeneralService, public dataService: DataService, private location:Location){
  }

  ngOnInit(): void{
    this.dataService.miPorfolio$.subscribe(data => {
      this.fotoPerfil = data;
    });
  }

  cerrarSesion(){
    this.generalService.vistabtn = false;
    (document.getElementById("iniciar") as HTMLElement).style.display = "block"; 
    this.location.back;
  }

}

