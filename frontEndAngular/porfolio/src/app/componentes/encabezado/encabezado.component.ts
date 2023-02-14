import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { GeneralService } from 'src/app/general.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  constructor(public generalService: GeneralService){
  }
  
}
