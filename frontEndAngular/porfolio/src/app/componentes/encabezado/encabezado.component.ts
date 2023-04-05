import { Component } from '@angular/core';
import { GeneralService } from 'src/app/general.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  miPorfolio:any;
  constructor(public generalService: GeneralService){
  }

ngOnInit(): void{
  this.generalService.obtenerInfo().subscribe(data =>{
    console.log(data[0]);
    this.miPorfolio=data[0];
  });
}
  
}
