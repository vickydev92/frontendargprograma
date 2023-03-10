import { Component } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(public generalService: GeneralService){}
  proyectoList:any;


  
  ngOnInit(): void{
    this.generalService.obtenerInfo().subscribe(data =>{
      console.log(data);
      this.proyectoList=data.proyectos;
    });
  }
}


