import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  constructor(private ruta : Router, public generalService: GeneralService){}

  cerrarSesion(){
    this.generalService.vistabtn = false;
    (document.getElementById("iniciar") as HTMLElement).style.display = "block"; 
    this.ruta.navigate(['/'])
  }
}

