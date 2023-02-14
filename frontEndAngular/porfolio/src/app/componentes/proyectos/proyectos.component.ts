import { Component } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(public generalService: GeneralService){}

}
