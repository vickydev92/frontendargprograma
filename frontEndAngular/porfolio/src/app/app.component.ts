import { Component } from '@angular/core';
import { GeneralService } from './general.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio';
  miPorfolio:any;

  constructor(private generalService: GeneralService, private dataService: DataService){}
  ngOnInit(){
    this.cargarDatosDelPorfolio();
  }

  public cargarDatosDelPorfolio(){
    this.generalService.obtenerInfo().subscribe(data=> {
      this.miPorfolio = data [0];
      this.dataService.setMiPorfolio(this.miPorfolio); //Almacenar los datos en el servicio
    });
  }
}
