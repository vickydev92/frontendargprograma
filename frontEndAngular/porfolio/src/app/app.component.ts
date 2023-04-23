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
  misEducaciones:any;
  misExperiencias:any;
  misProyectos:any;
  misSkills:any;


  constructor(private generalService: GeneralService, private dataService: DataService){}
  ngOnInit(){
    this.cargarDatosDelPorfolio();
    this.cargarDatosDeEducaciones();
    this.cargarDatosDeExperiencias();
    this.cargarDatosDeProyectos();
    this.cargarDatosDeSkills();
  }

  public cargarDatosDelPorfolio(){
    this.generalService.obtenerInfo().subscribe(data=> {
      this.miPorfolio = data [0];
      this.dataService.setMiPorfolio(this.miPorfolio); //Almacenar los datos en el servicio
    });
  }

  public cargarDatosDeEducaciones(){
    this.generalService.obtenerInfoEdu().subscribe(data=> {
      this.misEducaciones = data;
      this.dataService.setMisEducaciones(this.misEducaciones); //Almacenar los datos en el servicio
    });
  }

  public cargarDatosDeExperiencias(){
    this.generalService.obtenerInfoExp().subscribe(data=> {
      this.misExperiencias = data;
      this.dataService.setMisExperiencias(this.misExperiencias); //Almacenar los datos en el servicio
    });

  }

  public cargarDatosDeProyectos(){
    this.generalService.obtenerInfoProy().subscribe(data=> {
      this.misProyectos = data;
      this.dataService.setMisProyectos(this.misProyectos); //Almacenar los datos en el servicio
    });

  }

  public cargarDatosDeSkills(){
    this.generalService.obtenerInfoSkills().subscribe(data=> {
      this.misSkills = data;
      this.dataService.setMisSkills(this.misSkills); //Almacenar los datos en el servicio
    });

  }
}
