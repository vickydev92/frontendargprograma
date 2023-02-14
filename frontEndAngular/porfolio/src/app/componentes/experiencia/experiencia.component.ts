import { Component } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent {
  constructor(public generalService: GeneralService){

  }

  ngOnInit(){
    
  }
}
